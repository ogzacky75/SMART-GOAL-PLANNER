from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from lib.db.models import Base, Users, skills

DATABASE_URL = "sqlite:///micro.db"   

engine = create_engine(DATABASE_URL, echo=False)
Session = sessionmaker(bind=engine)

def seed_data():

    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)

    session = Session()

    try:

        # Seed Users

        user1 = Users(username="alice", role="learner")
        user2 = Users(username="bob", role="mentor")
        session.add_all([user1, user2])

        # Seed Skills

        skill1 = skills(name="Python Basics", description="Learn variables, loops, and functions.")
        skill2 = skills(name="SQL Fundamentals", description="Understand tables, queries, and joins.")
        skill3 = skills(name="Git & GitHub", description="Version control basics with Git.")
        skill4 = skills(name="Data Analysis", description="Intro to pandas, NumPy, and visualization.")
        skill5 = skills(name="APIs", description="Learn how to interact with REST APIs in Python.")

        session.add_all([skill1, skill2, skill3, skill4, skill5])

        # Commit everything
        session.commit()
        print("Database seeded successfully!")

    except Exception as e:
        session.rollback()
        print(f"Error seeding database: {e}")
    finally:
        session.close()


if __name__ == "__main__":
    seed_data()