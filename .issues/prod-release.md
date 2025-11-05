# Feature: Production Release

The website has two deployments: one for dev and the other for production. This feature should prepare a release for production when a merge into main happens.

## Acceptance Criteria

- Follow the copilot-instructions.
- DO NOT change the dev workflow
- Add a github workflow that will create a release and deploy to an S3 bucket
- releases should use semantic versioning.
- The environment variables should be similar to the DEV deployment, but use PROD. 
- The github environment for PROD has been setup.