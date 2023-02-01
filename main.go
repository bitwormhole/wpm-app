package main

import (
	"github.com/bitwormhole/starter"
	wpmappsrc "github.com/bitwormhole/wpm-app/src"
)

func main() {
	i := starter.InitApp()
	i.Use(wpmappsrc.Module())
	i.Run()
}
