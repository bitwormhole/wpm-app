package server

import (
	"github.com/bitwormhole/starter/application"
	"github.com/bitwormhole/starter/markup"
)

// Runner ...
type Runner struct {
	markup.Component ``

	AC application.Context `inject:"context"`
}

func (inst *Runner) Run() error {

	return nil
}
