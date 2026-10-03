// Session 5: Full Mock Final Exam (Domains 1 - 7 Realistic Certification Scenarios)
// Focus: Merge Conflicts, PR Reviews & Suggested Changes, Auto-Merge, Actions Secrets & Concurrency, Deploy Keys, Archiving
window.session5Questions = [
  {
    id: 61,
    domain: "Domain 1: Introduction to Git and GitHub",
    domainBadge: "Merge Conflicts",
    type: "single",
    question: "During a merge operation, Git halts and displays conflict markers. What does the section between '<<<<<<< HEAD' and '=======' represent?",
    options: [
      { key: "A", text: "The changes made on the remote upstream server" },
      { key: "B", text: "The changes present on the active, currently checked-out branch (HEAD) before the merge" },
      { key: "C", text: "The code that Git recommends you delete" },
      { key: "D", text: "The version of the code that passed compilation" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "In a Git merge conflict, the lines between '<<<<<<< HEAD' and '=======' contain the changes from your currently checked-out branch.",
      analysis: "The section between '=======' and '>>>>>>> <branch_name>' contains the conflicting changes from the incoming branch you are merging.",
      examTip: "Conflict marker syntax: HEAD (current checked-out branch) ➔ ======= (separator) ➔ Incoming branch changes ➔ >>>>>>>."
    }
  },
  {
    id: 62,
    domain: "Domain 1: Introduction to Git and GitHub",
    domainBadge: "Git Rebase",
    type: "single",
    question: "A developer working on 'feature-branch' runs 'git rebase main'. What does this command conceptually do to the commits on 'feature-branch'?",
    options: [
      { key: "A", text: "It creates a merge commit joining the two branches together" },
      { key: "B", text: "It rewrites the base of 'feature-branch', temporarily unwinding its commits and re-applying them sequentially onto the tip of 'main'" },
      { key: "C", text: "It deletes all commits on 'main' and replaces them with 'feature-branch'" },
      { key: "D", text: "It archives the repository to a compressed zip file" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "'git rebase' replays commits from the current branch on top of another base tip, maintaining a clean, linear commit history.",
      analysis: "Rebasing creates new commit hashes because commit parents change. It produces a straight line of history without extraneous merge commits.",
      examTip: "Rebase = Linear commit history by replaying commits onto new base. Merge = Preserves exact branching history with a merge commit."
    }
  },
  {
    id: 63,
    domain: "Domain 3: Collaboration Features",
    domainBadge: "Code Review Status",
    type: "single",
    question: "When reviewing a pull request on GitHub, a reviewer selects 'Request changes' from the review dropdown. What effect does this have on the pull request?",
    options: [
      { key: "A", text: "The pull request is permanently closed and the source branch is deleted" },
      { key: "B", text: "It submits feedback that blocks merging the pull request until the required reviewer approves or an administrator dismisses the review" },
      { key: "C", text: "It automatically reverts the author's local working directory" },
      { key: "D", text: "It converts the repository into a template repository" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "'Request changes' blocks the pull request from being merged until the objections are addressed and the review is approved.",
      analysis: "Pull request review states: 1) Comment (general feedback without approval), 2) Approve (permits merge), 3) Request changes (blocks merge until satisfied).",
      examTip: "Under branch protection rules requiring approvals, a 'Request changes' review acts as an explicit block on merging."
    }
  },
  {
    id: 64,
    domain: "Domain 3: Collaboration Features",
    domainBadge: "Suggested Changes",
    type: "single",
    question: "A code reviewer notices a typo on line 42 of a pull request diff. What GitHub feature allows the reviewer to propose the exact replacement code inline, enabling the author to apply the commit directly from the web browser?",
    options: [
      { key: "A", text: "Saved Replies" },
      { key: "B", text: "Suggested Changes (using Markdown suggestion blocks)" },
      { key: "C", text: "Milestones" },
      { key: "D", text: "Repository Topics" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Suggested Changes allow reviewers to suggest specific code diffs inline in comments, which authors can commit with one click via 'Commit suggestion'.",
      analysis: "Authors can apply individual suggestions or batch multiple suggestions into a single consolidated commit directly on github.com.",
      examTip: "Reviewers generate suggestions using the 'Insert a suggestion' button or '```suggestion' Markdown code block in pull request diffs."
    }
  },
  {
    id: 65,
    domain: "Domain 3: Collaboration Features",
    domainBadge: "Auto-Merge",
    type: "single",
    question: "A developer finishes their pull request and wants it to merge automatically as soon as all required continuous integration checks pass and required approvals are submitted, without having to return later to click Merge manually. Which feature should they enable on the pull request?",
    options: [
      { key: "A", text: "Draft mode" },
      { key: "B", text: "Auto-merge (Enable auto-merge)" },
      { key: "C", text: "Force push" },
      { key: "D", text: "Git stash" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Auto-merge queues a pull request to merge automatically once all required branch protection criteria and reviews are fulfilled.",
      analysis: "Auto-merge must first be enabled in repository settings by an administrator. Once enabled, authors or reviewers can click 'Enable auto-merge' on individual PRs.",
      examTip: "Prerequisite for auto-merge: Branch protection rules must be configured, and auto-merge must be allowed in Repository Settings."
    }
  },
  {
    id: 66,
    domain: "Domain 4: Modern Development",
    domainBadge: "Actions Secrets",
    type: "single",
    question: "Where should sensitive database deployment passwords and cloud authentication tokens be stored so that GitHub Actions workflows can use them securely without exposing credentials in plaintext code?",
    options: [
      { key: "A", text: "Directly in the .github/workflows/main.yml file under 'env:'" },
      { key: "B", text: "In GitHub Actions Secrets (accessible via ${{ secrets.SECRET_NAME }})" },
      { key: "C", text: "In the README.md file" },
      { key: "D", text: "In a public gist referenced via cURL" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "GitHub Actions Encrypted Secrets encrypt credentials at rest and redact them automatically from workflow execution logs.",
      analysis: "Secrets can be scoped at the Repository, Environment, or Organization level. Workflows access them using context expressions like '${{ secrets.DEPLOY_KEY }}'.",
      examTip: "Secrets are write-only in the UI: once saved, their values can never be viewed again in plaintext on GitHub."
    }
  },
  {
    id: 67,
    domain: "Domain 4: Modern Development",
    domainBadge: "Actions Concurrency",
    type: "single",
    question: "When multiple commits are pushed in rapid succession to the same pull request, how can a workflow be configured to cancel older in-progress builds and run tests only for the latest commit?",
    options: [
      { key: "A", text: "By using the 'concurrency' key with 'cancel-in-progress: true'" },
      { key: "B", text: "By deleting the repository runner cache" },
      { key: "C", text: "By setting repository visibility to Internal" },
      { key: "D", text: "By converting the workflow into an Issue Form" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "The 'concurrency' group key with 'cancel-in-progress: true' ensures only a single workflow run in the group executes at once, cancelling obsolete runs.",
      analysis: "This saves runner minutes and prevents outdated continuous integration runs from competing for resources when a developer pushes quick successive updates.",
      examTip: "YAML configuration: 'concurrency: group: ${{ github.ref }}, cancel-in-progress: true'."
    }
  },
  {
    id: 68,
    domain: "Domain 4: Modern Development",
    domainBadge: "GitHub Copilot",
    type: "single",
    question: "How does GitHub Copilot Chat assist developers directly within their IDE development workflow?",
    options: [
      { key: "A", text: "By automatically submitting financial tax returns" },
      { key: "B", text: "By providing a natural language conversational interface to explain complex code, generate unit tests, suggest refactoring, and debug syntax errors" },
      { key: "C", text: "By shutting down developer computers after 8 hours of coding" },
      { key: "D", text: "By replacing Git version control entirely" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "GitHub Copilot Chat allows developers to converse in natural language to explain algorithms, write unit tests, propose fixes, and analyze errors.",
      analysis: "Copilot Chat understands IDE workspace context, open files, and terminal diagnostics to provide relevant code explanations and inline modifications.",
      examTip: "Copilot serves as an AI pair programmer; it augments human development, leaving final code review to the developer."
    }
  },
  {
    id: 69,
    domain: "Domain 5: Project Management",
    domainBadge: "Projects Iterations",
    type: "single",
    question: "An agile development team organizes sprint work into two-week fixed timeframes. Which field type in modern GitHub Projects supports scheduling and tracking work across recurring sprints?",
    options: [
      { key: "A", text: "Iteration field" },
      { key: "B", text: "Secret field" },
      { key: "C", text: "Gist pointer" },
      { key: "D", text: "Branch protection rule" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "The Iteration field type allows teams to schedule work in repeating cycles or sprints (e.g., 2-week iterations) with start dates and durations.",
      analysis: "Projects can group, filter, and calculate velocity using Iteration fields, providing native sprint management inside GitHub.",
      examTip: "Sprint planning and agile cycles in GitHub Projects = Iteration field."
    }
  },
  {
    id: 70,
    domain: "Domain 5: Project Management",
    domainBadge: "Sub-Issues & Tasks",
    type: "single",
    question: "How can a developer create a checklist of sub-tasks within an issue description that renders interactive checkboxes and displays a completion progress counter (e.g., '3 of 5') in issue lists?",
    options: [
      { key: "A", text: "Using Task List syntax: '- [ ]' for open items and '- [x]' for completed items" },
      { key: "B", text: "Using HTML <blink> tags" },
      { key: "C", text: "Uploading multiple PDF documents" },
      { key: "D", text: "Writing commit hashes in all capital letters" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Task lists are formatted in Markdown as '- [ ]' (unchecked) and '- [x]' (checked).",
      analysis: "GitHub renders task lists with clickable checkboxes. In issue lists and projects, task lists display a progress summary (e.g., '2 of 4 tasks').",
      examTip: "Task lists syntax in Markdown: '- [ ] Item' (space between brackets) for unchecked, '- [x] Item' for checked."
    }
  },
  {
    id: 71,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Deploy Keys",
    type: "single",
    question: "An automated continuous deployment server needs read-only access to clone code from ONE single private repository. Security policy forbids linking this machine to any personal developer account. What is the recommended credential to use?",
    options: [
      { key: "A", text: "The organization owner's personal password" },
      { key: "B", text: "A Deploy Key configured directly on that repository" },
      { key: "C", text: "A public gist containing SSH credentials" },
      { key: "D", text: "An unencrypted email link" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "A Deploy Key is an SSH key that grants access to a single specific repository, independent of any user account.",
      analysis: "Deploy keys default to read-only access (with an option for write access). Because they are tied directly to the repository rather than a personal user profile, they remain valid even if employees leave the organization.",
      examTip: "Single repository automated server access without user account linkage = Deploy Key."
    }
  },
  {
    id: 72,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Archiving Repositories",
    type: "single",
    question: "A company discontinues an internal software project. The code must remain visible and cloneable for reference, but no one should be able to create new issues, open pull requests, add comments, or push new commits. What action should administrators take?",
    options: [
      { key: "A", text: "Delete the repository permanently" },
      { key: "B", text: "Archive the repository (Archive this repository)" },
      { key: "C", text: "Convert the repository to Public" },
      { key: "D", text: "Disable Two-Factor Authentication" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Archiving a repository places it in a permanent read-only state for all users, including administrators.",
      analysis: "An archived repository retains existing code, stars, forks, issues, and PRs for historical reference, but blocks all write actions (no new commits, issues, PRs, or comments).",
      examTip: "Read-only historical freeze = 'Archive repository'. (An archived repository can be unarchived later if needed)."
    }
  },
  {
    id: 73,
    domain: "Domain 6: Privacy, Security, and Administration",
    domainBadge: "Default Branch Renaming",
    type: "single",
    question: "When an administrator renames the default branch of a repository on GitHub (for example, from 'master' to 'main'), how does GitHub assist collaborators with the transition?",
    options: [
      { key: "A", text: "GitHub automatically deletes all branches on collaborators' local machines" },
      { key: "B", text: "GitHub automatically updates branch protection rules, redirects web requests, and provides terminal instructions for local tracking branches" },
      { key: "C", text: "GitHub immediately sends billing invoices to all contributors" },
      { key: "D", text: "GitHub requires all contributors to recreate their accounts" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "GitHub seamlessly updates internal references (branch protection, draft PRs, web redirects) when a default branch is renamed.",
      analysis: "Users navigating to the old branch URL on the web are redirected, and GitHub provides copy-paste commands to help developers update their local Git tracking branches.",
      examTip: "Default branch rename on GitHub preserves pull requests, issues, and protection rules automatically."
    }
  },
  {
    id: 74,
    domain: "Domain 7: Benefits of GitHub Community",
    domainBadge: "InnerSource Culture",
    type: "single",
    question: "Which of the following practices is a core pillar of a successful InnerSource initiative within an enterprise company?",
    options: [
      { key: "A", text: "Isolating code into private silos where other teams cannot read or inspect it" },
      { key: "B", text: "Documenting projects with clear README and CONTRIBUTING guidelines, encouraging cross-team pull requests across the enterprise" },
      { key: "C", text: "Prohibiting code reviews to speed up deployments" },
      { key: "D", text: "Publishing all confidential customer databases to the public internet" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "InnerSource relies on transparent documentation, standardized contribution guides, and cross-team pull request reviews inside enterprise boundaries.",
      analysis: "By encouraging engineers in one department to contribute fixes to components owned by other departments, InnerSource eliminates duplicate efforts and fosters enterprise-wide collaboration.",
      examTip: "InnerSource = Open-source practices (transparency, documentation, pull requests) applied internally within an enterprise."
    }
  },
  {
    id: 75,
    domain: "Domain 2: Working with GitHub Repositories",
    domainBadge: "Repository Licenses",
    type: "single",
    question: "A developer publishes a repository with public visibility on GitHub, but DOES NOT add a LICENSE file. Under international copyright law, what permissions do other developers have to modify, distribute, or use that code commercially?",
    options: [
      { key: "A", text: "Because the code is on GitHub, it automatically becomes public domain and anyone can use it without restriction" },
      { key: "B", text: "No one else has permission to copy, modify, or distribute the software; all exclusive copyright rights are reserved by the author" },
      { key: "C", text: "Other developers are granted an automatic MIT license" },
      { key: "D", text: "The code can only be used by non-profit charities" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Without an open-source license, default copyright laws apply: all rights reserved by the author, and others cannot legally modify, reuse, or redistribute the code.",
      analysis: "Public visibility allows others to view and fork the code on GitHub (per GitHub's Terms of Service), but does not grant rights to distribute or incorporate the code into other projects without a formal license.",
      examTip: "Crucial exam concept: Public repository with NO license = All rights reserved (no legal reuse rights granted to third parties)."
    }
  }
];
