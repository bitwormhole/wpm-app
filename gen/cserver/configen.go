package cserver

import "github.com/bitwormhole/starter/application"

// ConfigForServer ...
func ConfigForServer(cb application.ConfigBuilder) error {
	return autoGenConfig(cb)
}
