# MERN Jenkins Test Demo

This repository contains a ready-to-test MERN (MongoDB, Express, React, Node.js) baseline architecture configured with a `Jenkinsfile` for CI/CD pipeline verification.

## Directory Structure

```
mern-jenkins-demo/
├── backend/
│   ├── package.json
│   ├── server.js
│   └── test/
│       └── server.test.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.test.js
│   │   └── index.js
│   └── package.json
├── .gitignore
├── Jenkinsfile
└── README.md
```

## Running Locally

### 1. Backend
```bash
cd backend
npm install
npm test
npm start
```

### 2. Frontend
```bash
cd frontend
npm install
npm test
npm start
```

## Running in Jenkins

1. Push this folder to a Git repository (e.g., GitHub or GitLab).
2. Create a new **Pipeline** job in Jenkins.
3. In configuration, select **Pipeline script from SCM**, choose **Git**, and provide your repository URL.
4. Ensure the **NodeJS Plugin** is installed in Jenkins under *Manage Jenkins > Global Tool Configuration* and named `NodeJS`.
5. Run the pipeline!
