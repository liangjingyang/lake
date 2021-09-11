package plugins

import (
	"testing"
	"runtime"
	"path/filepath"
	"github.com/merico-dev/lake/plugins"
)

func TestPluginsLoading(t *testing.T) {
	_, path, _, _ := runtime.Caller(0)
	pluginDir := filepath.Join(filepath.Dir(path), "..", "..", "bin", "plugins")
	err := plugins.LoadPlugins(pluginDir)
	if err != nil {
		t.Errorf("Failed to LoadPlugins %v", err)
	}
	if len(plugins.Plugins) == 0 {
		t.Errorf("No plugin found")
	}

	// name := "jira"
	// options := map[string]interface{}{
	// 	"boardId": 20,
	// }
	// progress := make(chan float32)
	// fmt.Printf("start runing plugin %v\n", name)
	// go func() {
	// 	_ = plugins.RunPlugin(name, options, progress)
	// }()
	// for p := range progress {
	// 	fmt.Printf("running plugin %v, progress: %v\n", name, p*100)
	// }
	// fmt.Printf("end running plugin %v\n", name)
	// if err != nil {
	// 	t.Error(err)
	// }

}
