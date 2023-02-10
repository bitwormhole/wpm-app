package main

import (
	"github.com/bitwormhole/starter"
)

func main() {
	i := starter.InitApp()
	i.Use(thisModule())
	i.Run()
}
