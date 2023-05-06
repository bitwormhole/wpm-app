// (todo:gen2.template) 
// 这个配置文件是由 starter-configen 工具自动生成的。
// 任何时候，都不要手工修改这里面的内容！！！

package cgui

import (
	application "github.com/bitwormhole/starter/application"
	config "github.com/bitwormhole/starter/application/config"
	lang "github.com/bitwormhole/starter/lang"
	util "github.com/bitwormhole/starter/util"
	gui0x6c2733 "github.com/bitwormhole/wpm-app/app/gui"
    
)


func nop(x ... interface{}){
	util.Int64ToTime(0)
	lang.CreateReleasePool()
}


func autoGenConfig(cb application.ConfigBuilder) error {

	var err error = nil
	cominfobuilder := config.ComInfo()
	nop(err,cominfobuilder)

	// component: com0-gui0x6c2733.Runner
	cominfobuilder.Next()
	cominfobuilder.ID("com0-gui0x6c2733.Runner").Class("life").Aliases("").Scope("")
	cominfobuilder.Factory((&comFactory4pComRunner{}).init())
	err = cominfobuilder.CreateTo(cb)
	if err != nil {
		return err
	}



    return nil
}

////////////////////////////////////////////////////////////////////////////////

// comFactory4pComRunner : the factory of component: com0-gui0x6c2733.Runner
type comFactory4pComRunner struct {

    mPrototype * gui0x6c2733.Runner

	
	mACSelector config.InjectionSelector
	mBrowserPathSelector config.InjectionSelector
	mPortSelector config.InjectionSelector

}

func (inst * comFactory4pComRunner) init() application.ComponentFactory {

	
	inst.mACSelector = config.NewInjectionSelector("context",nil)
	inst.mBrowserPathSelector = config.NewInjectionSelector("${executable.browser.path}",nil)
	inst.mPortSelector = config.NewInjectionSelector("${server.port}",nil)


	inst.mPrototype = inst.newObject()
    return inst
}

func (inst * comFactory4pComRunner) newObject() * gui0x6c2733.Runner {
	return & gui0x6c2733.Runner {}
}

func (inst * comFactory4pComRunner) castObject(instance application.ComponentInstance) * gui0x6c2733.Runner {
	return instance.Get().(*gui0x6c2733.Runner)
}

func (inst * comFactory4pComRunner) GetPrototype() lang.Object {
	return inst.mPrototype
}

func (inst * comFactory4pComRunner) NewInstance() application.ComponentInstance {
	return config.SimpleInstance(inst, inst.newObject())
}

func (inst * comFactory4pComRunner) AfterService() application.ComponentAfterService {
	return inst
}

func (inst * comFactory4pComRunner) Init(instance application.ComponentInstance) error {
	return nil
}

func (inst * comFactory4pComRunner) Destroy(instance application.ComponentInstance) error {
	return nil
}

func (inst * comFactory4pComRunner) Inject(instance application.ComponentInstance, context application.InstanceContext) error {
	
	obj := inst.castObject(instance)
	obj.AC = inst.getterForFieldACSelector(context)
	obj.BrowserPath = inst.getterForFieldBrowserPathSelector(context)
	obj.Port = inst.getterForFieldPortSelector(context)
	return context.LastError()
}

//getterForFieldACSelector
func (inst * comFactory4pComRunner) getterForFieldACSelector (context application.InstanceContext) application.Context {
    return context.Context()
}

//getterForFieldBrowserPathSelector
func (inst * comFactory4pComRunner) getterForFieldBrowserPathSelector (context application.InstanceContext) string {
    return inst.mBrowserPathSelector.GetString(context)
}

//getterForFieldPortSelector
func (inst * comFactory4pComRunner) getterForFieldPortSelector (context application.InstanceContext) int {
    return inst.mPortSelector.GetInt(context)
}




