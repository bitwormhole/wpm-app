package main

import (
	"embed"

	"github.com/bitwormhole/starter"
	"github.com/bitwormhole/starter/application"
	"github.com/bitwormhole/starter/collection"
	"github.com/bitwormhole/wpm-app/app"
	"github.com/bitwormhole/wpm-app/gen/cboot"
	"github.com/bitwormhole/wpm-app/gen/cgui"
	"github.com/bitwormhole/wpm-app/gen/cserver"
	wpmmix "github.com/bitwormhole/wpm-mix"
	"github.com/bitwormhole/wpm/server/service"
)

const (
	theModuleName     = "github.com/bitwormhole/wpm-app"
	theModuleVersion  = "v0.0.2"
	theModuleRevision = 2
	theModuleResPath  = "src/main/resources"
)

//go:embed "src/main/resources"
var theModuleResFS embed.FS

func main() {
	c := &wpmAppContext{}
	err := c.RunBoot()
	if err != nil {
		panic(err)
	}
}

////////////////////////////////////////////////////////////////////////////////

type wpmAppContext struct {
}

func (inst *wpmAppContext) _Impl() app.Context {
	return inst
}

func (inst *wpmAppContext) GetPort() int {
	return 0
}

func (inst *wpmAppContext) RunBoot() error {

	res := inst.getRes()

	// config module
	mb := application.ModuleBuilder{}
	mb.Name(theModuleName + "#boot")
	mb.Version(theModuleVersion)
	mb.Revision(theModuleRevision)
	mb.Resources(res)
	mb.OnMount(cboot.ConfigForBoot)

	mb.Dependency(wpmmix.ModuleBoot())

	// make module
	m := mb.Create()

	// run
	return inst.runWithModule(m)
}

func (inst *wpmAppContext) RunServer() error {

	res := inst.getRes()

	// config module
	mb := application.ModuleBuilder{}
	mb.Name(theModuleName + "#server")
	mb.Version(theModuleVersion)
	mb.Revision(theModuleRevision)
	mb.Resources(res)
	mb.OnMount(cserver.ConfigForServer)

	mb.Dependency(wpmmix.ModuleServer())

	// make module
	m := mb.Create()

	service.SetAppModule(m)

	// run
	return inst.runWithModule(m)
}

func (inst *wpmAppContext) RunGUI() error {

	res := inst.getRes()

	// config module
	mb := application.ModuleBuilder{}
	mb.Name(theModuleName + "#gui")
	mb.Version(theModuleVersion)
	mb.Revision(theModuleRevision)
	mb.Resources(res)
	mb.OnMount(cgui.ConfigForGUI)

	// mb.Dependency(wpmmix.Module  ())

	// make module
	m := mb.Create()

	// run
	return inst.runWithModule(m)
}

func (inst *wpmAppContext) getRes() collection.Resources {
	return collection.LoadEmbedResources(&theModuleResFS, theModuleResPath)
}

func (inst *wpmAppContext) runWithModule(m application.Module) error {
	i := starter.InitApp()
	i.UseMain(m)
	app.BindContext(inst, i)
	rt, err := i.RunEx()
	if err != nil {
		return err
	}
	return rt.Loop()
}
