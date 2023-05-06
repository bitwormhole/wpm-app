package boot

import (
	"sync"
	"time"

	"bitwormhole.com/starter/vlog"
	"github.com/bitwormhole/starter/application"
	"github.com/bitwormhole/starter/markup"
	"github.com/bitwormhole/wpm-app/app"
)

// Runner ...
type Runner struct {
	markup.Component `class:"life"`

	AC application.Context `inject:"context"`

	OptionRunWithGUI    bool `inject:"${wpm.options.run-with-gui}"`
	OptionRunWithServer bool `inject:"${wpm.options.run-with-server}"`

	countSubTask int
	mutexSubTask sync.Mutex
	wactx        app.Context
	tasks        []func() error // tasks[0] 是主任务，后续的是支线任务
	task0        func() error   // 主任务
}

func (inst *Runner) _Impl() application.LifeRegistry {
	return inst
}

// GetLifeRegistration ...
func (inst *Runner) GetLifeRegistration() *application.LifeRegistration {
	return &application.LifeRegistration{
		OnInit:    inst.init,
		OnStart:   inst.start,
		Looper:    inst,
		OnStop:    inst.stop,
		OnDestroy: inst.destroy,
	}
}

func (inst *Runner) init() error {
	inst.wactx = app.GetContext(inst.AC)

	if inst.OptionRunWithGUI {
		inst.addTask(inst.runGUI)
	}

	if inst.OptionRunWithServer {
		inst.addTask(inst.runServer)
	}

	return nil
}

func (inst *Runner) start() error {
	for i, t := range inst.tasks {
		if i == 0 {
			inst.task0 = t
			continue
		}
		inst.startTask(t)
	}
	return nil
}

func (inst *Runner) stop() error {
	return inst.waitForDone()
}

func (inst *Runner) waitForDone() error {
	// 等待分支任务停止
	max := time.Millisecond * 5000
	step := time.Millisecond
	for {
		if step > max {
			step = max
		}
		if inst.countSubTask > 0 {
			time.Sleep(step)
			step *= 2
		} else {
			break
		}
	}
	return nil
}

func (inst *Runner) destroy() error {
	vlog.Info("exit")
	return nil
}

// Loop ...
func (inst *Runner) Loop() error {
	t := inst.task0
	inst.runTask(t)
	return nil
}

func (inst *Runner) addTask(t func() error) {
	inst.tasks = append(inst.tasks, t)
}

func (inst *Runner) startTask(t func() error) {
	inst.updateTaskCount(1)
	go func() {
		inst.runTask(t)
		inst.updateTaskCount(-1)
	}()
}

func (inst *Runner) runTask(t func() error) {
	if t == nil {
		return
	}
	defer func() {
		x := recover()
		e, ok := x.(error)
		if ok && e != nil {
			vlog.Error(e)
		}
	}()
	err := t()
	if err != nil {
		vlog.Error(err)
	}
}

func (inst *Runner) updateTaskCount(n int) {
	inst.mutexSubTask.Lock()
	defer inst.mutexSubTask.Unlock()
	if n > 0 {
		inst.countSubTask++
	} else if n < 0 {
		inst.countSubTask--
	}
}

func (inst *Runner) runServer() error {
	return inst.wactx.RunServer()
}

func (inst *Runner) runGUI() error {
	return inst.wactx.RunGUI()
}
