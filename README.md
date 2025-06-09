# Pins Studio

A social media platform for sharing and discovering creative pins, built with Django and Bootstrap.  
**Users can upload images, search for pins, like, comment, and manage their profiles in a responsive, user-friendly interface.**

---

## 🛠️ Technologies Used

- **Django**: Python web framework for backend logic and authentication.
- **Bootstrap 5.3.3**: For responsive UI design and components.
- **HTML/CSS/JavaScript**: Custom frontend styling and interactivity.
- **SQLite**: Default database for development (configurable for PostgreSQL/MySQL).
- **Django Static Files**: Custom CSS (`customPinsStudio.css`) for styling.

---

## 🎮 Features

- **Pin Upload**: Upload images with titles and descriptions via a form.
- **Search Pins**: Keyword-based search to discover pins.
- **Like & Comment**: Interact with pins through likes and comments.
- **User Profiles**: View/edit profiles and change passwords.
- **Responsive Design**: Mobile-friendly layout with a hamburger menu for navigation (<991px).
- **Authentication**: Secure signup, login, and logout using Django’s auth system.
- **Dynamic Navbar**: Conditional links for authenticated users (e.g., Profile, Logout) or guests (e.g., Sign Up, Login).

---

## 💻 Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/pins-studio.git


Navigate to the project directory:  
cd pins-studio


Create and activate a virtual environment:  
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




📂 Project Structure
pins-studio/
├── pins/
│   ├── static/pins/
│   │   ├── css/customPinsStudio.css  # Custom styles for the frontend
│   │   └── favicon.ico               # Favicon for the site
│   ├── templates/
│   │   ├── base.html                 # Base template with navbar
│   │   └── pins/                     # App-specific templates (e.g., home, profile)
│   ├── migrations/                   # Database migrations
│   ├── models.py                     # Pin, Comment, Like models
│   ├── views.py                      # Logic for rendering pages and handling forms
│   ├── urls.py                       # URL routes for the app
│   └── apps.py                       # App configuration
├── pins_studio/
│   ├── settings.py                   # Django settings (static files, templates)
│   ├── urls.py                       # Project URL configuration
│   └── wsgi.py                       # WSGI entry point
├── manage.py                         # Django management script
└── requirements.txt                  # Project dependencies


🤖 How It Works

Frontend: 

Uses Bootstrap for responsive layouts and customPinsStudio.css for custom styling (e.g., navbar, cards, buttons).
The navbar includes a mobile-friendly toggler for screens <991px.
Example navbar HTML (base.html):<nav class="navbar">
    <div class="navbar-row">
        <a class="navbar-brand brand-effect" href="{% url 'home' %}">Pins Studio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                {% if user.is_authenticated %}
                    <li class="nav-item"><a class="nav-link nav-link-effect" href="{% url 'profile' %}">{{ user.username }}</a></li>
                    <li class="nav-item"><a class="nav-link nav-link-effect" href="{% url 'logout' %}">Logout</a></li>
                {% else %}
                    <li class="nav-item"><a class="nav-link nav-link-effect" href="{% url 'signup' %}">Sign Up</a></li>
                    <li class="nav-item"><a class="nav-link nav-link-effect" href="{% url 'login' %}">Login</a></li>
                {% endif %}
            </ul>
        </div>
    </div>
</nav>




Custom CSS:

Styles the navbar toggler for mobile screens:@media (max-width: 991px) {
    .navbar-toggler {
        display: block;
        margin-right: 15px !important;
        padding: 8px !important;
    }
    .navbar-toggler-icon {
        width: 18px;
        height: 2px;
        background: #333 !important;
    }
}




Backend:

Django handles routes (e.g., /, /profile/, /login/) via urls.py.
Models (assumed) include Pin, Comment, and Like for storing data.
Example view (assumed in views.py):from django.shortcuts import render, redirect
from .models import Pin
from .forms import PinForm

def home(request):
    pins = Pin.objects.all()
    if request.method == 'POST':
        form = PinForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = PinForm()
    return render(request, 'pins/home.html', {'pins': pins, 'form': form})




Database: SQLite stores pins, comments, likes, and user data.

Form Handling: Secure POST requests with CSRF tokens for uploads and comments.



🚀 Usage

Home Page: View all pins at http://127.0.0.1:8000/.
Upload Pin: Authenticated users can upload pins via a form (e.g., /upload/).
Search Pins: Use the search bar to find pins by keywords.
Profile: Access /profile/ to view/edit user details or /change_password/ to update passwords.
Like/Comment: Interact with pins via like buttons and comment forms.
Mobile Navigation: On screens <991px, click the hamburger menu to access navigation links.


🌐 Deployment

Set Up a Production Server:

Use a WSGI server like Gunicorn:pip install gunicorn
gunicorn pins_studio.wsgi:application --bind 0.0.0.0:8000




Configure Static Files:

Run python manage.py collectstatic to gather static files.
Update settings.py:STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')




Use a Web Server:

Configure Nginx or Apache to serve static files and proxy requests to Gunicorn.
Example Nginx config:server {
    listen 80;
    server_name your-domain.com;
    location /static/ {
        alias /path/to/pins-studio/staticfiles/;
    }
    location / {
        proxy_pass http://127.0.0.1:8000;
    }
}




Database: Use PostgreSQL/MySQL for production. Update settings.py:
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'pins_studio',
        'USER': 'your_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}


Environment Variables:

Store sensitive data (e.g., SECRET_KEY) in a .env file using python-dotenv.




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
