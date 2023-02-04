package wpmappsrc

import (
	"embed"
	"os"
	"strings"

	startergin "github.com/bitwormhole/starter-gin"
	"github.com/bitwormhole/starter/application"
	"github.com/bitwormhole/starter/collection"
	"github.com/bitwormhole/wpm"
)

//go:embed "main/resources"
var theModuleResFS embed.FS

const (
	theModuleResPath = "main/resources"
)

// Module ...
func Module() application.Module {

	parent := wpm.ServerModule()
	mb := application.ModuleBuilder{}

	mb.Name(parent.GetName() + "#app")
	mb.Version(parent.GetVersion())
	mb.Revision(parent.GetRevision())
	mb.Resources(collection.LoadEmbedResources(&theModuleResFS, theModuleResPath))

	if isDebugEnabled() {
		mb.Dependency(startergin.ModuleWithDevtools())
	}
	mb.Dependency(parent)

	return mb.Create()
}

func isDebugEnabled() bool {

	table := make(map[string]bool)
	args := os.Args

	table["--debug"] = true
	table["--dev"] = true
	table["--develop"] = true

	for _, a := range args {
		a = strings.TrimSpace(a)
		a = strings.ToLower(a)
		ok := table[a]
		if ok {
			return true
		}
	}

	return false
}
