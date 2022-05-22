import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { HugoDeploy, HugoDeployProps } from '../src';

test('Cloudfront function Included', () => {
  const app = new App();
  const stack = new Stack(app, 'testStack', {
    env: {
      region: 'us-east-1',
      account: '1234',
    },
  });
  const testProps: HugoDeployProps = {
    publicDir: 'test/testPublic',
    domainName: 'example.com',
  };
  // WHEN
  new HugoDeploy(stack, 'hugoDeploy', testProps);

  const template = Template.fromStack(stack);

  // THEN
  template.resourceCountIs('AWS::CloudFront::Function', 1);
});

test('Route53 records for provided domain', () => {
  const app = new App();
  const stack = new Stack(app, 'testStack', {
    env: {
      region: 'us-east-1',
      account: '1234',
    },
  });
  const domainName = 'example.com';
  const testProps: HugoDeployProps = {
    publicDir: 'test/testPublic',
    domainName: domainName,
  };
  // WHEN
  new HugoDeploy(stack, 'hugoDeploy', testProps);

  const template = Template.fromStack(stack);

  // THEN
  template.resourceCountIs('AWS::Route53::RecordSet', 1);
  template.hasResource('AWS::Route53::RecordSet', {
    Properties: Match.objectLike({
      Name: `${domainName}.`,
    }),
  });
});
