// (todo:gen2.template) 
// 这个配置文件是由 starter-configen 工具自动生成的。
// 任何时候，都不要手工修改这里面的内容！！！

package cboot

import (
	application "github.com/bitwormhole/starter/application"
	config "github.com/bitwormhole/starter/application/config"
	lang "github.com/bitwormhole/starter/lang"
	util "github.com/bitwormhole/starter/util"
	boot0x7649dc "github.com/bitwormhole/wpm-app/app/boot"
    
)


func nop(x ... interface{}){
	util.Int64ToTime(0)
	lang.CreateReleasePool()
}


func autoGenConfig(cb application.ConfigBuilder) error {

	var err error = nil
	cominfobuilder := config.ComInfo()
	nop(err,cominfobuilder)

	// component: com0-boot0x7649dc.Runner
	cominfobuilder.Next()
	cominfobuilder.ID("com0-boot0x7649dc.Runner").Class("life").Aliases("").Scope("")
	cominfobuilder.Factory((&comFactory4pComRunner{}).init())
	err = cominfobuilder.CreateTo(cb)
	if err != nil {
		return err
	}



    return nil
}

////////////////////////////////////////////////////////////////////////////////

// comFactory4pComRunner : the factory of component: com0-boot0x7649dc.Runner
type comFactory4pComRunner struct {

    mPrototype * boot0x7649dc.Runner

	
	mACSelector config.InjectionSelector
	mOptionRunWithGUISelector config.InjectionSelector
	mOptionRunWithServerSelector config.InjectionSelector

}

func (inst * comFactory4pComRunner) init() application.ComponentFactory {

	
	inst.mACSelector = config.NewInjectionSelector("context",nil)
	inst.mOptionRunWithGUISelector = config.NewInjectionSelector("${wpm.options.run-with-gui}",nil)
	inst.mOptionRunWithServerSelector = config.NewInjectionSelector("${wpm.options.run-with-server}",nil)


	inst.mPrototype = inst.newObject()
    return inst
}

func (inst * comFactory4pComRunner) newObject() * boot0x7649dc.Runner {
	return & boot0x7649dc.Runner {}
}

func (inst * comFactory4pComRunner) castObject(instance application.ComponentInstance) * boot0x7649dc.Runner {
	return instance.Get().(*boot0x7649dc.Runner)
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
	obj.OptionRunWithGUI = inst.getterForFieldOptionRunWithGUISelector(context)
	obj.OptionRunWithServer = inst.getterForFieldOptionRunWithServerSelector(context)
	return context.LastError()
}

//getterForFieldACSelector
func (inst * comFactory4pComRunner) getterForFieldACSelector (context application.InstanceContext) application.Context {
    return context.Context()
}

//getterForFieldOptionRunWithGUISelector
func (inst * comFactory4pComRunner) getterForFieldOptionRunWithGUISelector (context application.InstanceContext) bool {
    return inst.mOptionRunWithGUISelector.GetBool(context)
}

//getterForFieldOptionRunWithServerSelector
func (inst * comFactory4pComRunner) getterForFieldOptionRunWithServerSelector (context application.InstanceContext) bool {
    return inst.mOptionRunWithServerSelector.GetBool(context)
}




