// 这个配置文件是由 starter-configen 工具自动生成的。
// 任何时候，都不要手工修改这里面的内容！！！

package cboot

import (
	application0x67f6c5 "github.com/bitwormhole/starter/application"
	markup0x23084a "github.com/bitwormhole/starter/markup"
	boot0x7649dc "github.com/bitwormhole/wpm-app/app/boot"
)

type pComRunner struct {
	instance *boot0x7649dc.Runner
	 markup0x23084a.Component `class:"life"`
	AC application0x67f6c5.Context `inject:"context"`
	OptionRunWithGUI bool `inject:"${wpm.options.run-with-gui}"`
	OptionRunWithServer bool `inject:"${wpm.options.run-with-server}"`
}

