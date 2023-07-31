//---
class GameScenario {
    //---
    constructor(data) {
        //---
        this.initData = data
        //---
        let names = Object.getOwnPropertyNames(data) 
        names.forEach(name => { Object.defineProperty(this, name, Object.getOwnPropertyDescriptor(data, name)) })
    }
    //---
    reset(game) {
        //---
        this.startDate = null
        this.victoryDate = null
    }
    //---
    load(data) {
        //---
        if (data.startDate != null) this.startDate = data.startDate
        if (data.victoryDate != null) this.victoryDate = data.victoryDate
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.startDate = this.startDate
        savedData.victoryDate = this.victoryDate
        //---
        return savedData
    }
}
//---
class GameItem {
    //---
    constructor(data) {
        //---
        this.initData = data
        //---
        let names = Object.getOwnPropertyNames(data) 
        names.forEach(name => { Object.defineProperty(this, name, Object.getOwnPropertyDescriptor(data, name)) })
    }
    //---
    reset(game) {
        //---
        this.stack = this.initData.stack ? this.initData.stack : Infinity
        this.count = this.initData.count ? this.initData.count : 0
        //---
        this.status = 'wait'
        this.collapsed = false
        //---
        this.recipe = game.currentScenario.recipes.find(recipe => recipe.name == this.recipeName)
        //---
        this.name = this.recipe.name
        this.output = this.recipe.output
        //---
        this.machine = this.recipe.machine
        this.machineCount = 0
        this.selectMachineCount = '1'
        //---
        if (this.recipe.inputs) {
            //---
            this.inputs = {}
            //---
            for (let id in this.recipe.inputs) {
                //---
                let item = new GameItem({ id:this.id + '-' + id, cat:'item', recipeName:id, stack:(this.stack == Infinity ? 1 : this.stack) * this.recipe.inputs[id] })
                game.currentItems.push(item)
                item.reset(game)
                //---
                this.inputs[item.id] = this.recipe.inputs[id]
            }
        }
        //---
        this.reqs = this.recipe.reqs ? this.recipe.reqs : null
        this.unlocked = this.reqs ? false : true
        //---
        this.time = this.recipe.time
        this.remainingTime = this.time
        //this.refreshNeeds(game)
    }
    //---
    load(data) {
        //---
        if (data.count != null) this.count = data.count
        if (data.status != null) this.status = data.status
        if (data.collapsed != null) this.collapsed = data.collapsed
        if (data.machineCount != null) this.machineCount = data.machineCount
        if (data.remainingTime != null) this.remainingTime = data.remainingTime
        if (data.selectMachineCount != null) this.selectMachineCount = data.selectMachineCount
        //---
        if (this.stack && this.count > this.stack) this.count = this.stack
        //---
        this.refreshTime()
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.count = this.count
        savedData.status = this.status
        savedData.collapsed = this.collapsed
        savedData.machineCount = this.machineCount
        savedData.remainingTime = this.remainingTime
        savedData.selectMachineCount = this.selectMachineCount
        //---
        return savedData
    }
    //---
    getAddMachineCount(game) {
        //---
        if (this.selectMachineCount == '1') return 1
        else if (this.selectMachineCount == '10') return 10
        else if (this.selectMachineCount == '100') return 100
        else if (this.selectMachineCount == 'max') return game.getAvailableCount(this.machine)
    }
    //---
    getRemoveMachineCount() {
        //---
        if (this.selectMachineCount == '1') return 1
        else if (this.selectMachineCount == '10') return 10
        else if (this.selectMachineCount == '100') return 100
        else if (this.selectMachineCount == 'max') return this.machineCount
    }
    //---
    getProgress() {
        //---
        return 100 - 100 * this.remainingTime / this.time
    }
    //---
    refreshTime() {
        //---
        let oldTime = this.time
        //---
        this.time = this.recipe.time
        if (this.machineCount > 0) this.time /= this.machineCount
        //---
        let percent = this.time / oldTime
        this.remainingTime *= percent
    }
    //---
    refreshNeeds(game) {
        //---        
        this.needs = {}
        //---
        if (this.machine != 'manual') {
            //---
            if (this.needs[this.machine]) this.needs[this.machine] += 1
            else this.needs[this.machine] = 1
        }
        //---
        for (let id in this.inputs) {
            //---
            let child = game.getItem(id)
            let childNeeds = child.refreshNeeds(game)
            //---
            for (let needId in childNeeds) {
                //---
                if (needId != 'manual') {
                    //---
                    if (this.needs[needId]) this.needs[needId] += childNeeds[needId]
                    else this.needs[needId] = childNeeds[needId]
                }
            }
        }
        return this.needs
    }
    //---
    unassignAll(game) {
        //---
        if (this.machine != 'manual') {
            //---
            this.machineCount = 0
            this.refreshTime()
        }
        //---
        for (let id in this.inputs) {
            //---
            let child = game.getItem(id)
            child.unassignAll(game)
        }
    }
}
//---
class Game {
    //---
    constructor() {
        //---
        this.currentScenario = null
        this.currentItems = []
        //---
        this.victory = false
        this.victoryReqs = null
        //---
        this.scenarios = []
        DATA.scenarios.forEach(scenario => {
            //---
            let newScenario = new GameScenario(scenario)
            this.scenarios.push(newScenario)
        })
    }
    //---
    loadScenario(scenarioId) {
        //---
        this.currentScenario = this.scenarios.find(scenario => scenario.id == scenarioId)
        //---
        this.victory = false
        this.victoryReqs = this.currentScenario.victoryReqs ? this.currentScenario.victoryReqs : null
        //---
        this.currentItems = []
        this.currentScenario.items.forEach(data => {
            //---
            let item = new GameItem(data)
            this.currentItems.push(item)
            item.reset(this)
        })
    }
    //---
    start(scenarioId) {
        //---
        this.loadScenario(scenarioId)
        //---
        this.refreshUnlocked()
    }
    //---
    load(data) {
        //---
        if (data.scenarioId) this.loadScenario(data.scenarioId)
        //---
        if (data.items) this.currentItems.forEach(item => { if (data.items[item.id]) item.load(data.items[item.id]) })
        if (data.victory) this.victory = data.victory
        if (data.scenarios) this.scenarios.forEach(scenario => { if (data.scenarios[scenario.id]) scenario.load(data.scenarios[scenario.id]) })
        //---
        this.refreshUnlocked()
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.scenarioId = this.currentScenario.id
        savedData.manualId = this.currentManualId
        //---
        savedData.victory = this.victory
        //---
        savedData.items = {}
        this.currentItems.forEach(item => savedData.items[item.id] = item.getSaveData())
        //---
        savedData.scenarios = {}
        this.scenarios.forEach(scenario => savedData.scenarios[scenario.id] = scenario.getSaveData())
        //---
        return savedData
    }
    //---
    getItem(itemId) { return this.currentItems.find(item => item.id == itemId) }
    //---
    checkReqs(reqs) {
        //---
        let check = true
        //---
        for (let id in reqs) {
            //---
            let item = this.getItem(id)
            if (item.count < reqs[id]) check = false
        }
        //---
        return check
    }
    //---
    refreshUnlocked() {
        //---
        this.currentItems.filter(item => item.reqs).forEach(item => { item.unlocked = this.checkReqs(item.reqs) })
    }
    //---
    isVictoryReached() {
        //---
        if (this.victory) return false
        else if (this.victoryReqs) return this.checkReqs(this.victoryReqs)
        else return false
    }
    //---
    doVictory() {
        //---
        this.victory = true
        this.currentScenario.victoryDate = Date.now()
    }
    //---
    getUsedCount(itemId) {
        //---
        let usedCount = 0
        //---
        let items = this.currentItems.filter(item => item.machineCount > 0 && item.machine == itemId)
        items.forEach(item => { usedCount += item.machineCount })
        //---
        return usedCount
    }
    //---
    getAvailableCount(itemId) {
        //---
        let item = this.getItem(itemId)
        //---
        let usedCount = 0
        if (item.cat == 'machine') usedCount = this.getUsedCount(itemId)
        //---
        return item.count - usedCount
    }
    //---
    canProduce(item) {
        //---
        if (item.stack && item.count >= item.stack) return false
        //---
        if (item.inputs) {
            for (let id in item.inputs) {
                if (this.getAvailableCount(id) < item.inputs[id])
                    return false
            }
        }
        //---
        return true
    }
    //---
    doTick(stepMs) {
        //---
        let refresh = false
        let seconds = stepMs / 1000
        //---
        let items = this.currentItems.filter(item => item.machineCount > 0)
        items.forEach(item => {
            //---
            if (item.status == 'wait' && this.canProduce(item)) {
                //---
                if (item.inputs) {
                    for (let id in item.inputs) {
                        //---
                        let inputElem = this.getItem(id)
                        inputElem.count -= item.inputs[id]                        
                    }
                }
                //---
                item.status = 'inprogress'
                item.remainingTime = item.time
            }
            //---
            if (item.status == 'inprogress') {
                if (seconds >= item.remainingTime) {
                    //---
                    seconds -= item.remainingTime
                    //---
                    let estimatedCycleCount = Math.floor(seconds / item.time)
                    if (estimatedCycleCount >= 1) {
                        //---
                        if (item.stack) {
                            //---
                            let cycleCount = Math.floor((item.stack - item.count) / item.output)
                            if (cycleCount < estimatedCycleCount) estimatedCycleCount = cycleCount
                        }
                        //---
                        if (item.inputs) {
                            //---
                            for (let id in item.inputs) {
                                //---
                                let inputElem = this.getItem(id)
                                let cycleCount = Math.floor(inputElem.count / item.inputs[id])
                                if (cycleCount < estimatedCycleCount) estimatedCycleCount = cycleCount
                            }
                            //---
                            if (item.machine == 'manual') estimatedCycleCount = 0
                            //---
                            if (estimatedCycleCount > 0) {
                                //---
                                for (let id in item.inputs) {
                                    //---
                                    let inputElem = this.getItem(id)
                                    inputElem.count -= estimatedCycleCount * item.inputs[id]
                                }
                            }
                        }
                    }
                    //---
                    item.count += (estimatedCycleCount + 1) * item.output
                    if (item.stack != Infinity) {
                        //---
                        if (item.count > item.stack) item.count = item.stack
                        if (item.count >= item.stack && item.hasUnlocks) {
                            //---
                            item.unassignAll(this)
                            refresh = true
                            //---
                            this.refreshUnlocked()
                        }
                    }
                    else if (item.hasUnlocks) {
                        //---
                        refresh = true
                        //---
                       this.refreshUnlocked()
                    }
                    //---
                    if (item.machine == 'manual') {
                        //---
                        item.status = 'wait'
                        item.machineCount = 0
                        item.remainingTime = item.time
                    }
                    //---
                    else if (this.canProduce(item)) {
                        //---
                        if (item.inputs) {
                            for (let id in item.inputs) {
                                //---
                                let inputElem = this.getItem(id)
                                inputElem.count -= item.inputs[id]                        
                            }
                        }
                        //---
                        item.status = 'inprogress'
                        item.remainingTime = item.time
                    }
                    else {
                        //---
                        item.status = 'wait'
                        item.remainingTime = item.time
                    }
                }
                else item.remainingTime -= seconds
            }
        })
        //---
        return refresh
    }
    //---
    setMachineSelectCount(data) {
        //---
        let item = this.getItem(data.itemId)
        item.selectMachineCount = data.count
    }
    //---
    canAddMachineCount(item) {
        //---
        let addCount = item.getAddMachineCount(this)
        if (addCount <= 0) return false
        //---
        if (this.getAvailableCount(item.machine) < addCount) return false
        //---
        return true
    }
    //---
    addMachineCount(itemId) {
        //---
        let item = this.getItem(itemId)
        if (this.canAddMachineCount(item)) {            
            //---
            let addCount = item.getAddMachineCount(this)
            item.machineCount += addCount
            item.refreshTime()
        }
    }
    //---
    canRemoveMachineCount(item) {
        //---
        let removeCount = item.getRemoveMachineCount()
        if (item.machineCount < 1 || item.machineCount < removeCount) return false
        //---
        return true
    }
    //---
    removeMachineCount(itemId) {
        //---
        let item = this.getItem(itemId)
        if (this.canRemoveMachineCount(item)) {
            //---
            let removeCount = item.getRemoveMachineCount()
            item.machineCount -= removeCount
            item.refreshTime()
            //---
            if (item.machineCount <= 0) item.status = 'wait'
        }
    }
}