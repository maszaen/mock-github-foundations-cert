Here is a set of practice questions for **Domain 1 (Introduction to Git and GitHub)** and **Domain 2 (Working with GitHub Repositories)** written in English, matching the style and format of the official GitHub Foundations exam.

---

### Domain 1: Introduction to Git and GitHub (22%)

#### Question 1 (Single-Choice: Git Workflow & Lifecycle)

A developer has edited multiple files in their local workspace and wants to stage them before committing them as a permanent snapshot to the Git version history. Which area in the Git lifecycle holds changes that are prepared for the next commit?

* A. Working directory
* B. Staging area (Index)
* C. Remote repository
* D. Stash storage

* **Correct Answer:** **B. Staging area (Index)**
* **Explanation:**
* In Git's local architecture, files reside in one of three states: the **working directory** (where active edits happen), the **staging area / index** (where selected changes are gathered via `git add`), and the **local repository** (where snapshots are permanently recorded via `git commit`).



---

#### Question 2 (Single-Choice: Git Remote Commands)

A developer wants to update their local tracking branches with the latest commits and references from the remote repository on GitHub without automatically merging those changes into their currently checked-out branch. Which Git command should they run?

* A. `git pull origin main`
* B. `git checkout origin/main`
* C. `git fetch origin`
* D. `git merge origin/main`

* **Correct Answer:** **C. `git fetch origin**`
* **Explanation:**
* `git fetch` downloads remote objects and updates remote tracking branches (such as `origin/main`), but does not modify the working tree or merge changes into the local working branch.
* In contrast, `git pull` runs `git fetch` followed immediately by `git merge`.



---

#### Question 3 (Single-Choice: GitHub Account Types)

An enterprise company needs to centrally manage permissions across multiple repositories, organize developers into nested teams that mirror their organizational hierarchy, and consolidate billing under a single shared workspace. Which GitHub entity is designed for this purpose?

* A. Personal account with GitHub Pro
* B. Organization account
* C. Service account
* D. Bot user account

* **Correct Answer:** **B. Organization account**
* **Explanation:**
* **Organization accounts** are shared spaces designed for businesses and open-source groups. They allow administrators to create **Teams**, set granular role-based permissions across repositories, and centralize security and billing.
* Personal accounts belong to individual users and cannot have nested teams.



---

#### Question 4 (Multiple-Response: GitHub Mobile Capabilities)

Which **TWO** actions can a user perform using the official GitHub Mobile application? *(Select TWO)*

* A. Triage incoming notifications and assign issues to team members.
* B. Run terminal commands like `git push` and `git rebase` via a built-in shell.
* C. Review pull requests, view diffs, and leave review comments.
* D. Configure self-hosted GitHub Actions runners.

* **Correct Answer:** **A** and **C**
* **Explanation:**
* GitHub Mobile is designed for on-the-go collaboration: triaging notifications, managing issues, reviewing code diffs, commenting on pull requests, and performing merges.
* It does not contain an embedded Git terminal (Option B) or infrastructure management tools for self-hosted runners (Option D).



---

#### Question 5 (Single-Choice: Git Data Integrity)

How does Git uniquely identify commits, blobs, and trees while verifying the integrity of the commit history?

* A. By assigning auto-incrementing integer IDs (e.g., #101, #102)
* B. By calculating a cryptographic SHA hash based on content and metadata
* C. By combining the author's email address with a Unix timestamp
* D. By generating a random UUID on the remote server

* **Correct Answer:** **B. By calculating a cryptographic SHA hash based on content and metadata**
* **Explanation:**
* Git computes a SHA checksum (hash) for every object. Any change to a file's content or commit metadata alters the hash, ensuring history cannot be altered undetected.



---

### Domain 2: Working with GitHub Repositories (8%)

#### Question 6 (Single-Choice: Repository Visibility)

A company uses GitHub Enterprise Cloud. The platform engineering team wants to publish a shared library repository so that all employees across all organizations in the enterprise account can view and clone it, but it must remain strictly invisible to the public internet. Which visibility setting should they apply?

* A. Public
* B. Private
* C. Internal
* D. Restricted

* **Correct Answer:** **C. Internal**
* **Explanation:**
* **Internal** visibility is an Enterprise-exclusive feature designed for *innersource* collaboration. All members of the enterprise account can access the repository, while outside users cannot view it.
* **Private** restricts access only to explicitly invited collaborators or teams within that specific organization.



---

#### Question 7 (Single-Choice: Template Repositories vs. Forks)

A team wants to standardize the starting structure for microservices by providing a repository that includes boilerplate code, configuration files, and directory layouts. New projects should start with a clean commit history containing only a single initial commit, without retaining links to the original repository. Which feature should they configure?

* A. Repository fork
* B. Template repository
* C. Git submodule
* D. Git archive

* **Correct Answer:** **B. Template repository**
* **Explanation:**
* Marking a repository as a **Template repository** allows other users to generate new repositories with the same file structure, but with a fresh commit history (starting at commit 1) and no connection to the upstream repository.
* A **fork** preserves the entire commit history and maintains an upstream relationship.



---

#### Question 8 (Single-Choice: Large File Management)

A developer attempts to push a commit containing a 250 MB pre-trained machine learning model file to GitHub. The push is rejected because it exceeds GitHub's 100 MB individual file limit. What is the recommended, official solution to store and version this file in the repository?

* A. Split the file into multi-part `.zip` archives
* B. Use Git Large File Storage (Git LFS)
* C. Upload the file using the GitHub web interface upload button
* D. Add the file name directly to `.gitignore`

* **Correct Answer:** **B. Use Git Large File Storage (Git LFS)**
* **Explanation:**
* **Git LFS** replaces large files (such as audio, video, datasets, or graphics) with lightweight text pointers inside the Git repository, while storing the actual file payloads on dedicated remote storage.



---

#### Question 9 (Single-Choice: Repository Insights & Metrics)

A repository maintainer wants to inspect historical data regarding unique visitors, total page views, and referring domains to their repository over the past 14 days. Which view under the **Insights** tab provides this data?

* A. Insights > Pulse
* B. Insights > Traffic
* C. Insights > Network
* D. Insights > Community Standards

* **Correct Answer:** **B. Insights > Traffic**
* **Explanation:**
* **Insights > Traffic** displays graphs of views, unique visitors, top referral domains, and most visited content paths for the past 14 days.
* **Pulse** shows a high-level summary of active pull requests, issues, and commit activity.