// Session 1: Domain 1, Domain 2, Domain 3
// Focus: Git & GitHub Basics, Repositories, and Collaboration Features
window.session1Questions = [
  {
    id: 1,
    domain: "Domain 1: Introduction to Git and GitHub",
    domainBadge: "Git Lifecycle",
    type: "single",
    question: "A developer has modified multiple files in their local working tree and wants to stage them before recording a permanent snapshot to the Git version history. Which area in the Git architecture holds changes prepared for the next commit?",
    options: [
      { key: "A", text: "Working directory" },
      { key: "B", text: "Staging area (Index)" },
      { key: "C", text: "Remote repository" },
      { key: "D", text: "Git stash cache" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "The Staging Area (also known as the Index) holds changes that are gathered and formatted for the upcoming commit.",
      analysis: "Git manages local files across three primary areas: the Working Directory (active edits), the Staging Area / Index (prepared snapshot via 'git add'), and the Local Repository (permanent snapshot via 'git commit').",
      examTip: "Remember the core Git flow: Working Tree ➔ 'git add' (Staging Area) ➔ 'git commit' (Local Repository) ➔ 'git push' (Remote Repository)."
    }
  },
  {
    id: 2,
    domain: "Domain 1: Introduction to Git and GitHub",
    domainBadge: "Git Commands",
    type: "single",
    question: "A developer wants to update their local tracking branches with the latest commits and references from the remote repository on GitHub WITHOUT automatically merging those changes into their currently checked-out branch. Which Git command should they run?",
    options: [
      { key: "A", text: "git pull origin main" },
      { key: "B", text: "git checkout origin/main" },
      { key: "C", text: "git fetch origin" },
      { key: "D", text: "git merge origin/main" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "'git fetch' downloads remote references and commits without altering your working tree or merging changes into the active branch.",
      analysis: "Running 'git fetch origin' updates remote-tracking branches (e.g., origin/main), allowing you to safely inspect differences before merging. In contrast, 'git pull' automatically executes 'git fetch' followed immediately by 'git merge'.",
      examTip: "Whenever an exam scenario emphasizes updating references 'without merging', the answer is always 'git fetch'."
    }
  },
  {
    id: 3,
    domain: "Domain 1: Introduction to Git and GitHub",
    domainBadge: "GitHub Entities",
    type: "single",
    question: "An organization requires centralized permission management across multiple repositories, structured nested teams reflecting their internal organizational hierarchy, and consolidated billing under a shared workspace. Which GitHub entity is designed for this structure?",
    options: [
      { key: "A", text: "Personal account with GitHub Pro" },
      { key: "B", text: "Organization account" },
      { key: "C", text: "Service account" },
      { key: "D", text: "Enterprise Managed User (EMU) profile" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Organization accounts provide shared workspaces designed for businesses and teams, offering nested teams, granular repository permissions, and consolidated billing.",
      analysis: "Personal accounts are owned by an individual user and cannot have nested teams or shared institutional ownership. Enterprise accounts sit above Organizations to coordinate multiple organizations under one corporate umbrella.",
      examTip: "GitHub account hierarchy: Personal Account (individual) ➔ Organization Account (teams & shared repos) ➔ Enterprise Account (manages multiple organizations)."
    }
  },
  {
    id: 4,
    domain: "Domain 1: Introduction to Git and GitHub",
    domainBadge: "GitHub Mobile",
    type: "multiple",
    question: "Which TWO actions can a developer perform using the official GitHub Mobile application? (Select TWO)",
    options: [
      { key: "A", text: "Triage incoming notifications, manage issues, and assign team members" },
      { key: "B", text: "Execute terminal commands like 'git push' and 'git rebase' using an integrated command line shell" },
      { key: "C", text: "Review pull requests, inspect code diffs, and submit review comments" },
      { key: "D", text: "Provision and configure self-hosted GitHub Actions runners" }
    ],
    correctAnswer: ["A", "C"],
    explanation: {
      summary: "GitHub Mobile focuses on communication, triage, code review, and notification management.",
      analysis: "With GitHub Mobile, users can triage notifications, assign labels/issues, inspect diffs, leave pull request comments, and merge PRs. It does not provide a terminal CLI or infrastructure management for self-hosted runners.",
      examTip: "GitHub Mobile does not provide a local Git runtime or shell environment."
    }
  },
  {
    id: 5,
    domain: "Domain 1: Introduction to Git and GitHub",
    domainBadge: "Git Architecture",
    type: "single",
    question: "How does Git uniquely identify each commit, tree, and blob while verifying the cryptographic integrity of the entire commit history?",
    options: [
      { key: "A", text: "By assigning auto-incrementing sequential integers (#101, #102, ...)" },
      { key: "B", text: "By computing a cryptographic SHA checksum based on file content and commit metadata" },
      { key: "C", text: "By hashing only the author's email and host IP address" },
      { key: "D", text: "By generating a centralized UUID from the GitHub server upon push" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Git identifies all repository objects using cryptographic SHA hash checksums (SHA-1 or SHA-256).",
      analysis: "Because the hash is calculated from the exact content plus metadata (including the parent commit hash), altering even a single byte anywhere in history changes the hash downstream, guaranteeing data integrity.",
      examTip: "Git operates as a Content-Addressable Storage system. It does not use incremental sequence IDs like older centralized VCS systems."
    }
  },
  {
    id: 6,
    domain: "Domain 2: Working with GitHub Repositories",
    domainBadge: "Repository Visibility",
    type: "single",
    question: "A company uses GitHub Enterprise Cloud. The platform team wants to publish an internal library repository so that ALL employees across all organizations in that enterprise can view and clone it, but it must remain strictly invisible to the public internet. Which visibility setting should they choose?",
    options: [
      { key: "A", text: "Public" },
      { key: "B", text: "Private" },
      { key: "C", text: "Internal" },
      { key: "D", text: "Restricted" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Internal visibility is exclusive to GitHub Enterprise accounts and permits access to all members belonging to that enterprise.",
      analysis: "Internal repositories facilitate InnerSource collaboration across multiple organizations within an enterprise while preventing any external or public access.",
      examTip: "Key distinction: 'Private' restricts access to explicitly added collaborators or teams in a single organization. 'Internal' is accessible enterprise-wide."
    }
  },
  {
    id: 7,
    domain: "Domain 2: Working with GitHub Repositories",
    domainBadge: "Templates vs Forks",
    type: "single",
    question: "A platform team wants to standardize boilerplates for new microservices. New projects generated from this boilerplate must start with a clean commit history containing only a single initial commit, with NO link or upstream relationship to the source repository. Which feature should they configure?",
    options: [
      { key: "A", text: "Repository Fork" },
      { key: "B", text: "Template Repository" },
      { key: "C", text: "Git Submodule" },
      { key: "D", text: "Git Archive export" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Template Repositories allow users to generate new repositories with matching files and folders, starting with an entirely new, single initial commit.",
      analysis: "Unlike forks, a repository created from a template does not retain commit history, branches, or any upstream association to the parent repository.",
      examTip: "Keywords for Template Repository: 'boilerplate', 'clean commit history', 'no upstream link'. Keywords for Fork: 'contribute back via pull request', 'preserves history'."
    }
  },
  {
    id: 8,
    domain: "Domain 2: Working with GitHub Repositories",
    domainBadge: "Git LFS",
    type: "single",
    question: "A developer attempts to push a commit containing a 250 MB binary machine learning dataset. The push is rejected because it exceeds GitHub's 100 MB individual file limit. What is the recommended, official solution to version and store this file in the repository?",
    options: [
      { key: "A", text: "Split the binary into multiple 50 MB archive files" },
      { key: "B", text: "Use Git Large File Storage (Git LFS)" },
      { key: "C", text: "Upload the file using the GitHub web browser drag-and-drop interface" },
      { key: "D", text: "Base64-encode the binary inside a Markdown file" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Git Large File Storage (Git LFS) replaces large files with small text pointer references inside the Git tree, storing actual binary data on remote dedicated storage.",
      analysis: "GitHub warns for files over 50 MB and strictly blocks pushes exceeding 100 MB. Git LFS solves this limit seamlessly without bloating repository clone times.",
      examTip: "Git LFS tracks specified extensions or file patterns using a '.gitattributes' configuration file."
    }
  },
  {
    id: 9,
    domain: "Domain 2: Working with GitHub Repositories",
    domainBadge: "Repository Insights",
    type: "single",
    question: "A repository maintainer wants to inspect historical data regarding unique visitors, total page views, and referring domains to their repository over the past 14 days. Which view under the Insights tab provides this data?",
    options: [
      { key: "A", text: "Insights > Pulse" },
      { key: "B", text: "Insights > Traffic" },
      { key: "C", text: "Insights > Network" },
      { key: "D", text: "Insights > Community Standards" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Insights > Traffic displays graphs for total views, unique visitors, referring domains, and popular repository content paths for the preceding 14-day window.",
      analysis: "'Pulse' displays an overview of active PRs, issues, and commit summaries. 'Network' visualizes branch topologies across forks.",
      examTip: "Traffic analytics retention on GitHub is specifically 14 days."
    }
  },
  {
    id: 10,
    domain: "Domain 3: Collaboration Features",
    domainBadge: "Pull Requests",
    type: "single",
    question: "When creating a pull request to merge changes from a feature branch 'feature-auth' into the production branch 'main', what are the definitions of the 'base' and 'compare' branches?",
    options: [
      { key: "A", text: "'feature-auth' is the base branch, and 'main' is the compare branch" },
      { key: "B", text: "'main' is the base branch, and 'feature-auth' is the compare branch" },
      { key: "C", text: "Both branches are compare branches until approved" },
      { key: "D", text: "The base branch is automatically deleted when the pull request is merged" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "The 'base' branch is the destination target into which changes will be merged; the 'compare' branch is the source branch containing new commits.",
      analysis: "In GitHub's PR syntax, 'base: main 🠄 compare: feature-auth'. The differences in the compare branch are reviewed and applied to the base branch.",
      examTip: "Rule of thumb for exam questions: Base = Destination/Target (e.g., main), Compare = Origin/Source branch."
    }
  },
  {
    id: 11,
    domain: "Domain 3: Collaboration Features",
    domainBadge: "Issues & Keywords",
    type: "single",
    question: "A developer wants an open issue (#42) to be closed automatically as soon as their pull request is merged into the default branch. Which phrase in the pull request description or commit message triggers this automatic closure?",
    options: [
      { key: "A", text: "Related to #42" },
      { key: "B", text: "Closes #42" },
      { key: "C", text: "See issue #42" },
      { key: "D", text: "Mentioning #42" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Recognized closing keywords include: 'close', 'closes', 'closed', 'fix', 'fixes', 'fixed', 'resolve', 'resolves', and 'resolved'.",
      analysis: "Using 'Closes #42' in the pull request body or commit message automatically closes issue #42 upon merging the PR into the default branch.",
      examTip: "Keywords like 'Related to' or 'Tracking' create a cross-reference link but will NOT automatically close the issue."
    }
  },
  {
    id: 12,
    domain: "Domain 3: Collaboration Features",
    domainBadge: "Issue Forms",
    type: "single",
    question: "A maintainer wants contributors to submit structured bug reports with predefined dropdown selectors, required checkboxes, and validated input fields rather than starting from an unformatted free-text Markdown template. Which feature should they configure?",
    options: [
      { key: "A", text: "Issue Forms (defined with YAML in .github/ISSUE_TEMPLATE)" },
      { key: "B", text: "Saved Replies in personal user settings" },
      { key: "C", text: "Pull Request Template (PULL_REQUEST_TEMPLATE.md)" },
      { key: "D", text: "GitHub Discussions Q&A category" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Issue Forms use YAML schema to render interactive form components with validation, dropdowns, and checkboxes.",
      analysis: "Standard Issue Templates (.md) provide initial Markdown boilerplate, whereas Issue Forms (.yml) offer structured web forms with input validation.",
      examTip: "Issue Forms are authored as YAML files and located within the '.github/ISSUE_TEMPLATE/' directory."
    }
  },
  {
    id: 13,
    domain: "Domain 3: Collaboration Features",
    domainBadge: "Code Review",
    type: "single",
    question: "A repository team wants specific security engineers to be automatically designated as required reviewers whenever files in the '/security/' directory are modified in a pull request. Which configuration file achieves this?",
    options: [
      { key: "A", text: "A CODEOWNERS file located in .github/, the root, or docs/" },
      { key: "B", text: "Milestones configured with due dates" },
      { key: "C", text: "Repository topic labels" },
      { key: "D", text: "GitHub Gists linked to the pull request" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "The CODEOWNERS file automatically requests reviews from defined individuals or teams when matching file paths are changed in a PR.",
      analysis: "Paths and patterns in CODEOWNERS associate directories with usernames or team handles (e.g., '/security/* @security-team').",
      examTip: "Valid CODEOWNERS locations: 1) Repository root, 2) '.github/' directory, or 3) 'docs/' directory."
    }
  },
  {
    id: 14,
    domain: "Domain 3: Collaboration Features",
    domainBadge: "Discussions vs Issues",
    type: "single",
    question: "A project community requires a collaborative space for open-ended brainstorming, general questions, and sharing show-and-tell projects without creating non-actionable items in the issue tracker. Which GitHub feature is intended for this?",
    options: [
      { key: "A", text: "GitHub Issues" },
      { key: "B", text: "GitHub Discussions" },
      { key: "C", text: "GitHub Wikis" },
      { key: "D", text: "Pull Requests" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "GitHub Discussions serves as an open forum for questions, ideas, and open-ended conversations.",
      analysis: "Issues should be reserved for actionable bug reports, tasks, and features. Discussions support categories, Q&A with marked answers, and community engagement.",
      examTip: "Discussions can be converted into Issues if a conversation produces an actionable work item."
    }
  },
  {
    id: 15,
    domain: "Domain 3: Collaboration Features",
    domainBadge: "Draft Pull Requests",
    type: "single",
    question: "What is the primary operational purpose of opening a pull request as a 'Draft Pull Request' on GitHub?",
    options: [
      { key: "A", text: "To encrypt the branch code so that collaborators cannot view it" },
      { key: "B", text: "To indicate that work is in progress, preventing accidental merges while still triggering CI status checks and allowing early feedback" },
      { key: "C", text: "To bypass branch protection rules and merge without review approval" },
      { key: "D", text: "To schedule the branch for automated deletion after 24 hours" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Draft Pull Requests signal work-in-progress, disabling merge actions while allowing continuous integration checks to run.",
      analysis: "Draft PRs allow authors to receive peer feedback and check build status before requesting formal reviews. When ready, clicking 'Ready for review' invites assigned code owners.",
      examTip: "Draft PRs do not notify CODEOWNERS for review until explicitly marked as 'Ready for review'."
    }
  }
];
