package main

import (
	"embed"

	"github.com/bitwormhole/starter"
	"github.com/bitwormhole/starter/application"
	"github.com/bitwormhole/starter/collection"
	wpmmix "github.com/bitwormhole/wpm-mix"
	"github.com/bitwormhole/wpm/server/service"
)

const (
	theModuleName     = "github.com/bitwormhole/wpm-app"
	theModuleVersion  = "v0.1.0-preview-r7"
	theModuleRevision = 7
	theModuleResPath  = "src/main/resources"
)

//go:embed "src/main/resources"
var theModuleResFS embed.FS

func main() {

	res := collection.LoadEmbedResources(&theModuleResFS, theModuleResPath)

	// module
	mb := application.ModuleBuilder{}
	mb.Name(theModuleName)
	mb.Version(theModuleVersion)
	mb.Revision(theModuleRevision)
	mb.Resources(res)
	mb.Dependency(wpmmix.ModuleServer())

	m := mb.Create()
	service.SetAppModule(m)

	// run
	i := starter.InitApp()
	i.UseMain(m)
	i.Run()
}
