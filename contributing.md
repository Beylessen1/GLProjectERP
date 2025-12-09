## ✅ PART 1 — One-Time Setup (Everyone Must Do This Once)

### 1️⃣ Clone the main repository  
Each member runs this once:

git clone https://github.com/USERNAME/REPO.git  
cd REPO  

### 2️⃣ Set main branch protection (Only the Scrum Master / Owner)  
On GitHub:

Go to Settings → Branches  
Protect main:  
✅ Require pull request before merging  
✅ Block force pushes  
✅ Require reviews  

This prevents accidental destruction.

---

## ✅ PART 2 — Each Member Creates Their Own Branch (REQUIRED)

Each person works only in their own branch.

### 1️⃣ Make sure you are on main

git checkout main  
git pull origin main  

### 2️⃣ Create your personal branch  
Use this format:

git checkout -b username-feature  

Examples:

git checkout -b sara-auth  
git checkout -b ali-backend  
git checkout -b amine-ui  

### 3️⃣ Push your branch to GitHub

git push -u origin username-feature  

✅ Now your branch exists online  
✅ Everyone only works inside their own branch

---

## ✅ PART 3 — Daily Work Flow (What EVERY Member Does Every Day)

### 1️⃣ Always update your branch before working

git checkout username-feature  
git pull origin main  

✅ This prevents conflicts  
✅ This keeps your code up-to-date

### 2️⃣ Make your changes normally  
Edit files, write code, test locally.

### 3️⃣ Save your work with commits

git status  
git add .  
git commit -m "Clear message describing what you did"  
git push  

✅ Do this frequently  
✅ Do NOT wait days before pushing

---

## ❌ PART 4 — Things They Must NEVER DO

These rules protect the project from breaking:

🚫 NEVER push directly to main  
git push origin main   ❌ FORBIDDEN  

🚫 NEVER work in someone else’s branch  
🚫 NEVER delete branches without permission  

🚫 NEVER force push  
git push --force   ❌ FORBIDDEN  

🚫 NEVER commit broken / untested code  
🚫 NEVER upload secrets  
No passwords, API keys, .env, tokens.

🚫 NEVER resolve conflicts blindly  
If you see conflict markers:

<<<<<<  
======  
>>>>>>  

STOP and ask.
