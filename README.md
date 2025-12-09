## ✅ Standard GitHub workflow during this project

### 1️⃣ Clone the main repository  
Each member runs this once:

git clone https://github.com/Beylessen1/GLProjectERP.git

cd REPO  
---
### 2️⃣ Each Member Creates Their Own Branch 

Each person works only in their own branch.

### Make sure you are on main

git checkout main  
git pull origin main  

### Create your personal branch  
Use this format:

git checkout -b username-feature  

Examples:

git checkout -b sara-auth  
git checkout -b ali-backend  
git checkout -b amine-ui  

### Push your branch to GitHub

git push -u origin username-feature  

✅ Now your branch exists online  
✅ Everyone only works inside their own branch

---

### 3️⃣ Daily Work Flow (What EVERY Member Does Every Day)

### 1️ Always update your branch before working

git checkout username-feature  
git pull origin main  

✅ This prevents conflicts  
✅ This keeps your code up-to-date

### 2️ Make your changes normally  
Edit files, write code, test locally.

### 3️ Save your work with commits

git status  
git add .  
git commit -m "Clear message describing what you did"  
git push  

✅ Do this frequently  
✅ Do NOT wait days before pushing

---

## ❌ IMPORTANT — Things You Must NEVER DO

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
