package cdkhugodeploy

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsroute53"
)

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
	// Zone the Domain Name is created in.
	Zone awsroute53.HostedZone `field:"optional" json:"zone" yaml:"zone"`
}

