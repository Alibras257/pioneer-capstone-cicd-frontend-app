# Automated CI/CD Pipeline for Frontend Web Application Capstone

## Project Overview
This project is a production-style DevOps capstone that demonstrates the design and implementation of a complete automated CI/CD pipeline for a frontend web application using GitHub Actions. It combines source control, automated testing, linting, build automation, Docker containerisation, and branch-based deployment to staging and production environments.

## Project Objectives
- Build a functional frontend web application
- Write meaningful automated tests for application logic
- Configure a GitHub Actions CI pipeline
- Add Docker containerisation
- Implement multi-stage deployment for staging and production
- Follow secure development practices by excluding secrets from version control

## Application Summary
The application is a simple frontend **Task Tracker** built with HTML, CSS, and JavaScript using Vite. It allows users to:
- add tasks
- mark tasks as completed
- clear completed tasks
- view task statistics

## Repository Structure

```bash
pioneer-capstone-cicd-frontend-app/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── diagrams/
│   └── pipeline-diagram.md
├── docs/
│   └── project-walkthrough.md
├── screenshots/
│   └── .gitkeep
├── src/
│   ├── app.js
│   ├── logic.js
│   ├── main.js
│   └── style.css
├── tests/
│   └── logic.test.js
├── .dockerignore
├── .env.example
├── eslint.config.js
├── .gitignore
├── Dockerfile
├── index.html
├── package.json
├── vite.config.js
└── README.md
Features
Interactive task management interface
Automated test coverage for task logic
Static build using Vite
Docker image build as part of CI
Branch-based deployments using GitHub Actions
CI/CD Pipeline Overview
The pipeline is implemented with GitHub Actions and includes:

Checkout code
Set up Node.js runtime
Install dependencies
Lint the codebase
Run automated tests
Build the application
Build the Docker image
Deploy to staging on develop
Deploy to production on main
Branch Deployment Strategy
develop → staging deployment
main → production deployment
The deployment jobs use needs: so deployment only happens after the CI job passes successfully.

Scripts
Available npm commands:

bash
npm install
npm test
npm run lint
npm run build
npm run dev
Docker
The project includes a multi-stage Docker build:

Stage 1: build the frontend using Node.js
Stage 2: serve the built app using Nginx
Security Practices
No secrets or tokens are hardcoded
.env files are excluded using .gitignore
Sensitive values should be stored in GitHub Secrets when needed
Testing
The project includes automated tests for:

adding a task
toggling task completion
clearing completed tasks
generating task statistics
Documentation
docs/project-walkthrough.md → full project implementation steps
diagrams/pipeline-diagram.md → pipeline and deployment architecture
screenshots/ → visual evidence of workflow runs and deployments
Outcome
This capstone demonstrates a complete DevOps workflow for a frontend application, from code validation and testing through containerisation and automated multi-branch deployment.

Author
Ibraheem Aloyinlapa