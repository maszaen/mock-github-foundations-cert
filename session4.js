// Session 4: Domain 6 (Privacy, Security, and Administration) & Domain 7 (Benefits of the GitHub Community)
// Focus: Fine-Grained PATs, Rulesets, Audit Logs, Secret Scanning Push Protection, Licenses, Watch vs Star
window.session4Questions = [
  {
    id: 46,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Access Tokens",
    type: "single",
    question: "A developer needs an automated credential to authenticate with the GitHub REST API from a command-line script. Security policy requires that the token has access ONLY to a single specific repository and automatically expires after 30 days. Which token type should they generate?",
    options: [
      { key: "A", text: "Personal Access Token (classic)" },
      { key: "B", text: "Fine-grained Personal Access Token" },
      { key: "C", text: "Root SSH Host Key" },
      { key: "D", text: "Organization OAuth Web Client Secret" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Fine-grained Personal Access Tokens (PATs) allow granular resource scoping to individual repositories and enforce mandatory expiration dates.",
      analysis: "Unlike classic PATs which grant broad access across all repositories accessible to the user, fine-grained PATs follow the principle of least privilege by allowing users to restrict permissions to specific repos and specific API actions.",
      examTip: "Exam distinction: 'Fine-grained PAT' = Per-repository scoping and mandatory expiration. 'Classic PAT' = Account-wide scope selection."
    }
  },
  {
    id: 47,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Secret Scanning",
    type: "single",
    question: "A platform security team wants to completely block developers from pushing any commit to remote repositories if the commit contains detected cloud provider API keys or private certificates, rather than merely receiving an alert after the secret is already committed. Which feature should they enable?",
    options: [
      { key: "A", text: "Dependabot version updates" },
      { key: "B", text: "Secret Scanning with Push Protection" },
      { key: "C", text: "Git commit signature verification" },
      { key: "D", text: "CodeQL default setup" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Push Protection checks commits in real-time during 'git push' and rejects the push if high-confidence secrets are detected.",
      analysis: "Standard secret scanning alerts administrators after a secret has landed in repository history. Push Protection acts proactively at the front gate, intercepting and blocking the push before the secret enters the remote Git database.",
      examTip: "Keyword: 'Block before push / prevent commit from entering remote' ➔ Push Protection."
    }
  },
  {
    id: 48,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Repository Rulesets",
    type: "single",
    question: "What is a major administrative advantage of configuring 'Repository Rulesets' instead of classic branch protection rules in an enterprise organization?",
    options: [
      { key: "A", text: "Rulesets can only apply to a single branch in a single repository" },
      { key: "B", text: "Rulesets can be defined at the organization level to enforce branch rules across multiple or all repositories simultaneously with granular bypass lists" },
      { key: "C", text: "Rulesets automatically convert private repositories to public" },
      { key: "D", text: "Rulesets eliminate the need for GitHub Actions runners" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Rulesets allow organization administrators to centrally enforce branch and tag protection policies across targeted groups of repositories or an entire organization.",
      analysis: "Classic branch protection must be configured repository by repository. Rulesets scale across thousands of repositories, support target criteria (such as all repos matching a topic or default branches), and provide layered bypass permissions for CI bots or leads.",
      examTip: "Rulesets represent the modern evolution of branch protection, supporting organization-wide governance."
    }
  },
  {
    id: 49,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Audit Log",
    type: "single",
    question: "A corporate compliance officer needs to investigate who deleted an internal repository three weeks ago and which IP address initiated the request. Which GitHub Enterprise feature provides this historical record?",
    options: [
      { key: "A", text: "Insights > Traffic graph" },
      { key: "B", text: "Organization / Enterprise Audit Log" },
      { key: "C", text: "Repository Network graph" },
      { key: "D", text: "GitHub Pulse summary" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "The Audit Log records administrative actions across the organization or enterprise, detailing the actor, action performed, resource targeted, and IP address.",
      analysis: "The Audit Log captures critical compliance events like repository deletion, permission changes, team membership modifications, and 2FA changes.",
      examTip: "For audit and compliance investigations regarding 'who performed an administrative action', the answer is always the Audit Log."
    }
  },
  {
    id: 50,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "SAML SSO",
    type: "single",
    question: "An enterprise organization configures SAML Single Sign-On (SSO). What happens when an organization member accesses a repository in that organization before authenticating through their company's Identity Provider?",
    options: [
      { key: "A", text: "They are permanently removed from the organization" },
      { key: "B", text: "They are prompted to authorize their personal GitHub account with the company Identity Provider (SSO prompt) to access organization assets" },
      { key: "C", text: "They are automatically granted Owner permissions" },
      { key: "D", text: "The repository is automatically cloned to their desktop" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "SAML SSO requires members to link their GitHub personal accounts with the enterprise IdP and re-authenticate when accessing organization-owned resources.",
      analysis: "Members can still use their GitHub accounts for personal repositories, but accessing organization repos requires an active SSO session verified by the corporate IdP.",
      examTip: "SAML SSO links corporate identities with GitHub users, enforcing corporate authentication policies."
    }
  },
  {
    id: 51,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Security Advisories",
    type: "single",
    question: "A security researcher discovers a high-severity vulnerability in a public open-source repository. How can they safely report the vulnerability to maintainers without disclosing details publicly before a patch is ready?",
    options: [
      { key: "A", text: "Open a public issue titled 'URGENT SECURITY VULNERABILITY'" },
      { key: "B", text: "Use Private Vulnerability Reporting / Repository Security Advisories to submit an advisory privately" },
      { key: "C", text: "Post the exploit code on a public GitHub Discussion" },
      { key: "D", text: "Create a pull request directly to the default branch with reproduction steps" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Private Vulnerability Reporting allows external security researchers to privately disclose vulnerabilities directly to repository maintainers within GitHub.",
      analysis: "Maintainers can collaborate with the researcher in a private workspace, test temporary fixes in a private fork, and request a CVE number before publishing the security advisory to the world.",
      examTip: "Coordinated disclosure mechanism on GitHub: Repository Security Advisories & Private Vulnerability Reporting."
    }
  },
  {
    id: 52,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Signed Commits",
    type: "single",
    question: "What does the green 'Verified' badge beside a commit on GitHub indicate?",
    options: [
      { key: "A", text: "The commit has passed all automated CI tests and unit test suites" },
      { key: "B", text: "The commit was cryptographically signed with a recognized GPG, SSH, or S/MIME key registered to the committer's GitHub account" },
      { key: "C", text: "The commit was approved by a repository administrator" },
      { key: "D", text: "The commit does not contain any syntax errors" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "The 'Verified' badge signifies that the commit was cryptographically signed by a key associated with the committer's verified GitHub identity.",
      analysis: "Because Git allows anyone to set any author name or email locally in 'git config', commit signing guarantees that the commit genuinely originated from the stated author and has not been forged.",
      examTip: "Exam trap: 'Verified' on a commit refers strictly to cryptographic signature verification (GPG/SSH/S-MIME), NOT build status or code review approval."
    }
  },
  {
    id: 53,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "IP Allow Lists",
    type: "single",
    question: "An enterprise wants to ensure that repository code and assets can only be accessed by developers connected to the corporate office network or corporate VPN. Which configuration setting fulfills this requirement?",
    options: [
      { key: "A", text: "Repository Topics" },
      { key: "B", text: "IP Allow List configuration in Enterprise/Organization Settings" },
      { key: "C", text: "CODEOWNERS path rules" },
      { key: "D", text: "GitHub Sponsors matching fund" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "IP Allow Lists restrict access to an enterprise or organization's assets to specified IP addresses or CIDR ranges.",
      analysis: "Any request (via Web UI, Git CLI, or API) originating from an IP outside the approved CIDR list is denied, preventing data exfiltration from unauthorized networks.",
      examTip: "Enterprise perimeter security = IP allow lists."
    }
  },
  {
    id: 54,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "Open Source Licensing",
    type: "single",
    question: "What is the fundamental difference between a 'permissive' open-source license (such as MIT or Apache 2.0) and a 'copyleft' open-source license (such as GNU GPLv3)?",
    options: [
      { key: "A", text: "Permissive licenses allow proprietary reuse with minimal restrictions; Copyleft licenses mandate that derivative works must also be distributed under the same open-source license" },
      { key: "B", text: "Copyleft licenses require commercial users to pay monthly royalties to GitHub" },
      { key: "C", text: "Permissive licenses prohibit users from viewing the source code" },
      { key: "D", text: "Copyleft licenses can only be used on Linux operating systems" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Permissive licenses (MIT, Apache) impose very few restrictions on redistribution, while Copyleft licenses (GPL) require modified derivative works to remain open source under equivalent terms.",
      analysis: "Choosing an appropriate LICENSE file is vital for defining how others may legally consume, modify, and distribute project software.",
      examTip: "License categories: Permissive = Minimal obligations (keep copyright notice). Copyleft / Viral = Derivative code must stay open under same license."
    }
  },
  {
    id: 55,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "Repository Watching",
    type: "single",
    question: "A developer wants to receive notifications for a public open-source project ONLY when new formal software versions or release notes are published, without receiving notifications for regular issues or pull requests. Which 'Watch' notification setting should they select?",
    options: [
      { key: "A", text: "All Activity" },
      { key: "B", text: "Participating and @mentions only" },
      { key: "C", text: "Custom > Releases" },
      { key: "D", text: "Ignore" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "The Watch menu allows users to customize notifications to trigger exclusively for new 'Releases'.",
      analysis: "Starring a repo bookmarks it without notifications. Watching a repo allows fine-grained subscription levels: All Activity, Participating/@mentions, Custom (Issues, Pull requests, Releases, Discussions), or Ignore.",
      examTip: "Star = Bookmark / Show appreciation. Watch = Subscribe to notifications. Watch > Releases = Only notified on new release tags."
    }
  },
  {
    id: 56,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "Discoverability",
    type: "single",
    question: "Which metadata element configured on a repository's main page helps users explore and categorize repositories by subject matter (e.g., 'machine-learning', 'react', 'kubernetes') across GitHub Explore?",
    options: [
      { key: "A", text: "Repository Topics" },
      { key: "B", text: "Milestone due dates" },
      { key: "C", text: "Saved Replies" },
      { key: "D", text: "Draft Pull Requests" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Repository Topics are searchable keywords and tags attached to a repository to enhance searchability and indexing across GitHub Explore.",
      analysis: "Topics categorize projects by language, framework, domain, or technology stack, allowing contributors with similar interests to discover the repository.",
      examTip: "Repository Topics appear below the repository description on the right sidebar/header of the repo main page."
    }
  },
  {
    id: 57,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "Community Health Files",
    type: "single",
    question: "Where can an organization place default community health files (such as CONTRIBUTING.md, CODE_OF_CONDUCT.md, or issue templates) so they apply automatically to ALL repositories in the organization that do not have their own copy?",
    options: [
      { key: "A", text: "In a special public repository named '.github' owned by the organization" },
      { key: "B", text: "In the Enterprise billing invoice portal" },
      { key: "C", text: "In an offline USB drive registered with GitHub Support" },
      { key: "D", text: "In a private gist created by the organization owner" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Creating a public repository named '.github' in an organization establishes default community health files for all repositories across that organization.",
      analysis: "Repositories that lack their own local CONTRIBUTING.md or template files will inherit them automatically from the organization's '.github' repository.",
      examTip: "Default organization templates & health files = '<org_name>/.github' repository."
    }
  },
  {
    id: 58,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "GitHub Marketplace",
    type: "single",
    question: "What two primary categories of developer integrations can be discovered, purchased, or installed through the official GitHub Marketplace?",
    options: [
      { key: "A", text: "Physical server racks and monitor cables" },
      { key: "B", text: "GitHub Apps and GitHub Actions" },
      { key: "C", text: "Domain names and SSL certificates" },
      { key: "D", text: "Operating system licenses and office furniture" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "GitHub Marketplace offers GitHub Apps (third-party bot and workflow integrations) and GitHub Actions (reusable CI/CD automation building blocks).",
      analysis: "Marketplace includes both free and paid tools created by GitHub and verified partners to extend the software development lifecycle.",
      examTip: "GitHub Marketplace distributes GitHub Apps and Actions."
    }
  },
  {
    id: 59,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "GitHub Discussions Q&A",
    type: "single",
    question: "In a GitHub Discussion categorized under 'Q&A', who has the permission to mark a community comment as the official 'Answer'?",
    options: [
      { key: "A", text: "Any anonymous visitor to github.com" },
      { key: "B", text: "The author of the discussion and users with write permissions or higher to the repository" },
      { key: "C", text: "Only GitHub customer support employees" },
      { key: "D", text: "Only the author of the first commit in the repository" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "The user who started the Q&A discussion or any collaborator with triage/write/maintain/admin rights can mark a comment as the accepted answer.",
      analysis: "Marking an answer highlights the solution directly beneath the original question, allowing future visitors to find verified solutions immediately.",
      examTip: "Mark answer capability in Discussions Q&A: Author + Collaborators with triage/write+ permissions."
    }
  },
  {
    id: 60,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "Forking Workflows",
    type: "single",
    question: "When a developer forks a public open-source repository on GitHub, where does the newly created fork reside?",
    options: [
      { key: "A", text: "In the developer's personal account (or designated organization) as a distinct remote repository with an upstream link" },
      { key: "B", text: "On the developer's local hard drive only, without any remote presence on GitHub" },
      { key: "C", text: "Directly inside the original owner's private storage folder" },
      { key: "D", text: "In a temporary sandbox deleted after 2 hours" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "A fork creates a server-side copy of the repository in the user's chosen account or organization, retaining a connection back to the original 'upstream' repo.",
      analysis: "Forks enable developers to freely experiment and commit changes without affecting the original project, subsequently opening pull requests to propose changes back upstream.",
      examTip: "Fork = Remote server-side copy on GitHub linked to upstream. Clone = Local copy downloaded to your computer."
    }
  }
];
