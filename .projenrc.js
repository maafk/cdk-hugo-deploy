const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Taylor Ondrey',
  authorAddress: 'taylor@taylorondrey.com',
  cdkVersion: '2.24.1',
  defaultReleaseBranch: 'main',
  name: 'cdk-hugo-deploy',
  description: 'Deploy Hugo static websites to AWS',
  repositoryUrl: 'https://github.com/maafk/cdk-hugo-deploy.git',
  publishToPypi: {
    distName: 'cdk-hugo-deploy',
    module: 'cdk_hugo_deploy',
  },
  publishToNuget: {
    packageId: 'maafk.CdkHugoDeploy',
    dotNetNamespace: 'maafk.CdkHugoDeploy',
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();