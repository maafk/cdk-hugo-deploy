// Deploy Hugo static websites to AWS
package cdkhugodeploy

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/maafk/cdk-hugo-deploy/cdkhugodeploy/jsii"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/maafk/cdk-hugo-deploy/cdkhugodeploy/internal"
)

type HugoDeploy interface {
	constructs.Construct
	DomainName() *string
	// The tree node.
	Node() constructs.Node
	PublicDir() *string
	Region() *string
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for HugoDeploy
type jsiiProxy_HugoDeploy struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_HugoDeploy) DomainName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"domainName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_HugoDeploy) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_HugoDeploy) PublicDir() *string {
	var returns *string
	_jsii_.Get(
		j,
		"publicDir",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_HugoDeploy) Region() *string {
	var returns *string
	_jsii_.Get(
		j,
		"region",
		&returns,
	)
	return returns
}


func NewHugoDeploy(scope constructs.Construct, id *string, props *HugoDeployProps) HugoDeploy {
	_init_.Initialize()

	j := jsiiProxy_HugoDeploy{}

	_jsii_.Create(
		"cdk-hugo-deploy.HugoDeploy",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

func NewHugoDeploy_Override(h HugoDeploy, scope constructs.Construct, id *string, props *HugoDeployProps) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-hugo-deploy.HugoDeploy",
		[]interface{}{scope, id, props},
		h,
	)
}

// Checks if `x` is a construct.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
// Deprecated: use `x instanceof Construct` instead.
func HugoDeploy_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-hugo-deploy.HugoDeploy",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (h *jsiiProxy_HugoDeploy) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		h,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

type HugoDeployProps struct {
	// Domain name of the site deploying to.
	//
	// You should already have a hosted zone in the account you're deploying to with this domain name.
	DomainName *string `field:"required" json:"domainName" yaml:"domainName"`
	// Path to Hugo public directory, which is generated after running the `hugo` command.
	//
	// By default, this will be the `public` directory in your hugo project.
	PublicDir *string `field:"required" json:"publicDir" yaml:"publicDir"`
	// Region deploying to.
	Region *string `field:"optional" json:"region" yaml:"region"`
}

