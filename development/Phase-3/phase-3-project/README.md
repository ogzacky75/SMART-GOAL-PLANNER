# 🎓 Micro Skills CLI

This is an interactive CLI application written using python and uses SQL for its database

# How to create a new user

Inside the PHASE-3-PROJECT directory you: 

Run "python -m lib.cli create-user john admin" while inside the directory using your operating system's own cli

# How to get your user account

Run "python -m lib.cli get-user john" while inside the directory using your operating system's own cli.

# How to update the user role 

Run "python -m lib.cli update-user john moderator" while inside the directory using your operating system's own cli.

# How to delete user

Run "python -m lib.cli delete-user john" while inside the directory using your operating system's own cli.

# How to select a skill

Run "python -m lib.cli select-skill Python" while inside the directory using your operating system's own cli.

#  How to recomend a skill

Run "python -m lib.cli recommend-skill" while inside the directory using your operating system's own cli.

# Colors and Output

✅Green - Success
❌Red - Errors
🔄Yellow - Updates
👤Cyan - User info
🗑️Magenta - Deletes

# Project Structure

phase-3-project/
│── .venv/
│── lib/
|   ├── __pycache__/
|   ├── __init__.py
|   ├── debug.py
|   ├── micro.db
│   ├── cli.py          
│   ├── helpers.py      
│   └── db/
|       ├── __pycache__/
|       ├── migrations/
|       ├── __init__.py
│       ├── models.py   
│       ├── seed.py     
│       └── micro.db    
│── LICENSE
│── micro.db
│── Pipfile
│── Pipfile.lock
│── requirements.txt
│── README.md