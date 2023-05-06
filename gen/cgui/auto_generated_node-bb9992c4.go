// 这个配置文件是由 starter-configen 工具自动生成的。
// 任何时候，都不要手工修改这里面的内容！！！

package cgui

import (
	application0x67f6c5 "github.com/bitwormhole/starter/application"
	markup0x23084a "github.com/bitwormhole/starter/markup"
	gui0x6c2733 "github.com/bitwormhole/wpm-app/app/gui"
)

type pComRunner struct {
	instance *gui0x6c2733.Runner
	 markup0x23084a.Component `class:"life"`
	AC application0x67f6c5.Context `inject:"context"`
	BrowserPath string `inject:"${executable.browser.path}"`
	Port int `inject:"${server.port}"`
}

