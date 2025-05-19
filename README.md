This project is a frontend-only React assignment that includes a mock login flow and a responsive admin dashboard UI, built using React, Tailwind CSS, and Context API. It demonstrates state management, local storage integration, and a clean, component-based layout design.

✅ Features
🟦 Login Flow
Simple login form with name and email inputs.

On form submission, user data is stored in Chrome's Local Storage.

Uses Context API to share user information across components.

No backend/API integration — login is fully mocked.

🟩 Admin Dashboard UI
Clean and professional dashboard interface based on provided design.

Responsive layouts using Tailwind CSS, Grid, and Flexbox.

Optional sidebar navigation (if present in the design).

Well-structured dashboard sections and cards.

🛠️ Tech Stack
React (with functional components)

React Context API (for global state)

Tailwind CSS (for responsive and utility-first styling)

Local Storage (for persisting user session)

📂 Project Structure
athena/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── AppliedJobs.tsx
│   │   ├── Candidates.tsx
│   │   ├── DashBoardCards.tsx
│   │   ├── DashboardContent.tsx
│   │   ├── EmployeeManagement.tsx
│   │   ├── Employees.tsx
│   │   ├── Header.tsx
│   │   ├── JobsContent.tsx
│   │   ├── LoginForm.tsx
│   │   ├── MainLayout.tsx
│   │   ├── Payrolls.tsx
│   │   ├── SideBar.tsx
│   │   └── StatCard.tsx
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   ├── DashBoardContext.tsx
│   │   ├── EmployeeContext.tsx
│   │   ├── PageContext.tsx
│   │   └── UserContext.tsx
│   ├── data/
│   │   └── employees.json
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Employee.tsx
│   │   └── LoginPage.tsx
│   ├── routes/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.app.json


📸 Screenshots  


![image](https://github.com/user-attachments/assets/3e87e26d-5c15-4493-978a-9c87dcc7d724)
![image](https://github.com/user-attachments/assets/886f0625-391d-49d8-990f-85cd99b463be)


📋 How to Run
Clone the repository

```bash
git clone https://github.com/adihehe/Athena.git
cd athena
Install dependencies
```

```bash
npm install
Start the development server
```

```bash
npm run dev
```

View in browser
Navigate to: https://athena-vpqx.vercel.app/


🔍 Notes
This project is for educational/demo purposes only.

There is no backend or real authentication — login functionality is simulated via Local Storage.

Clean UI implementation was prioritized to match the provided design exactly.




