# MERN Task Manager

## Project Overview
A full-stack MERN (MongoDB, Express, React, Node.js) task manager app with authentication and CRUD for tasks.

---

## Backend Structure
- All business logic is in `controllers/` (see `authController.js`, `taskController.js`)
- Routes delegate to controllers for separation and maintainability
- Middleware for authentication and error handling
- Models for `User` and `Task`

---

## Frontend Structure (2025 Refactor)
- All task manager logic and components are now in `frontend/src/features/taskManager/`
  - `Dashboard.jsx`, `TaskForm.jsx`, `TaskItem.jsx`, `taskApi.js`
- All authentication logic and components are now in `frontend/src/features/auth/`
  - `Login.jsx`, `Register.jsx`, `authApi.js`
- API logic is split between `taskApi.js` (tasks) and `authApi.js` (auth)
- `frontend/src/components/` is reserved for reusable components (currently empty)
- `frontend/src/pages/` and `frontend/src/services/` are empty after migration
- Routing and imports in `frontend/src/App.jsx` updated for new structure

---

## App Structure (2025 Refactor)

```
Task Manager 2/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── server.js
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── authApi.js
│   │   │   └── taskManager/
│   │   │       ├── Dashboard.jsx
│   │   │       ├── TaskForm.jsx
│   │   │       ├── TaskItem.jsx
│   │   │       └── taskApi.js
│   │   ├── components/        # reusable components (empty)
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── pages/                  # empty
│   ├── services/               # empty
│   └── ...
├── info.txt
├── README.md
└── ...
```

---

## Refactoring Highlights
- All feature-specific code is organized in `features/` folders
- API logic split between `taskApi.js` and `authApi.js`
- Routing and imports updated for new structure
- Easier scalability and maintainability

---

## How to Run
1. Install dependencies in both `backend` and `frontend` folders: `npm install`
2. Start backend: `npm start` (from `backend`)
3. Start frontend: `npm run dev` (from `frontend`)

---
For further details, see `info.txt` and `frontend/README.md`.
