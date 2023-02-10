package main

import (
	"embed"

	startergin "github.com/bitwormhole/starter-gin"
	"github.com/bitwormhole/starter/application"
	"github.com/bitwormhole/starter/collection"
	"github.com/bitwormhole/wpm"
)

//go:embed "src/main/resources"
var theModuleResFS embed.FS

const (
	theModuleResPath = "src/main/resources"
)

// Module ...
func thisModule() application.Module {

	parent := wpm.Module()
	mb := application.ModuleBuilder{}

	mb.Name(parent.GetName() + "#app")
	mb.Version(parent.GetVersion())
	mb.Revision(parent.GetRevision())
	mb.Resources(collection.LoadEmbedResources(&theModuleResFS, theModuleResPath))

	mb.Dependency(startergin.ModuleWithDevtools())
	mb.Dependency(parent)

	return mb.Create()
}
