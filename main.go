package main

import (
	"embed"
	"fmt"

	"github.com/bitwormhole/starter"
	"github.com/bitwormhole/starter/application"
	"github.com/bitwormhole/starter/collection"
	"github.com/bitwormhole/wpm"
	wpmmix "github.com/bitwormhole/wpm-mix"
)

const (
	theModuleName     = "github.com/bitwormhole/wpm-app"
	theModuleVersion  = "v0.0.1"
	theModuleRevision = 1
	theModuleResPath  = "src/main/resources"
)

//go:embed "src/main/resources"
var theModuleResFS embed.FS

func main() {

	res := collection.LoadEmbedResources(&theModuleResFS, theModuleResPath)
	parent1 := wpm.Module()
	parent2 := wpmmix.Module()

	// module
	mb := application.ModuleBuilder{}
	mb.Name(theModuleName)
	mb.Version(theModuleVersion)
	mb.Revision(theModuleRevision)
	mb.Resources(res)
	mb.Dependency(parent1)
	mb.Dependency(parent2)
	mod := mb.Create()

	checkModuleVersion(mod, parent1, parent2)

	// run
	i := starter.InitApp()
	i.UseMain(mod)
	i.Run()
}

func checkModuleVersion(mods ...application.Module) {
	want := ""
	for _, m := range mods {
		have := m.GetVersion()
		if want == "" {
			want = have
		} else if want != have {
			panic(fmt.Sprint("bad module version, want:", want, " have:", have))
		}
	}
}
