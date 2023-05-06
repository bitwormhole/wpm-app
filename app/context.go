package app

import "github.com/bitwormhole/starter/application"

const theBindingKey = "github.com/bitwormhole/wpm-app/app/Context#binding"

// Context 表示 WPM 应用程序上下文接口
type Context interface {
	GetPort() int
	RunServer() error
	RunGUI() error
}

// GetContext 获取已绑定的上下文
func GetContext(ac application.Context) Context {
	o, err := ac.GetAttributes().GetAttributeRequired(theBindingKey)
	if err != nil {
		panic(err)
	}
	ctx, ok := o.(Context)
	if !ok {
	}
	return ctx
}

// BindContext 绑定上下文
func BindContext(c Context, i application.Initializer) {
	i.SetAttribute(theBindingKey, c)
}
