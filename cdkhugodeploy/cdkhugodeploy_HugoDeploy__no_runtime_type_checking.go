//go:build no_runtime_type_checking
// +build no_runtime_type_checking

// Deploy Hugo static websites to AWS
package cdkhugodeploy

// Building without runtime type checking enabled, so all the below just return nil

func validateHugoDeploy_IsConstructParameters(x interface{}) error {
	return nil
}

func validateNewHugoDeployParameters(scope constructs.Construct, id *string, props *HugoDeployProps) error {
	return nil
}

