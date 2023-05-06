package cgui

import "github.com/bitwormhole/starter/application"

// ConfigForGUI ...
func ConfigForGUI(cb application.ConfigBuilder) error {
	return autoGenConfig(cb)
}
