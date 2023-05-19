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

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HugoDeploy <a name="HugoDeploy" id="cdk-hugo-deploy.HugoDeploy"></a>

#### Initializers <a name="Initializers" id="cdk-hugo-deploy.HugoDeploy.Initializer"></a>

```typescript
import { HugoDeploy } from 'cdk-hugo-deploy'

new HugoDeploy(scope: Construct, id: string, props: HugoDeployProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-hugo-deploy.HugoDeploy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-hugo-deploy.HugoDeploy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-hugo-deploy.HugoDeploy.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-hugo-deploy.HugoDeployProps">HugoDeployProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-hugo-deploy.HugoDeploy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-hugo-deploy.HugoDeploy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-hugo-deploy.HugoDeploy.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-hugo-deploy.HugoDeployProps">HugoDeployProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-hugo-deploy.HugoDeploy.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-hugo-deploy.HugoDeploy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-hugo-deploy.HugoDeploy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-hugo-deploy.HugoDeploy.isConstruct"></a>

```typescript
import { HugoDeploy } from 'cdk-hugo-deploy'

HugoDeploy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-hugo-deploy.HugoDeploy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-hugo-deploy.HugoDeploy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-hugo-deploy.HugoDeploy.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-hugo-deploy.HugoDeploy.property.publicDir">publicDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-hugo-deploy.HugoDeploy.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-hugo-deploy.HugoDeploy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-hugo-deploy.HugoDeploy.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `publicDir`<sup>Required</sup> <a name="publicDir" id="cdk-hugo-deploy.HugoDeploy.property.publicDir"></a>

```typescript
public readonly publicDir: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="cdk-hugo-deploy.HugoDeploy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### HugoDeployProps <a name="HugoDeployProps" id="cdk-hugo-deploy.HugoDeployProps"></a>

#### Initializer <a name="Initializer" id="cdk-hugo-deploy.HugoDeployProps.Initializer"></a>

```typescript
import { HugoDeployProps } from 'cdk-hugo-deploy'

const hugoDeployProps: HugoDeployProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-hugo-deploy.HugoDeployProps.property.domainName">domainName</a></code> | <code>string</code> | Domain name of the site deploying to. |
| <code><a href="#cdk-hugo-deploy.HugoDeployProps.property.publicDir">publicDir</a></code> | <code>string</code> | Path to Hugo public directory, which is generated after running the `hugo` command. |
| <code><a href="#cdk-hugo-deploy.HugoDeployProps.property.region">region</a></code> | <code>string</code> | Region deploying to. |
| <code><a href="#cdk-hugo-deploy.HugoDeployProps.property.zone">zone</a></code> | <code>aws-cdk-lib.aws_route53.HostedZone</code> | Zone the Domain Name is created in. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-hugo-deploy.HugoDeployProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Domain name of the site deploying to.

You should already have a hosted zone in the account you're deploying to with this domain name

---

##### `publicDir`<sup>Required</sup> <a name="publicDir" id="cdk-hugo-deploy.HugoDeployProps.property.publicDir"></a>

```typescript
public readonly publicDir: string;
```

- *Type:* string

Path to Hugo public directory, which is generated after running the `hugo` command.

By default, this will be the `public` directory in your hugo project

---

##### `region`<sup>Optional</sup> <a name="region" id="cdk-hugo-deploy.HugoDeployProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* us-east-1

Region deploying to.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="cdk-hugo-deploy.HugoDeployProps.property.zone"></a>

```typescript
public readonly zone: HostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.HostedZone

Zone the Domain Name is created in.

---



