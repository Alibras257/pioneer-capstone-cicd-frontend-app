# Project Walkthrough

## Overview
This document explains the full implementation process for the frontend CI/CD capstone project. The goal of the project was to build a frontend web application and automate its validation, build, containerisation, and deployment using GitHub Actions.

## 1. Frontend Application Development
A simple frontend **Task Tracker** application was created using:
- HTML
- CSS
- JavaScript
- Vite

### Application functionality
The application allows users to:
- enter a new task
- add the task to a list
- mark tasks as completed
- clear completed tasks
- view live task statistics

This provided meaningful application logic that could be tested automatically.

## 2. Project Dependencies
The project uses the following development tools:
- **Vite** for frontend development and build
- **Jest** for automated testing
- **ESLint** for linting
- **Docker** for containerisation

Dependencies were managed through `package.json`.

## 3. Automated Testing
Automated tests were written for the application logic in `tests/logic.test.js`.

### Test coverage includes
- adding a task
- toggling task completion
- clearing completed tasks
- task statistics calculation

Tests are executed with:

```bash
npm test
4. Linting
Code quality validation was implemented with ESLint.

Linting is executed with:

bash
npm run lint
The project uses the ESLint v9 flat configuration format with eslint.config.js.

5. Build Process
The application is built using Vite.

Build command:

bash
npm run build
The production-ready files are generated in the dist/ directory.

6. Docker Containerisation
A Dockerfile was added in the repository root.

Docker strategy
The containerisation process uses a multi-stage build:

Build stage
uses node:20-alpine
installs dependencies
builds the frontend application
Runtime stage
uses nginx:alpine
copies the built dist/ files into the Nginx web root
exposes port 80
This approach keeps the final image lightweight and production-ready.

7. GitHub Actions CI Pipeline
The CI/CD workflow was implemented in:

bash
.github/workflows/ci-cd.yml
CI stages
The ci job performs:

code checkout
Node.js setup
dependency installation
linting
automated tests
application build
Docker image build
This ensures that all major validation steps run automatically on every relevant branch update.

8. Workflow Triggers
The workflow triggers on:

push to main
push to develop
pull_request to main
pull_request to develop
This supports both direct updates and collaborative review workflows.

9. Staging and Production Deployment
The pipeline includes two deployment jobs:

Staging deployment
runs only on pushes to develop
depends on successful completion of ci
Production deployment
runs only on pushes to main
depends on successful completion of ci
This was implemented using the needs: keyword to ensure deployment does not occur if validation fails.

10. Deployment Target
The application was deployed using GitHub Actions to a static hosting target suitable for frontend applications.

Branch strategy
develop branch represents staging
main branch represents production
11. Secrets Management
The project follows secure DevOps practices:

no hardcoded credentials in the repository
.env is ignored in version control
sensitive values should be stored in GitHub Secrets if needed
12. Validation of Pipeline Behaviour
The GitHub Actions workflow was verified through successful execution on both main branches:

On main
ci passed
deploy-production passed
deploy-staging was skipped
On develop
ci passed
deploy-staging passed
deploy-production was skipped
This confirms correct branch-based deployment logic.

13. Challenges Encountered
During implementation, ESLint v9 required migration from the older .eslintrc.* style to the newer flat config format using:

bash
eslint.config.js
This issue was corrected and re-tested successfully.

Conclusion
This project successfully demonstrates a complete CI/CD workflow for a frontend application using GitHub Actions, Docker, automated tests, and branch-based deployment. It reflects core DevOps practices for validation, automation, reproducibility, and release management.