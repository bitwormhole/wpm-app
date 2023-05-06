package gui

import (
	"os/exec"
	"strconv"

	"github.com/bitwormhole/starter/application"
	"github.com/bitwormhole/starter/markup"
)

// Runner ...
type Runner struct {
	markup.Component `class:"life"`

	AC application.Context `inject:"context"`

	BrowserPath string `inject:"${executable.browser.path}"`
	Port        int    `inject:"${server.port}"`

	url string
}

func (inst *Runner) _Impl() application.LifeRegistry {
	return inst
}

// GetLifeRegistration ...
func (inst *Runner) GetLifeRegistration() *application.LifeRegistration {
	return &application.LifeRegistration{
		OnInit:  inst.init,
		OnStart: inst.start,
	}
}

func (inst *Runner) init() error {
	port := inst.Port
	if port < 1 {
		port = 8080
	}
	portStr := strconv.Itoa(port)
	inst.url = "http://localhost:" + portStr + "/"
	return nil
}

func (inst *Runner) start() error {

	url := inst.url
	name := inst.BrowserPath
	args := []string{url}
	cmd := exec.Command(name, args...)

	err := cmd.Start()
	if err != nil {
		return err
	}

	return cmd.Wait()
}
