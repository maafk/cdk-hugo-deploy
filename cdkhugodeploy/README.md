# CDK-Hugo-Deploy

This is an AWS CDK Construct for easily deploying [Hugo](https://gohugo.io/) Static websites to AWS S3 behind SSL/Cloudfront.

## Usage

Before deploying, run the `hugo` command in your Hugo project to generate a built site in the `public` directory.

## Typescript

```typescript
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { HugoDeploy } from 'cdk-hugo-deploy';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new HugoDeploy(this, 'HugoDeploy', {
      publicDir: 'path/to/hugo-project/public',
      domainName: 'example.com'  // Domain you already have a hosted zone for
    });
}
```

## Python

```python
from constructs import Construct
from aws_cdk import Stack
from cdk_hugo_deploy import HugoDeploy

class MyStack(Stack):
    def __init__(self, scope: Construct, id: str, **kwargs):
        super().__init__(scope, id, **kwargs)

        HugoDeploy(self, "HugoDeploy",
            public_dir="path/to/hugo-project/public",
            domain_name="example.com"
        )
```

## Prerequisites

Assumes that there is already a Route53 hosted zone for `domainName` that can be [looked up](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_route53.HostedZone.html#static-fromwbrlookupscope-id-query)

## Why this construct?

Other constructs for deploying Single Page Applicationis (SPA) such as [CDK-SPA-Deploy](https://github.com/nideveloper/CDK-SPA-Deploy) don't account for how Hugo handles paths that end in `/`.

This construct includes a [Cloudfront Function](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html) to [rewrite paths](src/hugoPaths.js) to ensure `/path/to/page/` will request `/path/to/page/index.html` from the S3 Origin.

## Contributing

Please open an [issue](https://github.com/maafk/cdk-hugo-deploy/issues) with any updates/features you'd like on this
