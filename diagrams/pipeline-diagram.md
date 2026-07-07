# CI/CD Pipeline Diagram

## Overview
This diagram describes the automated CI/CD workflow used in the capstone project.

## Text-Based Pipeline Diagram

```text
                 +----------------------+
                 |   Developer Pushes   |
                 |   to main/develop    |
                 +----------+-----------+
                            |
                            v
                 +----------------------+
                 |  GitHub Actions CI   |
                 +----------------------+
                            |
                            v
       +-----------------------------------------------+
       | 1. Checkout Code                              |
       | 2. Set Up Node.js                             |
       | 3. Install Dependencies                       |
       | 4. Lint Code                                  |
       | 5. Run Automated Tests                        |
       | 6. Build Application                          |
       | 7. Build Docker Image                         |
       +-------------------+---------------------------+
                           |
                           v
                +---------------------------+
                |     CI Job Succeeds       |
                +-------------+-------------+
                              |
                +-------------+-------------+
                |                           |
                v                           v
   +----------------------------+   +------------------------------+
   | Push to develop branch     |   | Push to main branch          |
   +----------------------------+   +------------------------------+
                |                           |
                v                           v
   +----------------------------+   +------------------------------+
   | Deploy to Staging          |   | Deploy to Production         |
   +----------------------------+   +------------------------------+
Pipeline Logic
The workflow is designed so that:

all code changes must pass CI before deployment
staging deployment runs only for develop
production deployment runs only for main
This is enforced using the needs: keyword and branch-specific conditions.

CI Components
The CI job validates the project through:

code checkout
Node.js setup
dependency installation
linting
automated testing
frontend build
Docker build
Deployment Flow
Staging
The staging job is triggered only when code is pushed to the develop branch.

Production
The production job is triggered only when code is pushed to the main branch.

Docker Integration
Docker is included in the CI process to verify that the application can be containerised successfully. This improves confidence in deployment readiness and portability.

Security Considerations
secrets are not stored in the codebase
environment files are ignored
sensitive values should be handled through GitHub Secrets
Summary
This pipeline demonstrates a complete DevOps delivery flow:

validate
test
build
containerise
deploy