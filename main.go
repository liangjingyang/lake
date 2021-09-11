package main

import (
	"os"
	"path/filepath"
	"github.com/merico-dev/lake/api"
	"github.com/merico-dev/lake/plugins"
)

func main() {
	execPath, e := os.Executable()
	if e != nil {
		panic(e)
	}
	pluginDir := filepath.Join(execPath, "plugins")
	err := plugins.LoadPlugins(pluginDir)
	if err != nil {
		panic(err)
	}
	api.CreateApiService()
	println("Hello, lake")
}
