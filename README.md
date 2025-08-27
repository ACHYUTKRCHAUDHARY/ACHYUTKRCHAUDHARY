PopX Website - README
Overview
PopX is a modern, responsive web application built with HTML, Tailwind CSS, and vanilla JavaScript. It features multiple pages with smooth transitions and a clean, user-friendly interface.

Features
Responsive Design: Fully responsive layout that works on mobile, tablet, and desktop devices

Multi-page Interface: Four main pages - Welcome, Login, Create Account, and Account Settings

Smooth Transitions: Animated page transitions for better user experience

Modern UI: Clean design with Tailwind CSS styling

Interactive Elements: Form validation and interactive components

Pages
1. Welcome Page
Introduction to PopX

Call-to-action for account creation

Login option for existing users

2. Login Page
Email and password authentication

Form validation

Link to create account page

3. Create Account Page
Registration form with required fields

Agency selection option

Form validation

4. Account Settings Page
User profile display

Account information

Edit profile and change password options

VITE-PROJECT/
│── .gitignore
│── eslint.config.js
│── index.html
│── package-lock.json
│── package.json
│── README.md
│── vite.config.js
│
├── 📂 .git
├── 📂 node_modules
│
├── 📂 src
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
│ │
│ ├── 📂 components
│ │ ├── AccountSeting.jsx
│ │ ├── CreateComponent.jsx
│ │ ├── Login.jsx
│ │ └── Welcome.jsx

No additional setup or dependencies required

Usage
Navigate between pages using the navigation menu

On mobile devices, use the hamburger menu to access navigation

Fill out forms with appropriate data

Enjoy the smooth transitions between pages

Customization
To customize the website:

Modify colors in the Tailwind configuration within the <script> tag

Update content in the respective page sections

Adjust styling using Tailwind CSS classes

Add new pages by following the existing structure

Responsive Breakpoints
Mobile: < 768px

Tablet: 768px - 1024px

Desktop: > 1024px

Form Validation
All forms include basic HTML5 validation:

Required fields must be filled

Email fields must contain valid email addresses

Password fields have appropriate requirements

Future Enhancements
Potential improvements for future versions:

Backend integration for form submission

User authentication system

Database integration for user accounts

Additional pages and features

Dark mode toggle