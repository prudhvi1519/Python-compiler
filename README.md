# Pins Studio

A social media platform for sharing and discovering creative pins, built with Django and Bootstrap.  
**Users can upload images, search for pins, like, comment, and manage their profiles in a responsive, user-friendly interface.**

---

## 🛠️ Technologies Used

- **Django**: Python web framework for the backend.
- **Bootstrap**: For responsive and modern UI design.
- **HTML/CSS/JavaScript**: Frontend for layout, custom styling, and interactivity.
- **CodeMirror** (optional, if used): For any code-related features or text editing.
- **SQLite**: Default database for development (configurable for production).

---

## 🎮 Features

- **Pin Upload**: Users can upload images as pins with titles and descriptions.
- **Search Pins**: Search functionality to find pins by keywords.
- **Like & Comment**: Engage with pins through likes and comments.
- **User Profiles**: View and edit user profiles, including password management.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Authentication**: Secure user signup, login, and logout with Django’s auth system.
- **Navbar Toggler**: Mobile-friendly navbar with a hamburger menu for navigation.

---

## 💻 Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/pins-studio.git


Navigate to the project directory:  
cd pins-studio


Create and activate a virtual environment (recommended):  
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows


Install dependencies:  
pip install -r requirements.txt


If requirements.txt is unavailable, install Django: pip install django


Run migrations to set up the database:  
python manage.py migrate


Run the development server:  
python manage.py runserver


Open your browser and visit:  
http://127.0.0.1:8000/




🤖 How It Works

Frontend: Uses Bootstrap for responsive layouts and custom CSS (customPinsStudio.css) for styling. The navbar includes a toggler for mobile navigation.
Backend: Django handles user authentication, pin uploads, search queries, and comment/like interactions.
Database: SQLite stores user data, pins, comments, and likes (configurable for PostgreSQL/MySQL in production).
Form Handling: Secure POST requests with CSRF protection for uploads and comments.
Responsive Navbar: A hamburger menu appears on mobile screens (<991px) for easy navigation.


👥 Contributing

Fork the repository.

Clone your fork:  
git clone https://github.com/your-username/pins-studio.git


Create a new branch:  
git checkout -b feature-name


Make changes and commit:  
git commit -m "Add new feature"


Push to your branch:  
git push origin feature-name


Create a pull request on GitHub.



📜 License
This project is open-source and available under the MIT License.```
