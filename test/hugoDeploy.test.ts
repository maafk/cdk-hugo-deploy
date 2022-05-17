import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
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
