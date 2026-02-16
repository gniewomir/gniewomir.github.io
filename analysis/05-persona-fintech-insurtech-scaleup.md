# Persona 5: Recruiter at a FinTech / InsurTech Scaleup

## Persona Profile

**Name:** Anna Wiśniewska
**Role:** Engineering Manager / Hiring Manager (involved directly in hiring)
**Company type:** FinTech or InsurTech scaleup (Series B+, 50–300 people), Polish-founded or with a significant Polish engineering presence. Think: Ramp, Wealthsimple-type companies, or the next Hippo — established enough to have process, small enough to value individual contributors deeply.
**Business model:** Regulated industry product (insurance, payments, lending, investment), subscription or transaction-based revenue, dealing with compliance, audit, and complex domain logic daily.
**What she's hiring for:** Senior Backend Engineer with domain modeling experience, ideally with insurance/finance exposure. B2B or UoP, hybrid preferred, must understand regulated environments.

---

## What Anna Looks For

1. **Domain modeling sophistication** — insurance and finance are complex domains. She needs someone who can model business rules accurately, not just CRUD APIs.
2. **Regulated industry experience** — understanding of audit trails, data integrity, compliance implications of technical decisions
3. **Data migration expertise** — FinTech/InsurTech constantly evolves products, merges data sources, migrates between systems
4. **Testing discipline** — in regulated industries, bugs aren't just UX issues — they're compliance violations. Strong testing culture is non-negotiable.
5. **Proven NestJS/TypeScript/PostgreSQL skills** — her stack is specific and she needs stack-ready hires
6. **Collaborative decision-making** — regulated environments require documentation of technical decisions, cross-team alignment, and sometimes defending choices to auditors
7. **Business context understanding** — can the engineer explain why a technical decision matters for the business?

---

## CV Assessment

### Strengths (What Anna Would Love)

| Aspect | Rating | Why |
|--------|--------|-----|
| **Direct InsurTech experience** | Excellent | 2 years at Hippo Insurance (NYSE-listed) working on Agent Enablement and Underwriting. This is the single strongest qualification on the CV for Anna's role. He's already operated in her exact domain. |
| **Domain modeling & DDD** | Excellent | "Planned and documented redesign of Underwriting Domain", DDD/CQRS at Aterian, "always-valid domain model" philosophy, domain vocabulary emphasis — this is exactly the sophistication Anna needs |
| **Data migration expertise** | Excellent | Led "large data migration project" at Hippo involving "fuzzy matching of data from different sources without common keys" — data migration in financial contexts is high-stakes and he's done it |
| **Audit & compliance awareness** | Strong | "Migration of audit trails" and "proper authentication/authorization" at Pragmatic Coders (real estate SAAS), "observability/telemetry" — he understands regulated-industry infrastructure needs |
| **Testing philosophy** | Excellent | TDD/BDD, BDD-like testing framework at Aterian, testing infrastructure at Ownplay, "automated tests as best documentation" — Anna's compliance team will be thrilled |
| **Exact tech stack** | Excellent | TypeScript, Node, NestJS, PostgreSQL — current stack is a perfect match. Plus GraphQL, REST+OpenAPI, SQS, microservices — he's used Anna's exact toolchain |
| **Quality-first mindset** | Excellent | The quality emphasis that's a liability for startups is a **massive asset** in regulated industries. "Development speed is a function of quality", "bugs that were not persisted and propagated to vendors" — this person understands that in FinTech, a bug in underwriting logic can cost millions. |
| **Business context orientation** | Strong | "What & Why, before How", the underwriting domain redesign was explicitly about "increasing visibility of decision-making process and speed up introducing new products" — he thinks in business terms |

### Weaknesses (What Would Give Anna Pause)

| Aspect | Rating | Why |
|--------|--------|-----|
| **Only one FinTech/InsurTech role** | Minor | Hippo is strong, but it's the only direct financial/insurance industry experience. Other roles are in e-commerce, publishing, gaming, translation — adjacent but different compliance environments. |
| **Underwriting redesign was "planned and documented" not "implemented"** | Moderate | The most impressive-sounding project (underwriting domain redesign) was apparently designed but not built. Anna will want to probe: was this because the contract ended? Was the design validated? Was it implemented by someone else? The distinction between "I designed it" and "I built and shipped it" matters. |
| **Title was "Software Engineer" not "Senior"** | Minor | At Hippo, the title was "Software Engineer" — not "Senior." In FinTech, where title inflation is common, this might raise questions about actual seniority level during the engagement. |
| **No explicit compliance/regulatory knowledge** | Moderate | The experience shows relevant work (audit trails, auth), but there's no explicit mention of SOC 2, PCI DSS, GDPR-specific work, or insurance regulatory frameworks. These keywords matter for Anna. |
| **"Not a manager" in a domain where Tech Leads need to bridge engineering and compliance** | Minor | In regulated industries, senior engineers often need to interface with compliance teams, explain technical decisions to non-technical auditors, and own regulatory adherence for their domain. The "not a manager" stance shouldn't block this, but Anna will probe. |
| **No education section** | Minor | Less critical than for enterprise, but FinTech companies with banking licenses may have regulatory requirements around employee qualifications. |

### Overall Score: 9/10

Anna would be **very excited** about this candidate. The combination of direct InsurTech experience, domain modeling sophistication, testing discipline, exact tech stack match, and quality-first mindset makes him an near-ideal fit. The Hippo experience alone puts him in a rare category — most backend developers haven't operated in the insurance domain with this level of domain engagement.

---

## Recommendations for This Persona

### Must-Do

1. **Clarify the underwriting domain redesign outcome.** Was it implemented? Is it being implemented? Was it shelved? Did someone else build it from your design? Be specific: "Planned and documented" reads as "designed but didn't build." If the design was adopted and implemented (even by others after you left), say so explicitly. If it wasn't, explain why and what the design's value was.
2. **Add regulatory/compliance keywords.** If you've worked with or are familiar with: SOC 2, PCI DSS, GDPR Article 25 (privacy by design), insurance regulatory reporting, audit logging requirements, data retention policies — mention them explicitly. These are ATS keywords and demonstrate domain awareness.

### Should-Do

3. **Expand the Hippo section significantly.** This is your crown jewel for FinTech/InsurTech roles. Add:
   - Team size and structure
   - Number of microservices you worked with
   - Scale indicators (transactions/day, data volume, agent count)
   - The fuzzy matching data migration: what was the accuracy? How much data? What were the stakes?
   - Architecture decisions you made and their business impact
4. **Add "Domain Expertise" to your executive summary.** Something like: "Deepest domain experience in Insurance/InsurTech (underwriting, agent enablement, sales operations) and E-commerce/Affiliate platforms." This helps Anna immediately see the fit.
5. **Emphasize the "defensive programming" angle.** Your "negative-space/defensive programming & always-valid domain model" philosophy is exactly what regulated industries need. Consider elevating this from the philosophy section to the executive summary or making it a key bullet in relevant job descriptions.

### Nice-to-Have

6. ~~**Mention Salesforce expertise** explicitly in a skills section.~~ **DONE.** The new Technology Summary lists Salesforce (~2 years) under Frameworks, Platforms & APIs.
7. ~~**Add "Event-driven architecture" as a key skill.**~~ **PARTIALLY DONE.** The Technology Summary includes "CQRS, Events, Queues" under Concepts, which covers this. The section also implicitly surfaces Kafka (~1 year) under DevOps. This is now visible to ATS and hiring managers scanning the summary.
8. **Consider writing a blog post about domain modeling in insurance** (or underwriting specifically). It would serve as both a portfolio piece and a proof of expertise that Anna can share with her team before the interview.

### Strategic Note

FinTech/InsurTech scaleups represent the **strongest natural fit** for this candidate's current profile. The combination of exact tech stack, domain experience, quality-first mindset, and testing discipline aligns almost perfectly with what these companies need. The main action items are about making the existing strengths more visible and explicit — the substance is already there.
