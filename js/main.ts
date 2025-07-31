// Add the simplest possible cache busting to PDF download, bc I do not want to deal with Parcel namer plugins atm
document.onreadystatechange = function (_e) {
  // we do not have to wait for DOMLoaded - we need only parsed HTML
  if (document.readyState === 'complete') {
    const linkElement = document.getElementById('pdf-download');
    const originalHref = linkElement.getAttribute('href');
    linkElement.setAttribute('href', `${originalHref}?_=${new Date().getTime()}`);
  }
};

/**
 * Prompt:
 *
 * I need a script to insert to my website, which:
 *
 * * If the current host is localhost adds a button in the top left cornet with the label "edit"
 *   * Clicking this button makes all html elements editable, that are descendants of the main html element & containing inner text
 *   * Clicking this button again makes all html elements not editable, that are descendants of the main html element & containing inner text
 *   * Pressing escape key makes all html elements not editable, that are descendants of the main html element & containing inner text
 * * If the current host is localhost adds a button in the top left cornet with the label "copy html"
 *   * Clicking this button copies html of main html element
 */
document.addEventListener('DOMContentLoaded', () => {
  // Only run this script on the local development server
  if (window.location.hostname !== 'localhost') {
    return;
  }

  let isEditing = false;
  const mainElement = document.querySelector('main');

  // --- Helper function to find all target elements ---
  const getEditableElements = () => {
    if (!mainElement) return [];
    const descendants = mainElement.querySelectorAll('*');
    const elementsToEdit = [];
    descendants.forEach(parent => {
      let hasInnerText = false;
      parent.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
          hasInnerText = true;
        }
      });
      if (hasInnerText) {
        elementsToEdit.push(parent);
      }
    });
    return elementsToEdit;
  };

  // --- Function to enable editing mode ---
  const enableEditing = () => {
    if (!mainElement) {
      alert('Error: Could not find the <main> HTML element.');
      return;
    }
    const elements = getEditableElements();
    if (elements.length === 0) {
      alert('No text elements found within <main> to make editable.');
      return;
    }

    elements.forEach(el => {
      el.contentEditable = 'true';
      el.style.outline = '1px dashed #007bff'; // Visual cue for editable elements
    });

    isEditing = true;
    editButton.textContent = '✅ Stop Editing';
  };

  // --- Function to disable editing mode ---
  const disableEditing = () => {
    if (!mainElement) return;

    getEditableElements().forEach(el => {
      el.removeAttribute('contenteditable');
      el.removeAttribute('style');
    });

    isEditing = false;
    editButton.textContent = '✏️ Edit';
  };

  // --- Create a container for the buttons ---
  const controlsContainer = document.createElement('div');
  controlsContainer.classList.add('hide-in-print');
  controlsContainer.style.position = 'fixed';
  controlsContainer.style.top = '15px';
  controlsContainer.style.left = '15px';
  controlsContainer.style.zIndex = '9999';
  controlsContainer.style.display = 'flex';
  controlsContainer.style.flexDirection = 'column';
  controlsContainer.style.gap = '8px';

  // --- Create the "Edit" Button ---
  const editButton = document.createElement('button');
  editButton.textContent = '✏️ Edit';
  editButton.addEventListener('click', () => {
    // Toggle editing state
    isEditing ? disableEditing() : enableEditing();
  });

  // --- Create the "Copy HTML" Button ---
  const copyButton = document.createElement('button');
  copyButton.textContent = '📄 Copy HTML';
  copyButton.addEventListener('click', () => {
    if (!mainElement) {
      alert('Error: Could not find the <main> HTML element.');
      return;
    }
    disableEditing();
    navigator.clipboard.writeText(mainElement.innerHTML)
      .then(() => {
        copyButton.textContent = 'Copied! 👍';
        setTimeout(() => {
          copyButton.textContent = '📄 Copy HTML';
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy HTML: ', err);
        alert('Could not copy HTML. See console for details.');
      });
  });

  // --- Add global keydown listener for the Escape key ---
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isEditing) {
      disableEditing();
    }
  });

  // --- Append buttons to the container and the container to the page body ---
  controlsContainer.appendChild(editButton);
  controlsContainer.appendChild(copyButton);
  document.body.appendChild(controlsContainer);
});
