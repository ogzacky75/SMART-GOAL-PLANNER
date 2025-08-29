import click
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from lib.db.models import Users, skills
from lib.db.seed import seed_data
from lib.helpers import get_skill_by_name, recommend_next_skill

DATABASE_URL = "sqlite:///micro.db"
engine = create_engine(DATABASE_URL, echo=False)
Session = sessionmaker(bind=engine)
session = Session()


seed_data()


@click.group()
def cli():
    """Welcome to the Micro Skills CLI! 🎓"""
    pass

# USER COMMANDS


@cli.command()
@click.argument("username")
@click.argument("role")
def create_user(username, role):
    """Create a new user: create-user <username> <role>"""
    try:
        new_user = Users(username=username, role=role)
        session.add(new_user)
        session.commit()
        click.secho(f"✅ User {username} created with role {role}", fg="green")
    except Exception as e:
        session.rollback()
        click.secho(f"❌ Error: {e}", fg="red")


@cli.command()
@click.argument("username")
def get_user(username):
    """Get a user by username: get-user <username>"""
    user = session.query(Users).filter_by(username=username).first()
    if user:
        click.secho(f"👤 ID={user.id}, Username={user.username}, Role={user.role}", fg="cyan")
    else:
        click.secho("❌ User not found", fg="red")


@cli.command()
@click.argument("username")
@click.argument("new_role")
def update_user(username, new_role):
    """Update a user's role: update-user <username> <new_role>"""
    user = session.query(Users).filter_by(username=username).first()
    if user:
        user.role = new_role
        session.commit()
        click.secho(f"🔄 Updated {username} to role {new_role}", fg="yellow")
    else:
        click.secho("❌ User not found", fg="red")


@cli.command()
@click.argument("username")
def delete_user(username):
    """Delete a user: delete-user <username>"""
    user = session.query(Users).filter_by(username=username).first()
    if user:
        session.delete(user)
        session.commit()
        click.secho(f"🗑️ Deleted user {user.username}", fg="magenta")
    else:
        click.secho("❌ User not found", fg="red")



# SKILL COMMANDS

@cli.command()
@click.argument("skill_name")
def select_skill(skill_name):
    """Select a skill by name: select-skill <skill_name>"""
    skill = get_skill_by_name(session, skill_name.strip())
    if skill:
        click.secho(f"🎯 Selected skill: {skill.title}", fg="green")
        click.secho(f"📘 Description: {skill.description}", fg="blue")
    else:
        click.secho("❌ Skill not found", fg="red")


@cli.command()
def recommend_skill():
    """Get a recommended new skill"""
    recommended = recommend_next_skill(session)
    if recommended:
        click.secho(f"✨ Recommended skill: {recommended.title}", fg="green")
        click.secho(f"📘 Description: {recommended.description}", fg="blue")
    else:
        click.secho("⚠️ No other skills available", fg="yellow")


if __name__ == "__main__":
    cli()