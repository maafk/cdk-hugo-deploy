const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'maafk',
  authorAddress: 'maafk@users.noreply.github.com',
  cdkVersion: '2.24.1',
  defaultReleaseBranch: 'main',
  name: 'cdk-hugo-deploy',
  repositoryUrl: 'https://github.com/maafk/cdk-hugo-deploy.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();