# Feature Overview

The build step works in deploy-dev.yml.  I would like to be able to select the branch and deploy to dev and then when the merge to main happens deploy automatically.

## Acceptance Criteria

- allow a developer to navigate to actions and click deploy to dev for manual deployment
- when manually deploying, a developer should be shown a drop down of branches that can be deployed
- when manually deploying, a button should be shown to deploy once the branch is selected
- when a PR is merged the job should run automatically and deploy main