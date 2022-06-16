const { awscdk } = require('projen');
const { GithubCredentials } = require('projen/lib/github');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Taylor Ondrey',
  authorAddress: 'taylor@taylorondrey.com',
  cdkVersion: '2.25.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-hugo-deploy',
  description: 'Deploy Hugo static websites to AWS',
  repositoryUrl: 'https://github.com/maafk/cdk-hugo-deploy.git',
  gitignore: ['.vscode/'],
  eslintOptions: { prettier: true },
  autoApproveOptions: {},
  autoApproveUpgrades: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve'],
    },
  },
  publishToPypi: {
    distName: 'cdk-hugo-deploy',
    module: 'cdk_hugo_deploy',
  },
  publishToNuget: {
    packageId: 'maafk.CdkHugoDeploy',
    dotNetNamespace: 'maafk.CdkHugoDeploy',
  },
  publishToMaven: {
    mavenGroupId: 'io.github.maafk',
    javaPackage: 'io.github.maafk.CdkHugoDeploy',
    mavenArtifactId: 'CdkHugoDeploy',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
  publishToGo: {
    moduleName: 'github.com/maafk/cdk-hugo-deploy',
  },
});
project.package.addField('resolutions', {
  'ansi-regex': '^5.0.1',
  'json-schema': '^0.4.0',
  '@types/prettier': '2.6.0',
});
project.package.addField('prettier', {
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
});
project.eslint.addRules({
  'prettier/prettier': [
    'error',
    { singleQuote: true, semi: true, trailingComma: 'es5' },
  ],
});
project.synth();
