package cboot

import "github.com/bitwormhole/starter/application"

// ConfigForBoot ...
func ConfigForBoot(cb application.ConfigBuilder) error {
	return autoGenConfig(cb)
}
