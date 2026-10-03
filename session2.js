// Session 2: Domain 4, Domain 5, Domain 6, Domain 7
// Focus: Modern Development, Project Management, Security & Administration, and Community
window.session2Questions = [
  {
    id: 16,
    domain: "Domain 4: Modern Development",
    domainBadge: "Codespaces vs Web Editor",
    type: "single",
    question: "A developer navigates to a repository on github.com and presses the '.' (period) key. What environment opens, and how does it fundamentally differ from a GitHub Codespace?",
    options: [
      { key: "A", text: "It provisions a dedicated cloud virtual machine with a bash terminal, Docker runtime, and full execution compute" },
      { key: "B", text: "It opens the browser-based github.dev web editor without backing compute, terminal access, or code debugging capabilities" },
      { key: "C", text: "It opens the GitHub Actions workflow editor in split-pane view" },
      { key: "D", text: "It immediately clones the repository to the user's desktop using GitHub Desktop" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Pressing '.' opens github.dev, a lightweight browser-based VS Code editor that runs without compute or a terminal.",
      analysis: "github.dev runs entirely client-side inside the web browser for quick edits, file navigation, and commits. In contrast, GitHub Codespaces provisions a cloud Linux virtual machine equipped with full compute resources, container runtime, debugging, and terminal access.",
      examTip: "Exam core distinction: github.dev = No compute, no terminal, lightweight edits. GitHub Codespaces = Cloud VM, full terminal, compute resources, containerized environment."
    }
  },
  {
    id: 17,
    domain: "Domain 4: Modern Development",
    domainBadge: "Codespaces Lifecycle",
    type: "single",
    question: "Which file inside a repository defines the repeatable development container image, pre-installed VS Code extensions, port forwarding rules, and automated initialization commands for a GitHub Codespace?",
    options: [
      { key: "A", text: ".github/workflows/main.yml" },
      { key: "B", text: ".devcontainer/devcontainer.json" },
      { key: "C", text: "Dockerfile.prod" },
      { key: "D", text: "docker-compose.override.yml" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "The '.devcontainer/devcontainer.json' file is the open specification configuration used by GitHub Codespaces.",
      analysis: "devcontainer.json configures the container image, specifies VS Code extensions to install automatically, runs post-create commands, and manages forwarded network ports.",
      examTip: "Configuration location: '.devcontainer/devcontainer.json' or '.devcontainer.json' at the repository root."
    }
  },
  {
    id: 18,
    domain: "Domain 4: Modern Development",
    domainBadge: "GitHub Actions",
    type: "single",
    question: "In a GitHub Actions workflow YAML file, how do jobs execute by default, and how do steps execute inside an individual job?",
    options: [
      { key: "A", text: "Jobs execute sequentially; Steps execute concurrently in parallel" },
      { key: "B", text: "Jobs execute concurrently in parallel by default; Steps execute sequentially in order" },
      { key: "C", text: "Both jobs and steps always run concurrently" },
      { key: "D", text: "Jobs execute only upon manual approval by a repository administrator" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "In GitHub Actions workflows, jobs run in parallel by default, while steps within a single job run sequentially.",
      analysis: "To make jobs run sequentially, use the 'needs:' keyword to define explicit dependencies between jobs. Steps within a job run in order on the same runner environment.",
      examTip: "Workflow definitions are stored under '.github/workflows/*.yml'. The trigger block is declared with 'on:'."
    }
  },
  {
    id: 19,
    domain: "Domain 4: Modern Development",
    domainBadge: "GitHub Copilot",
    type: "single",
    question: "What enterprise governance capability is provided by GitHub Copilot Business and Enterprise plans that is NOT available in GitHub Copilot for Individuals?",
    options: [
      { key: "A", text: "The ability to generate code suggestions inside Visual Studio Code" },
      { key: "B", text: "Organization-wide seat assignment, centralized policy management, and intellectual property (IP) indemnification" },
      { key: "C", text: "Free unlimited access for personal hobbyist development" },
      { key: "D", text: "Automatic deployment of generated code directly to production clusters" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Copilot Business and Enterprise plans provide organization-level license management, policy enforcement, and IP indemnification.",
      analysis: "Organizations can enforce policies (such as blocking suggestions that match public code), centrally assign seats to team members, and ensure private repository code is not used for model training.",
      examTip: "Copilot for Individuals is managed and billed directly by an individual user account with no centralized policy governance."
    }
  },
  {
    id: 20,
    domain: "Domain 5: Project Management",
    domainBadge: "GitHub Projects",
    type: "multiple",
    question: "Which THREE layout views are natively supported by the modern GitHub Projects tool? (Select THREE)",
    options: [
      { key: "A", text: "Table view" },
      { key: "B", text: "Board (Kanban) view" },
      { key: "C", text: "Roadmap (Gantt-style timeline) view" },
      { key: "D", text: "3D Holographic Graph view" }
    ],
    correctAnswer: ["A", "B", "C"],
    explanation: {
      summary: "Modern GitHub Projects supports three primary layout views: Table, Board, and Roadmap.",
      analysis: "Table view offers a spreadsheet-like grid for bulk filtering and editing. Board view organizes work items into Kanban columns. Roadmap view visualizes item duration and dependencies over time.",
      examTip: "GitHub Projects supports custom fields (Text, Number, Date, Single Select, Iteration) that integrate directly with Issues and Pull Requests."
    }
  },
  {
    id: 21,
    domain: "Domain 5: Project Management",
    domainBadge: "Milestones vs Labels",
    type: "single",
    question: "A release manager wants to track a collection of issues and pull requests targeted for an upcoming 'Version 2.0' deployment, displaying a visual progress indicator of closed versus open work items with an optional due date. Which GitHub feature should they use?",
    options: [
      { key: "A", text: "Repository Labels" },
      { key: "B", text: "Milestones" },
      { key: "C", text: "Saved Replies" },
      { key: "D", text: "GitHub Wikis" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Milestones group issues and pull requests toward a specific delivery goal or release date, showing an automated completion percentage bar.",
      analysis: "Labels provide categorical tagging (e.g., 'bug', 'enhancement'), whereas Milestones measure delivery progress against a schedule.",
      examTip: "An issue or pull request can belong to only one Milestone at a time, but can have multiple Labels."
    }
  },
  {
    id: 22,
    domain: "Domain 5: Project Management",
    domainBadge: "Saved Replies",
    type: "single",
    question: "Support engineers frequently respond to recurring questions across issues and pull requests with standardized instructions. Which feature enables them to insert pre-written Markdown responses with a single shortcut or menu selection?",
    options: [
      { key: "A", text: "Saved Replies" },
      { key: "B", text: "Issue Forms" },
      { key: "C", text: "CODEOWNERS" },
      { key: "D", text: "Repository Secrets" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Saved Replies allow users to save and reuse frequent response templates in issue comments and pull request reviews.",
      analysis: "Users can invoke a saved reply using the comment toolbar dropdown or keyboard shortcuts, saving time and maintaining consistent communication across the repository.",
      examTip: "Saved Replies can be configured in your personal account settings for use across any repository you participate in."
    }
  },
  {
    id: 23,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Branch Protection",
    type: "single",
    question: "An organization wants to prevent any developer—including administrators—from directly pushing commits to the 'main' branch, requiring all changes to go through a pull request with at least two approvals and passing CI status checks. How is this enforced?",
    options: [
      { key: "A", text: "By adding an advisory notice in the CONTRIBUTING.md file" },
      { key: "B", text: "By configuring a Branch Protection Rule on the 'main' branch" },
      { key: "C", text: "By converting all user accounts into bot service accounts" },
      { key: "D", text: "By changing the repository visibility to Private" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Branch Protection Rules (or Rulesets) enforce prerequisite conditions before code can be merged into designated branches.",
      analysis: "Rules can mandate pull request reviews, require approvals from CODEOWNERS, require status checks to pass, and enforce restrictions for repository administrators via 'Do not allow bypassing the above settings'.",
      examTip: "Branch Protection settings are managed under Repository Settings ➔ Branches ➔ Branch protection rules."
    }
  },
  {
    id: 24,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Enterprise Managed Users (EMU)",
    type: "single",
    question: "What is a defining characteristic of Enterprise Managed Users (EMU) on GitHub Enterprise Cloud?",
    options: [
      { key: "A", text: "Users can freely create public repositories and star any open-source project on GitHub.com" },
      { key: "B", text: "User identities and account lifecycles are provisioned and strictly governed by the organization's external Identity Provider (IdP) via SCIM/SAML SSO, and users cannot collaborate outside the enterprise" },
      { key: "C", text: "Users do not require passwords or multi-factor authentication" },
      { key: "D", text: "EMU accounts are restricted to individual open-source developers" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Enterprise Managed Users (EMUs) are managed entirely by an external IdP (such as Microsoft Entra ID or Okta) using SCIM provisioning.",
      analysis: "EMU accounts are isolated within the enterprise boundary. EMU users cannot create public repositories, cannot be added as outside collaborators to repositories outside the enterprise, and are deprovisioned automatically when removed from the company IdP.",
      examTip: "EMU usernames typically feature a company-specific suffix (e.g., 'username_companyname')."
    }
  },
  {
    id: 25,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Repository Roles",
    type: "single",
    question: "Which repository permission role allows a user to manage issues, discussions, and pull requests (such as applying labels and assigning owners) WITHOUT granting write or push access to the repository source code?",
    options: [
      { key: "A", text: "Read" },
      { key: "B", text: "Triage" },
      { key: "C", text: "Write" },
      { key: "D", text: "Maintain" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "The Triage role allows team members to manage issues, discussions, and pull requests without write permissions to the code.",
      analysis: "Standard GitHub permission hierarchy: Read (view/clone) ➔ Triage (manage issues/PRs without write access) ➔ Write (push code) ➔ Maintain (manage repository settings without destructive actions) ➔ Admin (full administrative control).",
      examTip: "The Triage role is specifically tested when an organization needs community managers or QA testers to organize bugs without risking code integrity."
    }
  },
  {
    id: 26,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Security Features",
    type: "single",
    question: "A company wants to automatically scan repository commits to detect accidentally pushed API tokens, private cryptographic keys, and database passwords before they can be exploited. Which GitHub security capability addresses this requirement?",
    options: [
      { key: "A", text: "Dependabot alerts" },
      { key: "B", text: "Secret scanning" },
      { key: "C", text: "CodeQL / Code scanning" },
      { key: "D", text: "Security Advisories" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Secret Scanning scans repository commits and history to detect leaked credentials, tokens, and private keys.",
      analysis: "Secret scanning partners with major cloud providers (AWS, Azure, Google Cloud, Stripe) to validate leaked tokens. With 'Push Protection' enabled, GitHub blocks developers from pushing secrets in real-time.",
      examTip: "Compare the three core security tools: 1) Dependabot = Vulnerable third-party dependencies. 2) Secret Scanning = Leaked tokens and credentials. 3) CodeQL / Code scanning = Application code vulnerabilities (e.g., SQLi, XSS)."
    }
  },
  {
    id: 27,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Two-Factor Authentication",
    type: "single",
    question: "When configuring Two-Factor Authentication (2FA) on a GitHub account, what critical fallback credentials does GitHub provide that a user MUST securely store to recover account access if their primary authenticator device is lost?",
    options: [
      { key: "A", text: "A temporary root SSH key" },
      { key: "B", text: "A set of recovery codes" },
      { key: "C", text: "The organization billing ID" },
      { key: "D", text: "The cryptographic SHA hash of the account's first commit" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Recovery codes are the primary self-service mechanism for regaining access to a 2FA-secured GitHub account if the authenticator device is lost.",
      analysis: "GitHub generates a set of single-use recovery codes upon 2FA setup. Without access to an authenticator app, security key, or recovery codes, users risk permanent account lockout.",
      examTip: "Supported 2FA methods: TOTP authenticator apps, FIDO2 / WebAuthn security keys / passkeys, and GitHub Mobile authentication prompts."
    }
  },
  {
    id: 28,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "InnerSource",
    type: "single",
    question: "What is 'InnerSource', and how does it relate to traditional Open Source software development?",
    options: [
      { key: "A", text: "It is the process of releasing all proprietary enterprise intellectual property to the public domain" },
      { key: "B", text: "It is the practice of adopting open-source methodologies, transparent collaboration, and shared code ownership within the internal boundary of an enterprise" },
      { key: "C", text: "It is a proprietary compiler developed exclusively for GitHub Enterprise" },
      { key: "D", text: "It is an automated backup protocol for storing repositories in offline tape archives" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "InnerSource applies open-source collaboration patterns—such as pull requests, code reviews, and transparent documentation—internally inside a company.",
      analysis: "InnerSource breaks down internal organizational silos by allowing engineers across different teams to contribute improvements to internal repositories (commonly set to 'Internal' visibility), keeping the code private to the company.",
      examTip: "Core difference: Open Source is open to the public internet; InnerSource is open to all employees across the enterprise."
    }
  },
  {
    id: 29,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "GitHub Pages",
    type: "single",
    question: "Which of the following correctly describes the supported deployment publishing sources for hosting a static website using GitHub Pages?",
    options: [
      { key: "A", text: "Deploy directly from a designated branch (root or /docs directory) OR deploy using a custom GitHub Actions workflow" },
      { key: "B", text: "Execute server-side PHP, Python Django, and relational SQL databases inside the repository runtime" },
      { key: "C", text: "Deploy only from private gists containing an index.html file" },
      { key: "D", text: "Upload an uncompressed .iso disk image to repository releases" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "GitHub Pages can deploy static websites either from a designated Git branch (root '/' or '/docs') or through a GitHub Actions workflow.",
      analysis: "GitHub Pages is designed strictly for static web assets (HTML, CSS, JavaScript, static site generators like Jekyll). It does not provide server-side scripting runtimes (e.g., PHP, Node.js servers, Django) or databases.",
      examTip: "Custom domains configured for GitHub Pages support automatic HTTPS certificates and utilize a 'CNAME' file in the repository root."
    }
  },
  {
    id: 30,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "GitHub Sponsors & Marketplace",
    type: "single",
    question: "What is the primary objective of the GitHub Sponsors program?",
    options: [
      { key: "A", text: "To supply subsidized computer hardware directly to students" },
      { key: "B", text: "To provide a seamless financial sponsorship platform for individuals and organizations to financially support the open-source developers and projects they rely upon" },
      { key: "C", text: "To require all public repositories to pay mandatory monthly hosting fees" },
      { key: "D", text: "To auction discontinued repository names to enterprise organizations" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "GitHub Sponsors provides a direct platform for developers and corporate entities to financially support open-source maintainers.",
      analysis: "Sponsors supports recurring monthly tiers as well as one-time contributions. Organizations can allocate corporate sponsorship budgets directly through their unified GitHub Enterprise billing invoice.",
      examTip: "GitHub waives payment processing fees (0% fee) for sponsorships directed to individual developers to promote open-source sustainability."
    }
  }
];
