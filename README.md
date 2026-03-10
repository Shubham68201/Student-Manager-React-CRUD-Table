# Student Manager – React CRUD Table

A simple frontend application built with React that allows users to manage student records using basic CRUD operations (Create, Read, Update, Delete).

This project demonstrates how to build a dynamic table interface where users can add, edit, and delete student data directly from the browser without using a backend server. All data is handled on the frontend using local state.

---

## 🚀 Live Demo

https://student-manager-react-crud-table.vercel.app/students


---

## ✨ Features

* Display students in a table format
* Add new student records
* Edit existing student details
* Delete students with confirmation
* Form validation (required fields and valid email format)
* Simulated loading state
* Download student data as an Excel file
* Responsive UI using modern frontend tools

---

## 🛠️ Tech Stack

Frontend

* React
* Vite
* JavaScript
* Tailwind CSS
* DaisyUI

Libraries

* React Router
* Redux Toolkit
* React Icons
* React Hot Toast
* Axios
* xlsx (Excel export)

Tools

* GitHub (version control)
* Vercel (deployment)

---

## 📁 Project Structure

Student-Manager-React-CRUD-Table
│
├── public
│
├── src
│   ├── assets
│   ├── components
│   │   ├── StudentForm.jsx
│   │   ├── StudentTable.jsx
│   │   └── Loader.jsx
│   │
│   ├── data
│   │   └── students.json
│   │
│   ├── pages
│   │   └── StudentsPage.jsx
│   │
│   ├── redux
│   │   └── studentsSlice.js
│   │
│   ├── utils
│   │   └── exportExcel.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js

---

## ⚙️ Installation

Clone the repository

git clone https://github.com/Shubham68201/Student-Manager-React-CRUD-Table.git

Navigate to the project folder

cd Student-Manager-React-CRUD-Table

Install dependencies

npm install

Start development server

npm run dev

The application will run on

http://localhost:5173

---

## 📊 Excel Export

Users can download student data as an Excel file using the `xlsx` library.

This allows exporting either:

* All student records
* Filtered data (if filtering is implemented)

---

## 📌 Project Purpose

The goal of this project is to practice frontend development concepts such as:

* React component architecture
* State management
* Form handling and validation
* CRUD operations
* Data export functionality
* UI design with Tailwind CSS

---

## 🚧 Future Improvements

Possible enhancements:

* Backend integration (MERN stack)
* MongoDB database storage
* Authentication system
* Search and filtering
* Pagination
* Dashboard analytics

---

## 👨‍💻 Author

Shubham Bharti
