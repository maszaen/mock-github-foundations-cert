// Session 3: Advanced Scenarios & Mock Exam Review
// Focus: Merge Strategies, Actions Matrix & Artifacts, Governance, Packages, CLI, and Security
window.session3Questions = [
  {
    id: 31,
    domain: "Domain 1: Introduction to Git and GitHub",
    domainBadge: "Merge Strategies",
    type: "single",
    question: "A development team wants all feature branch commits to be condensed into a single commit when merging into the 'main' branch, keeping the main branch history strictly linear and uncluttered. Which GitHub pull request merge option should they configure?",
    options: [
      { key: "A", text: "Create a merge commit" },
      { key: "B", text: "Squash and merge" },
      { key: "C", text: "Rebase and merge" },
      { key: "D", text: "Fast-forward only merge" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "'Squash and merge' combines all commits from the compare branch into a single unified commit on the base branch.",
      analysis: "Squash and merge creates a clean, linear history on the base branch. In contrast, 'Create a merge commit' preserves all individual commits with a merge commit node, while 'Rebase and merge' replays each individual commit sequentially without combining them.",
      examTip: "Exam rule: Combine all branch commits into ONE commit on main = 'Squash and merge'."
    }
  },
  {
    id: 32,
    domain: "Domain 1: Introduction to Git and GitHub",
    domainBadge: "Git History",
    type: "single",
    question: "A developer pushed an unintended commit to a public remote branch. They want to safely undo the effects of this commit in a public shared history without rewriting past Git commit history. Which command should they execute?",
    options: [
      { key: "A", text: "git reset --hard HEAD~1" },
      { key: "B", text: "git revert <commit-hash>" },
      { key: "C", text: "git checkout -b fix-error" },
      { key: "D", text: "git rebase -i HEAD~2" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "'git revert' creates a new commit that records the exact inverse of the specified commit, preserving existing history.",
      analysis: "'git reset --hard' alters existing history, which causes conflicts for collaborators on shared remote branches. 'git revert' is the safe, recommended approach for shared branches because it appends a new inverse commit.",
      examTip: "Safe undo for shared/public branches = 'git revert'. Local private cleanup = 'git reset'."
    }
  },
  {
    id: 33,
    domain: "Domain 3: Collaboration Features",
    domainBadge: "Branch Protection",
    type: "single",
    question: "A pull request has been approved by required reviewers. Subsequently, the pull request author pushes an additional commit with new changes. Which branch protection setting ensures the pull request CANNOT be merged until approved again?",
    options: [
      { key: "A", text: "Require status checks to pass before merging" },
      { key: "B", text: "Dismiss stale pull request approvals when new commits are pushed" },
      { key: "C", text: "Require signed commits" },
      { key: "D", text: "Require linear history" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "The 'Dismiss stale pull request approvals when new commits are pushed' setting invalidates previous approvals whenever new code is added to the pull request.",
      analysis: "This prevents unreviewed modifications from slipping into production after initial approval has been granted.",
      examTip: "Look for keywords: 'new commits pushed' + 're-approval required' ➔ Dismiss stale pull request approvals."
    }
  },
  {
    id: 34,
    domain: "Domain 4: Modern Development",
    domainBadge: "GitHub Actions",
    type: "single",
    question: "A workflow needs to execute test suites across three operating systems (Ubuntu, Windows, macOS) and two Node.js versions (v18, v20). Which GitHub Actions configuration feature enables running these 6 job combinations concurrently?",
    options: [
      { key: "A", text: "A reusable composite action" },
      { key: "B", text: "A build matrix strategy defined in the job's 'strategy.matrix' configuration" },
      { key: "C", text: "A repository webhook dispatched via REST API" },
      { key: "D", text: "A multi-stage Dockerfile definition" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "A matrix strategy ('strategy: matrix:') allows a single job definition to spawn multiple job runs across variable combinations.",
      analysis: "GitHub Actions automatically computes the Cartesian product of the declared matrix keys (3 OS x 2 Node versions = 6 parallel jobs).",
      examTip: "The matrix strategy is configured under 'jobs.<job_id>.strategy.matrix'."
    }
  },
  {
    id: 35,
    domain: "Domain 4: Modern Development",
    domainBadge: "Workflow Artifacts",
    type: "single",
    question: "A build job in a GitHub Actions workflow produces compiled test coverage reports and binary packages. Which official action is used to persist these files so they can be downloaded after the workflow completes or used by subsequent jobs?",
    options: [
      { key: "A", text: "actions/checkout" },
      { key: "B", text: "actions/upload-artifact" },
      { key: "C", text: "actions/cache" },
      { key: "D", text: "actions/setup-node" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "'actions/upload-artifact' uploads and stores build output files as downloadable workflow artifacts.",
      analysis: "'actions/cache' is meant for temporary package dependencies to speed up future runs. 'actions/upload-artifact' is specifically designed to store deliverables (logs, test reports, compiled binaries) associated with a workflow run.",
      examTip: "Upload = 'actions/upload-artifact'; Download in subsequent job = 'actions/download-artifact'."
    }
  },
  {
    id: 36,
    domain: "Domain 4: Modern Development",
    domainBadge: "GitHub Codespaces",
    type: "single",
    question: "When running a web service inside a GitHub Codespace on port 3000, what are the available port visibility options to share access with others?",
    options: [
      { key: "A", text: "Private, Organization, and Public" },
      { key: "B", text: "Only Private" },
      { key: "C", text: "Root, Admin, and Guest" },
      { key: "D", text: "Encrypted and Unencrypted" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Forwarded ports in Codespaces can be configured with Private (only you), Organization (members of your org), or Public visibility.",
      analysis: "By default, forwarded ports are Private. Changing visibility to Public generates an accessible HTTPS preview URL that anyone can visit.",
      examTip: "Port visibility settings are configured in the 'Ports' panel within VS Code inside the Codespace."
    }
  },
  {
    id: 37,
    domain: "Domain 5: Project Management",
    domainBadge: "GitHub CLI",
    type: "single",
    question: "Which official command line tool allows developers to manage issues, review pull requests, create repositories, and trigger GitHub Actions workflows directly from their local terminal?",
    options: [
      { key: "A", text: "Git CLI (git)" },
      { key: "B", text: "GitHub CLI (gh)" },
      { key: "C", text: "cURL" },
      { key: "D", text: "npm" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "GitHub CLI ('gh') is the official command line interface for GitHub features from your terminal.",
      analysis: "While 'git' handles local version control (commit, branch, merge), 'gh' handles GitHub cloud features like 'gh pr create', 'gh issue list', and 'gh workflow run'.",
      examTip: "'git' is the VCS tool; 'gh' is the GitHub platform tool."
    }
  },
  {
    id: 38,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Security Roles",
    type: "single",
    question: "An organization wants to grant their corporate cybersecurity team full access to view and manage security alerts (such as Secret Scanning, Dependabot, and CodeQL alerts) across ALL repositories in the organization, WITHOUT granting them Owner permissions. Which organization-level role is designed for this?",
    options: [
      { key: "A", text: "Billing Manager" },
      { key: "B", text: "Security Manager" },
      { key: "C", text: "Moderator" },
      { key: "D", text: "Triage Team Lead" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "The Security Manager role grants members permission to view and manage security alerts and settings across all organization repositories without giving full Owner permissions.",
      analysis: "Security Managers receive read permissions to all repositories and write permissions to security-related features, eliminating the need to assign individual security engineers as repository administrators.",
      examTip: "Organization security oversight across all repos without Owner privileges = 'Security Manager'."
    }
  },
  {
    id: 39,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Dependabot",
    type: "single",
    question: "What is the key difference between 'Dependabot security updates' and 'Dependabot version updates'?",
    options: [
      { key: "A", text: "Security updates open pull requests to resolve known vulnerabilities; Version updates keep dependencies up to date even when no vulnerability exists" },
      { key: "B", text: "Security updates cost money, while version updates are always free" },
      { key: "C", text: "Security updates only work for Docker containers" },
      { key: "D", text: "Version updates are triggered by git push, while security updates run on a manual schedule" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Dependabot security updates trigger automated pull requests to fix known CVE vulnerabilities; Dependabot version updates proactively bump dependencies to their newest releases on a schedule configured via 'dependabot.yml'.",
      analysis: "Security updates react to GitHub Advisory Database alerts, while version updates keep projects modernized on an ongoing basis.",
      examTip: "Configuration file for Version updates: '.github/dependabot.yml'."
    }
  },
  {
    id: 40,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "CodeQL Analysis",
    type: "single",
    question: "What type of vulnerabilities does CodeQL code scanning primarily identify within a codebase?",
    options: [
      { key: "A", text: "Outdated software licenses in open-source packages" },
      { key: "B", text: "Security defects and logic flaws in custom source code (such as SQL injection, cross-site scripting, and buffer overflows)" },
      { key: "C", text: "Unpaid monthly subscription invoices" },
      { key: "D", text: "Server hardware overheating warnings" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "CodeQL treats source code as data to detect semantic bugs, logic flaws, and vulnerabilities such as SQL injection, path traversal, and XSS.",
      analysis: "CodeQL is GitHub's semantic code analysis engine. It queries the syntax and data flow graph of your application code during CI.",
      examTip: "CodeQL = Source code vulnerabilities (SAST). Dependabot = Third-party software dependencies. Secret Scanning = Leaked tokens/keys."
    }
  },
  {
    id: 41,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "Gists",
    type: "single",
    question: "A developer creates a 'Secret Gist' on GitHub. Which statement accurately describes its visibility and accessibility?",
    options: [
      { key: "A", text: "It is encrypted and can only be opened with a biometric security key" },
      { key: "B", text: "It is not searchable or listed in public Discover feeds, but anyone with the direct URL can view it" },
      { key: "C", text: "It is automatically deleted after 60 minutes" },
      { key: "D", text: "It is visible only to GitHub staff members" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Secret Gists are unlisted (hidden from search engines and discovery feeds), but they are not password-protected; anyone who possesses the direct URL can access them.",
      analysis: "Never store passwords, secrets, or sensitive private data in a secret gist, as the URL alone grants access.",
      examTip: "Exam trap: Secret Gists are UNLISTED, not encrypted or private with access control lists."
    }
  },
  {
    id: 42,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "GitHub Packages",
    type: "single",
    question: "What is the primary function of GitHub Packages (including the GitHub Container Registry, ghcr.io)?",
    options: [
      { key: "A", text: "Hosting and publishing software packages, containers, and application dependencies alongside source code" },
      { key: "B", text: "Selling physical GitHub merchandise like stickers and hoodies" },
      { key: "C", text: "Monitoring CPU temperatures in on-premises server racks" },
      { key: "D", text: "Providing real-time video conferencing for pull request reviews" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "GitHub Packages is a package hosting service supporting Docker container images (ghcr.io), npm, RubyGems, Maven, NuGet, and Gradle.",
      analysis: "It integrates seamlessly with GitHub APIs and GitHub Actions, enabling CI workflows to publish and consume packages within the same authentication boundary.",
      examTip: "GitHub Packages connects repository code directly to published binary packages and container images."
    }
  },
  {
    id: 43,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Organization Permissions",
    type: "single",
    question: "In a GitHub Organization, what does the 'Base permissions' setting control?",
    options: [
      { key: "A", text: "The minimum default access level that all organization members have for all repositories in the organization" },
      { key: "B", text: "The maximum file size allowed in commits" },
      { key: "C", text: "The amount of monthly budget allocated to GitHub Actions" },
      { key: "D", text: "The password strength required for outside contractors" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Organization base permissions define the baseline permission level granted to all organization members for repositories owned by that organization.",
      analysis: "Options for base permission include: 'No permission' (access must be granted per-repo/team), 'Read', 'Write', or 'Admin'.",
      examTip: "Security best practice for enterprise organizations is setting Base Permission to 'No permission' to enforce least privilege access."
    }
  },
  {
    id: 44,
    domain: "Domain 2: Working with GitHub Repositories",
    domainBadge: "Repository Transfer",
    type: "single",
    question: "When a repository is transferred from an individual user account to an organization account, what happens to existing URLs, Git clone links, and web traffic pointing to the old location?",
    options: [
      { key: "A", text: "All existing links and git remotes are immediately broken and return a 404 error" },
      { key: "B", text: "GitHub automatically redirects web traffic and Git clone/push requests from the old repository URL to the new location" },
      { key: "C", text: "The repository commit history is deleted and re-initialized" },
      { key: "D", text: "The repository visibility is permanently forced to Public" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "GitHub automatically sets up redirects for web URLs and Git operations from the previous location to the new repository location.",
      analysis: "Existing clones and remotes continue to work seamlessly, although updating your local remote tracking URL with 'git remote set-url' is recommended.",
      examTip: "Redirects remain active unless a new repository is created under the original user with the same name."
    }
  },
  {
    id: 45,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "InnerSource & Community",
    type: "single",
    question: "Which of the following is considered an essential foundational document for encouraging external open-source contributors and maintaining community standards in a repository?",
    options: [
      { key: "A", text: "CONTRIBUTING.md and CODE_OF_CONDUCT.md" },
      { key: "B", text: "A hardcoded Makefile with compiler flags" },
      { key: "C", text: "A private SSH key file" },
      { key: "D", text: "The .git/index internal binary file" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "'CONTRIBUTING.md' guides developers on how to submit code, while 'CODE_OF_CONDUCT.md' defines standards for acceptable behavior in the community.",
      analysis: "Both files are evaluated as part of GitHub's Community Profile checklist (under Insights > Community Standards).",
      examTip: "Key repository health files: README.md, LICENSE, CONTRIBUTING.md, and CODE_OF_CONDUCT.md."
    }
  }
];
