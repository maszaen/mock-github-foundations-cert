# GitHub Foundations Certification Assessment (GH-900)

An interactive, modern, compact mock assessment web application engineered for candidates preparing for the **GitHub Foundations Certification Exam (GH-900)**.

Designed with a sleek 3D folder carousel aesthetic, scaled scoring, and domain-by-domain performance analytics based on the official GitHub exam blueprint.

---

## 🚀 Key Features

- **Full 75-Question Assessment**: Divided into 5 focused sessions (15 questions each) matching the exact scope and length of the real certification exam.
- **Weighted Scaled Scoring (1000 Pts)**: Accurately computes scaled scores based on official domain weightings, aligning with the real **700 / 1000 passing threshold**.
- **Per-Question Exam Weighting**: Every question displays its estimated contribution to the overall exam score (e.g., Domain 3 questions carry ~3.0% each, whereas Domain 6 questions carry ~0.5% each).
- **Domain Performance Analytics**: Evaluates candidate readiness across all 7 exam domains with proficiency ratings (**Strong**, **Borderline**, **Needs Study**) and actionable cramming recommendations.
- **LocalStorage Persistence**:
  - Automatically saves all selected answers, submitted states, scores, and active timers.
  - Supports **Per-Session Reset** (clear a single session without losing progress in others) and **Global Reset**.
- **Real-Time Interactive Search**:
  - Filter questions instantly across question prompts, domain badges, options, and explanations.
  - Search dynamically without page refreshes.
- **Reusable Modal & Dialog System (`modal.js`)**: Clean, accessible, animated custom dialogs replacing default browser alerts and confirms.
- **Countdown Simulation Timer**: 45-minute practice session countdown with pause/resume support.
- **Deep Explanations**: Comprehensive rationales, technical summaries, and official exam objective tips for every single question.

---

## 📊 Official Objective Domains Covered

| Domain | Topic | Weight | Questions |
|---|---|---|---|
| **D1** | Introduction to Git and GitHub | **22%** | 9 |
| **D2** | Working with GitHub Repositories | **8%** | 6 |
| **D3** | Collaboration Features (PRs, Issues, Code Reviews) | **30%** | 10 |
| **D4** | Modern Development (Actions, Codespaces, Copilot) | **13%** | 10 |
| **D5** | Project Management (Projects, Milestones, Views) | **7%** | 6 |
| **D6** | Privacy, Security, and Administration (EMU, 2FA, CodeQL) | **10%** | 20 |
| **D7** | Benefits of GitHub Community (InnerSource, Discussions, Pages) | **10%** | 14 |
| **Total** | **Official GH-900 Blueprint** | **100%** | **75** |

---

## 🛠 Project Structure

```
.
├── index.html           # Main semantic web application layout
├── style.css            # Custom CSS design system, folder sleeves, animations
├── modal.js             # Reusable modal and confirmation dialog engine
├── app.js               # Application state, timer, search, scoring, and analytics
├── session1.js          # Questions 1–15: Git & Repositories Basics
├── session2.js          # Questions 16–30: Collaboration & Pull Requests
├── session3.js          # Questions 31–45: Modern Development & CI/CD
├── session4.js          # Questions 46–60: Security, Administration & Enterprise
├── session5.js          # Questions 61–75: Mock Final Exam (Comprehensive Mix)
├── domain.md            # Reference notes and study guide outline
└── README.md            # Documentation
```

---

## 🏁 How to Run

No build step or Node.js runtime required! Simply open `index.html` in any modern web browser or serve it via a local static server:

```bash
# Using Python
python -m http.server 8080

# Using Node / npx
npx serve .
```

Open `http://localhost:8080` and start practicing!
