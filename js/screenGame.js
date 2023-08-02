//---
var TplScreenGame = function(data) {
    //---
    let html = ''
    //---
    html += '<div class="position-relative w-100 h-100">'
        
        // Top bar
        //---
        html += '<div class="position-absolute" style="top:0; width:100%; height:48px;">'
            html += '<div class="h-100 container px-3 col-12 bg-light border-bottom border-dark d-flex align-items-center">'
                html += '<div class="flex-fill row gx-2 align-items-center">'
                    html += '<div class="col">'
                        html += '<div class="row gx-2 align-items-center">'
                            html += '<div class="col-auto">'
                                html += '<img src="logo.png" width="24px" height="24px" class="rounded">'
                            html += '</div>'
                            html += '<div class="col-auto">'
                                html += '<span class="fs-6 text-white">' + i18next.t('game_title') + '</span>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                    html += '<div class="col-auto">'
                        html += '<div class="dropdown">'
                            html += '<button type="button" class="btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">'
                                html += '<div class="badge text-bg-danger">'
                                    html += '<i class="fas fa-exclamation-triangle"></i> v.dev 0.6'
                                html += '</div>'
                            html += '</button>'
                            html += '<div class="dropdown-menu">'
                                html += '<div class="px-2 py-1 text-center small">'
                                    html += '<span class="text-danger">' + i18next.t('game_disclaimer') + '</span>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                    html += '<div class="col-auto">'
                        html += '<div class="dropdown">'
                            html += '<button type="button" class="btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">'
                                html += '<i class="fas fa-info-circle"></i>'
                            html += '</button>'
                            html += '<div class="dropdown-menu">'
                                html += '<div class="px-2 py-1 text-center small">'
                                    html += '<span>' + i18next.t('text_iconsBy') + '</span>'
                                    html += '<div><a href="https://fontawesome.com/" target="_blank">Fontawesome</a></div>'
                                html += '</div>'
                                html += '<div class="px-2 py-1 text-center small">'
                                    html += '<span>' + i18next.t('text_love') + '</span>'
                                html += '</div>'
                                html += '<div class="px-2 py-1">'
                                    html += '<div class="row gx-4 align-items-center justify-content-around flex-nowrap">'
                                        html += '<div class="col-auto">'
                                            html += '<a href="https://www.patreon.com/bePatron?u=61283131" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_patreon') + '">'
                                                html += '<img src="img/patreon.png" width="24px" height="24px" />'
                                            html += '</a>'
                                        html += '</div>'
                                        html += '<div class="col-auto">'
                                            html += '<a href="https://ko-fi.com/freddecgames" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_kofi') + '">'
                                                html += '<img src="img/kofi.png" width="24px" height="24px" />'
                                            html += '</a>'
                                        html += '</div>'
                                        html += '<form class="col-auto" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_paypal') + '">'
                                            html += '<input type="hidden" name="cmd" value="_s-xclick">'
                                            html += '<input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">'
                                            html += '<button type="submit" class="btn-link bg-transparent p-0 border-0">'
                                                html += '<img src="img/paypal.png" width="24px" height="24px" />'
                                            html += '</button>'
                                        html += '</form>'
                                        html += '<div class="col-auto">'
                                            html += '<a href="https://discord.gg/ZXrggavUpv" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_discord') + '">'
                                                html += '<img src="img/discord.png" width="24px" height="24px" />'
                                            html += '</a>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
        
        // Tab panes
        //---
        html += '<div class="position-absolute tab-content" style="top:48px; bottom:58px; width:100%; ">'
            
            // Factory pane
            //---
            html += '<div class="position-relative container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTabId == 'factory' ? ' show active' : '') + '" id="factory-tab-pane" role="tabpanel" aria-labelledby="factory-tab" tabindex="0">'
            html += '</div>'

            // Scenarios pane
            //---
            html += '<div class="position-relative container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTabId == 'scenarios' ? ' show active' : '') + '" id="scenarios-tab-pane" role="tabpanel" aria-labelledby="scenarios-tab" tabindex="0">'
            html += '</div>'

            // Options pane
            //---
            html += '<div class="position-relative container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTabId == 'options' ? ' show active' : '') + '" id="options-tab-pane" role="tabpanel" aria-labelledby="options-tab" tabindex="0">'
                html += '<div class="p-3">'
                    html += '<div class="row g-2">'
                        html += '<div class="col-12">'
                            html += '<span class="fs-6">' + i18next.t('word-language') + '</span>'
                        html += '</div>'
                        html += '<div class="col-auto">'
                            html += '<button type="button" class="btn btn-light' + (i18next.language == 'en-US' ? ' border-warning' : '') + '" onclick="window.app.changeLocale(\'en-US\')">'
                                html += '<img src="img/en.png" height="24px">'
                            html += '</button>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
                html += '<div class="p-3">'
                    html += '<div class="row gy-2 gx-3 align-items-center">'
                        html += '<div class="col-12">'
                            html += '<span class="fs-6">' + i18next.t('word-options') + '</span>'
                        html += '</div>'
                        html += '<div class="col-12 col-md-auto">'
                            html += '<div class="form-check">'
                                html += '<input class="form-check-input" type="checkbox" value="" id="checkShowLocked"' + (data.showLocked ? ' checked' : '') + ' onclick="window.app.doClick(\'toggleShowLocked\')">'
                                html += '<label class="form-check-label text-white" for="checkShowLocked">' + i18next.t('word-show-locked') + '</label>'
                            html += '</div>'
                        html += '</div>'
                        html += '<div class="col-12 col-md-auto">'
                            html += '<div class="form-check">'
                                html += '<input class="form-check-input" type="checkbox" value="" id="checkShowCompleted"' + (data.showCompleted ? ' checked' : '') + ' onclick="window.app.doClick(\'toggleShowCompleted\')">'
                                html += '<label class="form-check-label text-white" for="checkShowCompleted">' + i18next.t('word-show-completed') + '</label>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
                html += '<div class="p-3">'
                    html += '<div class="row g-2">'
                        html += '<div class="col-12">'
                            html += '<span class="fs-6">' + i18next.t('word-local-data') + '</span>'
                        html += '</div>'
                        html += '<div class="col-12 col-md-6">'
                            html += '<div class="card card-body">'
                                html += '<div class="mb-2 d-flex justify-content-center">'
                                    html += '<textarea spellcheck="false" rows="3" class="w-100 form-control" disabled readonly>' + window.app.getLocalData() + '</textarea>'
                                html += '</div>'
                                html += '<div class="row g-2 align-items-center justify-content-center">'
                                    html += '<div class="col-4">'
                                        html += '<button type="button" class="w-100 btn btn-danger" onclick="window.app.showModal(\'modalWipe\')">'
                                            html += '<span><i class="fas fa-fw fa-skull"></i></span>'
                                            html += '<span class="ms-1">' + i18next.t('btn_wipeSave') + '</span>'
                                        html += '</button>'
                                    html += '</div>'
                                    html += '<div class="col-4">'
                                        html += '<button type="button" class="w-100 btn btn-warning" onclick="window.app.exportSave()">'
                                            html += '<span><i class="fas fa-fw fa-copy"></i></span>'
                                            html += '<span class="ms-1">' + i18next.t('btn_exportSave') + '</span>'
                                        html += '</button>'
                                    html += '</div>'
                                    html += '<div class="col-4">'
                                        html += '<button type="button" class="w-100 btn btn-warning" onclick="window.app.downloadSave()">'
                                            html += '<span><i class="fas fa-fw fa-download"></i></span>'
                                            html += '<span class="ms-1">' + i18next.t('btn_downloadSave') + '</span>'
                                        html += '</button>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                        html += '<div class="col-12 col-md-6">'
                            html += '<div class="card card-body">'
                                html += '<div class="mb-2 d-flex">'
                                    html += '<textarea spellcheck="false" rows="3" id="importData" class="w-100 form-control"></textarea>'
                                html += '</div>'
                                html += '<div class="col-4 ms-auto">'
                                    html += '<button type="button" class="w-100 btn btn-warning" onclick="window.app.importSave()">'
                                        html += '<span><i class="fas fa-fw fa-upload"></i></span>'
                                        html += '<span class="ms-1">' + i18next.t('btn_importSave') + '</span>'
                                    html += '</button>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
            
        html += '</div>'
        
        // Tabs bar
        //---
        let tabs = [
            { id:'factory', label:'tab_factory', img:'fas fa-industry', },
            { id:'scenarios', label:'tab_scenarios', img:'fas fa-th', },
            { id:'options', label:'tab_options', img:'fas fa-cog', },
        ]
        //---       
        html += '<div class="position-absolute" style="bottom:0; width:100%; height:58px;">'
            html += '<div class="h-100 container px-0 bg-light border-top border-dark">'
                html += '<div class="h-100 nav nav-tabs">'                
                    tabs.forEach(tab => {
                        html += '<div class="col col-md-2 col-lg-1 nav-item">'
                            html += '<button type="button" class="position-relative nav-link' + (data.selectedTabId == tab.id ? ' active' : '') + '" data-bs-toggle="tab" data-bs-target="#' + tab.id + '-tab-pane"role="tab" aria-controls="' + tab.id + '-tab-pane" onclick="window.app.doClick(\'selectTab\', { tabId:\'' + tab.id + '\' })">'
                                html += '<div class="text-center"><i class="fs-6 ' + tab.img + '"></i></div>'
                                html += '<div class="text-center small"><span>' + i18next.t(tab.label) + '</span></div>'
                            html += '</button>'
                        html += '</div>'
                    })
                html += '</div>'
            html += '</div>'
        html += '</div>'
        
    html += '</div>'
    //---
    html += '<div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">'
        html += TplToastExport()
        html += TplToastImportEmpty()
        html += TplToastImportCorrupted()
    html += '</div>'
    //---
    html += TplModalOffline()
    html += TplModalWipe()
    html += TplModalVictory()
    html += TplModalScenario()
    //---
    return html
}
//---
var TplItem = function(scenario, item) {
    //---
    let html = ''
    //---
    html += '<div class="col-12">'
        html += '<div class="row g-1">'
            html += '<div class="col-12">'
                html += '<div class="card card-body">'
                    html += '<div class="row gx-3 gy-2 align-items-center">'
                        if (item.unlocked) {
                            html += '<div class="col-12 col-md">'
                                html += '<div class="row g-2 align-items-center">'
                                    if (item.inputs) {
                                        html += '<div class="col-auto px-0">'
                                            html += '<button type="button" class="btn" data-bs-toggle="collapse" data-bs-target="#collapse' + item.id + '" aria-expanded="' + (item.collapsed ? 'false' : 'true') + '" aria-controls="collapse' + item.id + '" onclick="window.app.doClick(\'toggleCollapse\', { itemId:\'' + item.id + '\' })">'
                                                html += '<i class="fas fa-chevron-down"></i>'
                                            html += '</button>'
                                        html += '</div>'
                                    }
                                    html += '<div class="col-auto">'
                                        html += '<img src="' + scenario.img + item.name + '.png" width="24px" height="24px" data-bs-toggle="tooltip" data-bs-title="' + i18next.t(scenario.label + item.name) + '">'
                                    html += '</div>'
                                    html += '<div class="col-auto">'
                                        html += '<small class="opacity-50">x</small> <span id="itemCount-' + item.id + '"></span>'
                                        if (item.stack != Infinity) html += ' <small>/' + formatNumber(item.stack) + '</small>'
                                    html += '</div>'
                                    if (item.cat == 'machine') {
                                        html += '<div class="col-auto">'
                                            html += ' <span id="itemAvailableCount-' + item.id + '"></span>'
                                        html += '</div>'
                                    }
                                    html += '<div class="ms-auto col-auto text-end" style="width:65px;">'
                                        html += '<small id="itemRemainingTime-' + item.id + '"></small>'
                                        html += '<div class="progress mt-1" style="height:3px;">'
                                            html += '<div id="itemProgress-' + item.id + '" class="progress-bar bg-success" style="width:0%;"></div>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                            html += '<div class="col-12 col-md-auto">'
                                html += '<div class="row g-2 align-items-center justify-content-end">'
                                    html += '<div class="col-auto">'
                                        html += '<img src="' + scenario.img + item.machine + '.png" width="24px" height="24px" data-bs-toggle="tooltip" data-bs-title="' + i18next.t(scenario.label + item.machine) + '">'
                                    html += '</div>'
                                    html += '<div class="col-auto">'
                                        html += '<span><small class="opacity-50">x</small> <span id="itemMachineCount-' + item.id + '"></span></span>'
                                    html += '</div>'
                                    html += '<div class="col-auto">'
                                        html += '<select id="machineCountSelect-' + item.id + '" class="form-control form-control-sm" onchange="window.app.doClick(\'setMachineSelectCount\', { itemId:\'' + item.id + '\', count:this.value })">'
                                            html += '<option' + (item.selectMachineCount == '1' ? ' selected' : '') + '  value="1">1</option>'
                                            html += '<option' + (item.selectMachineCount == '5' ? ' selected' : '') + '  value="5">5</option>'
                                            html += '<option' + (item.selectMachineCount == '10' ? ' selected' : '') + '  value="10">10</option>'
                                            html += '<option' + (item.selectMachineCount == '100' ? ' selected' : '') + '  value="100">100</option>'
                                            html += '<option' + (item.selectMachineCount == 'max' ? ' selected' : '') + '  value="max">' + i18next.t('word-max') + '</option>'
                                        html += '</select>'
                                    html += '</div>'
                                    html += '<div class="col-auto">'
                                        html += '<button type="button" id="itemRemoveMachineBtn-' + item.id + '" class="btn btn-outline-danger" onclick="window.app.doClick(\'removeMachineCount\', { itemId:\'' + item.id + '\' })">'
                                            html += '<i class="fas fa-fw fa-minus-circle"></i>'
                                        html += '</button>'
                                    html += '</div>'
                                    html += '<div class="col-auto">'
                                        html += '<button type="button" id="itemAddMachineBtn-' + item.id + '" class="btn btn-outline-warning" onclick="window.app.doClick(\'addMachineCount\', { itemId:\'' + item.id + '\' })">'
                                            html += '<i class="fas fa-fw fa-plus-circle"></i>'
                                        html += '</button>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        }
                        else {
                            html += '<div class="col-auto">'
                                html += '<i class="fas fa-lock text-danger"></i>'
                            html += '</div>'
                            html += '<div class="col-auto me-auto">'
                                html += '<span>' + i18next.t(scenario.label + item.name) + '</span>'
                            html += '</div>'
                            for (let id in item.reqs) {
                                let reqItem = window.app.game.getItem(id)
                                if (reqItem.unlocked || window.app.screens['game'].showLocked) {
                                    html += '<div class="col-auto">'
                                        html += '<a href="#" onclick="window.app.doClick(\'selectItem\', { itemId:\'' + id + '\' })">' + i18next.t(scenario.label + id) + '</a>'
                                    html += '</div>'
                                }
                                else {
                                    html += '<div class="col-auto">'
                                        html += '<span>' + i18next.t(scenario.label + id) + '</span>'
                                    html += '</div>'
                                }
                            }
                        }
                    html += '</div>'
                html += '</div>'
            html += '</div>'
            if (item.unlocked && item.inputs) {
                html += '<div id="collapse' + item.id + '" class="collapse col-12' + (item.collapsed ? '' : ' show') + '">'
                    html += '<div class="row g-1">'
                        html += '<div class="col-auto d-flex justify-content-center" style="width:20px;">'
                            html += '<div class="border-start" style="height:100%;"></div>'
                        html += '</div>'
                        html += '<div class="col">'
                            html += '<div class="row g-1">'                
                                for (let id in item.inputs) {
                                    html += '<div class="position-relative col-12">'
                                        html += '<div class="row g-1">' 
                                            html += '<div class="position-absolute border-bottom" style="top:17.5px; left:-10px; width:10px;"></div>'
                                            let child = window.app.game.getItem(id)
                                            html += TplItem(scenario, child)
                                        html += '</div>'
                                    html += '</div>'
                                }
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            }
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
class ScreenGame {
    //---
    constructor() {
        //---
        this.selectedTabId = 'factory'
        this.selectedItemId = 'furnace'
        this.selectedMachineCount = '1'
        //---
        this.showLocked = false
        this.showCompleted = false
    }
    //---
    load(data) {
        //---
        if (data.selectedTabId != null) this.selectedTabId = data.selectedTabId
        if (data.selectedItemId != null) this.selectedItemId = data.selectedItemId
        if (data.selectedMachineCount != null) this.selectedMachineCount = data.selectedMachineCount
        //---
        if (data.showLocked != null) this.showLocked = data.showLocked
        if (data.showCompleted != null) this.showCompleted = data.showCompleted
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.selectedTabId = this.selectedTabId
        savedData.selectedItemId = this.selectedItemId
        savedData.selectedMachineCount = this.selectedMachineCount
        //---
        savedData.showLocked = this.showLocked
        savedData.showCompleted = this.showCompleted
        //---
        return savedData
    }
    //---
    init() {
        //---
        let node = document.getElementById('screen')
        node.innerHTML = TplScreenGame(this)
        //---
        this.displayFactoryTab()
        this.displayScenariosTab()
        //---
        let triggerTabList = document.querySelectorAll('[data-bs-toggle="tab"]')
        let tabList = [...triggerTabList].map(tabTriggerEl => new bootstrap.Tab(tabTriggerEl))
    }
    //---
    doClick(action, data) {
        //---
        if (action == 'selectTab') this.selectedTabId = data.tabId
        //---
        else if (action == 'openLeft') {
            //---
            let node = document.getElementById('left-pane')
            node.classList.add('open')
        }
        //---
        else if (action == 'closeLeft') {
            //---
            let node = document.getElementById('left-pane')
            node.classList.remove('open')
        }
        //---
        else if (action == 'selectItem') {
            //---
            let node = document.getElementById('left-pane')
            node.classList.remove('open')
            //---
            node = document.getElementById(this.selectedItemId + '-tab-pane')
            node.classList.remove('active')
            node.classList.remove('show')
            //---
            this.selectedItemId = data.itemId
            //---
            let triggerEl = document.querySelector('.nav.nav-pills button[data-bs-target="#' + this.selectedItemId + '-tab-pane"]')
            bootstrap.Tab.getInstance(triggerEl).show()
        }
        //---
        else if (action == 'toggleCollapse') {
            //---
            let item = window.app.game.getItem(data.itemId)
            item.collapsed = !item.collapsed
        }
        else if (action == 'toggleShowLocked') {
            //---
            this.showLocked = !this.showLocked
            this.displayFactoryTab()
        }
        else if (action == 'toggleShowCompleted') {
            //---
            this.showCompleted = !this.showCompleted
            this.displayFactoryTab()
        }
        //---
        else if (action == 'selectScenario') {
            //---
            window.app.newScenarioId = data.scenarioId
            window.app.showModal('modalScenario')
        }
        //---
        else if (action == 'setMachineSelectCount') window.app.game.setMachineSelectCount(data)
        else if (action == 'addMachineCount') window.app.game.addMachineCount(data.itemId)
        else if (action == 'removeMachineCount') window.app.game.removeMachineCount(data.itemId)
        //---
        else if (action == 'setAllMachineSelectCount') {
            //---
            this.selectMachineCount = data.count
            //---
            window.app.game.setMachineSelectCount(data)
            //---
            let node = document.getElementById('machineCountSelect-' + data.itemId)
            if (node) node.value = data.count
            //---
            let item = window.app.game.getItem(data.itemId)
            if (item.inputs) {
                for (let id in item.inputs) {
                    this.doClick('setAllMachineSelectCount', { itemId:id, count:data.count })
                }
            }
        }
        //---
        else if (action == 'unassignAll') {
            //---
            window.app.game.removeMachineCount(data.itemId)
            //---
            let item = window.app.game.getItem(data.itemId)
            if (item.inputs) {
                for (let id in item.inputs) {
                    this.doClick('unassignAll', { itemId:id })
                }
            }
        }
        //---
        else if (action == 'assignAll') {
            //---
            window.app.game.addMachineCount(data.itemId)
            //---
            let item = window.app.game.getItem(data.itemId)
            if (item.inputs) {
                for (let id in item.inputs) {
                    this.doClick('assignAll', { itemId:id })
                }
            }
        }
    }
    //---
    displayFactoryTab() {
        //---
        let scenario = window.app.game.currentScenario
        let items
        //---
        let html = ''
        html += '<div id="left-pane" class="bg-dark">'
            html += '<div class="scrollbar nav nav-pills flex-column flex-nowrap">'
                DATA.categories.forEach(cat => {
                    items = window.app.game.currentItems.filter(item => item.id != 'manual' && item.cat == cat && (this.showLocked ? true : item.unlocked) /*&& (this.showCompleted ? true : (item.stack && item.count < item.stack))*/)
                    if (items.length > 0) {
                        html += '<div class="w-100 p-3">'
                            html += '<div class="row g-1">'
                                html += '<div class="col-12">'
                                    html += '<span class="fs-6 text-white">' + i18next.t('cat-' + cat) + '</span>'
                                html += '</div>'
                                items.forEach(item => {
                                    html += '<div class="col-12 nav-item">'
                                        html += '<button class="w-100 position-relative nav-link' + (item.id == this.selectedItemId ? ' active' : '') + '" id="' + item.id + '-tab" data-bs-toggle="tab" data-bs-target="#' + item.id + '-tab-pane" type="button" role="tab" aria-controls="' + item.id + '-tab-pane" onclick="window.app.doClick(\'selectItem\', { itemId:\'' + item.id + '\' })">'
                                            html += '<div class="row gx-2 align-items-center">'
                                                if (item.unlocked) {
                                                    html += '<div class="col-auto">'
                                                        html += '<img src="' + scenario.img + item.name + '.png" width="24px" height="24px">'
                                                    html += '</div>'
                                                    html += '<div class="col text-start text-truncate">'
                                                        html += '<span>' + i18next.t(scenario.label + item.name) + '</span>'
                                                    html += '</div>'
                                                    if (item.cat == 'machine') {
                                                        html += '<div class="col-auto">'
                                                            html += '<span id="navItemAvailableCount-' + item.id + '"></span> '
                                                        html += '</div>'
                                                    }
                                                    if (item.stack && item.count >= item.stack) {
                                                        html += '<div class="col-auto">'
                                                            html += '<i class="fas fa-check-circle text-success"></i>'
                                                        html += '</div>'
                                                    }
                                                    else {
                                                        html += '<div class="col-auto">'
                                                            html += '<small class="opacity-50">x</small> <span id="navItemCount-' + item.id + '"></span>'
                                                            if (item.stack != Infinity) html += ' <small>/' + formatNumber(item.stack) + '</small>'
                                                        html += '</div>'
                                                    }
                                                }
                                                else {
                                                    html += '<div class="col-auto text-center" style="width:32px;">'
                                                        html += '<i class="fas fa-lock text-danger"></i>'
                                                    html += '</div>'
                                                    html += '<div class="col-auto me-auto">'
                                                        html += '<span>' + i18next.t(scenario.label + item.name) + '</span>'
                                                    html += '</div>'
                                                }
                                            html += '</div>'
                                        html += '</button>'
                                    html += '</div>'
                                })
                            html += '</div>'
                        html += '</div>'
                    }
                })
            html += '</div>'
            html += '<div class="d-lg-none position-absolute p-3" style="bottom:0; left:0;">'
                html += '<button class="btn btn-warning rounded-circle" onclick="window.app.doClick(\'closeLeft\')">'
                    html += '<i class="fas fa-arrow-left"></i>'
                html += '</button>'
            html += '</div>'
        html += '</div>'
        html += '<div id="right-pane" class="tab-content">'
            items = scenario.items.filter(item => item.id != 'manual')
            items.forEach(data => {
                let item = window.app.game.getItem(data.id)
                html += '<div class="scrollbar p-3 tab-pane fade' + (item.id == this.selectedItemId ? ' show active' : '') + '" id="' + item.id + '-tab-pane" role="tabpanel" aria-labelledby="' + item.id + '-tab" tabindex="0">'
                    html += '<div class="row g-1">'
                        /*
                        if (item.stack && item.count >= item.stack) {
                            html += '<div class="col-12">'
                                html += '<div class="pb-2">'
                                    html += '<div class="row gx-2 align-items-center">'
                                        html += '<div class="col-auto">'
                                            html += '<img src="' + scenario.img + item.name + '.png" width="24px" height="24px">'
                                        html += '</div>'
                                        html += '<div class="col text-truncate">'
                                            html += '<span class="fs-6 text-white">' + i18next.t(scenario.label + item.name) + '</span>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                            html += '<div class="col-12">'
                                html += '<i class="fas fa-check-circle text-success"></i> <span class="text-success">' + i18next.t('word-completed') + '</span>'
                            html += '</div>'
                        }
                        else*/ if (item.unlocked) {
                            html += '<div class="col-12">'
                                html += '<div class="pb-2">'
                                    html += '<div class="row gx-2 align-items-center">'
                                        html += '<div class="col-auto">'
                                            html += '<img src="' + scenario.img + item.name + '.png" width="24px" height="24px">'
                                        html += '</div>'
                                        html += '<div class="col text-truncate">'
                                            html += '<span class="fs-6 text-white">' + i18next.t(scenario.label + item.name) + '</span>'
                                        html += '</div>'
                                        html += '<div class="col-auto">'
                                            html += '<select class="form-control form-control-sm" onchange="window.app.doClick(\'setAllMachineSelectCount\', { itemId:\'' + item.id + '\', count:this.value })">'
                                                html += '<option' + (this.selectedMachineCount == '1' ? ' selected' : '') + '  value="1">1</option>'
                                                html += '<option' + (this.selectedMachineCount == '5' ? ' selected' : '') + '  value="5">5</option>'
                                                html += '<option' + (this.selectedMachineCount == '10' ? ' selected' : '') + '  value="10">10</option>'
                                                html += '<option' + (this.selectedMachineCount == '100' ? ' selected' : '') + '  value="100">100</option>'
                                                html += '<option' + (this.selectedMachineCount == 'max' ? ' selected' : '') + '  value="max">' + i18next.t('word-max') + '</option>'
                                            html += '</select>'
                                        html += '</div>'
                                        html += '<div class="col-auto">'
                                            html += '<button type="button" class="btn btn-outline-danger" onclick="window.app.doClick(\'unassignAll\', { itemId:\'' + item.id + '\' })">'
                                                html += '<i class="fas fa-fw fa-minus-circle"></i>'
                                                html += ' <span>' + i18next.t('word-unassign-all') + '</span>'
                                            html += '</button>'
                                        html += '</div>'
                                        html += '<div class="col-auto">'
                                            html += '<button type="button" class="btn btn-outline-warning" onclick="window.app.doClick(\'assignAll\', { itemId:\'' + item.id + '\' })">'
                                                html += '<i class="fas fa-fw fa-plus-circle"></i>'
                                                html += ' <span>' + i18next.t('word-assign-all') + '</span>'
                                            html += '</button>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                            html += TplItem(scenario, item)
                        }
                        else {
                            html += '<div class="col-12">'
                                html += '<div class="card card-body">'
                                    html += '<div class="row gx-3 align-items-center">'
                                        html += '<div class="col-auto">'
                                            html += '<i class="fas fa-lock text-danger"></i>'
                                        html += '</div>'
                                        html += '<div class="col-auto me-auto">'
                                            html += '<span>' + i18next.t(scenario.label + item.name) + '</span>'
                                        html += '</div>'
                                        for (let id in item.reqs) {
                                            let reqItem = window.app.game.getItem(id)
                                            if (reqItem.unlocked || window.app.screens['game'].showLocked) {
                                                html += '<div class="col-auto">'
                                                    html += '<a href="#" onclick="window.app.doClick(\'selectItem\', { itemId:\'' + id + '\' })">' + i18next.t(scenario.label + id) + '</a>'
                                                html += '</div>'
                                            }
                                            else {
                                                html += '<div class="col-auto">'
                                                    html += '<span>' + i18next.t(scenario.label + id) + '</span>'
                                                html += '</div>'
                                            }
                                        }
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        }
                    html += '</div>'
                html += '</div>'
            })
            html += '<div class="d-lg-none position-absolute p-3" style="bottom:0; left:0;">'
                html += '<button class="btn btn-warning rounded-circle" onclick="window.app.doClick(\'openLeft\')">'
                    html += '<i class="fas fa-arrow-right"></i>'
                html += '</button>'
            html += '</div>'
        html += '</div>'
        //---
        let node = window.document.getElementById('factory-tab-pane')
        node.innerHTML = html
        //---
        let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }
    //---
    displayScenariosTab() {
        //---
        let html = ''
        //---
        html += '<div class="p-3">'
            html += '<div class="row g-2">'
                html += '<div class="col-12">'
                    html += '<span class="fs-6">' + i18next.t('word-scenarios') + '</span>'
                html += '</div>'
                html += '<div class="col-12">'
                    html += '<small class="text-warning"><i class="fa-fw fas fa-exclamation-triangle"></i> ' + i18next.t('text_scenarioWarning') + '</small>'
                html += '</div>'
                //---
                let scenarios = window.app.game.scenarios
                scenarios.forEach(scenario => {
                    html += '<div class="col-12 col-lg-6 col-xl-4">'
                        html += '<button type="button" class="w-100 btn btn-light text-start' + (scenario.id == window.app.game.currentScenario.id ? ' border-warning' : '') + '" onclick="window.app.doClick(\'selectScenario\', { scenarioId:\'' + scenario.id + '\' })">'
                            html += '<div class="row g-1 justify-content-center">'
                                html += '<div class="col-12">'
                                    html += '<span class="h6 text-white">' + i18next.t(scenario.label + 'name') + '</span>'
                                html += '</div>'
                                html += '<div class="col-12 small">'
                                    html += '<span class="text-normal">' + i18next.t(scenario.label + 'desc') + '</span>'
                                html += '</div>'
                            html += '</div>'
                        html += '</button>'
                    html += '</div>'
                })
            html += '</div>'
        html += '</div>'
        //---
        let node = window.document.getElementById('scenarios-tab-pane')
        node.innerHTML = html
    }
    //---
    refreshItem(itemId) {
        //---
        let node, value, html = '', style = ''
        //---
        let item = window.app.game.getItem(itemId)
        if (item && item.unlocked) {
            
            // Item count
            //---
            node = document.getElementById('itemCount-' + item.id)
            if (node) {                    
                //---
                if (item.toComplete) value = item.totalCount
                else value = item.count
                //---                
                html = formatNumber(value)
                if (node.innerHTML != html) node.innerHTML = html
                //---
                style = 'text-normal'
                if (value > 0) style = 'text-white'
                if (node.className != style) node.className = style
            }
            
            // Item available count
            //---
            node = document.getElementById('itemAvailableCount-' + item.id)
            if (node) {
                //---
                value = window.app.game.getAvailableCount(item.id)
                //---
                html = formatNumber(value)
                if (node.innerHTML != html) node.innerHTML = html
                //---
                style = 'd-none'
                if (value > 0) style = 'badge text-bg-success'
                if (node.className != style) node.className = style
            }
            
            // Item machine count
            //---
            node = document.getElementById('itemMachineCount-' + item.id)
            if (node) {                    
                //---
                value = item.machineCount
                //---
                html = formatNumber(value)
                if (node.innerHTML != html) node.innerHTML = html
                //---
                style = 'text-normal'
                if (value > 0) style = 'text-white'
                if (node.className != style) node.className = style
            }
            
            // Item remove machine button
            //---
            node = document.getElementById('itemRemoveMachineBtn-' + item.id)
            if (node) {                    
                //---
                value = window.app.game.canRemoveMachineCount(item)
                //---
                style = 'btn btn-outline-danger'
                if (value == false) style += ' disabled'
                if (node.className != style) node.className = style
            }
            
            // Item add machine button
            //---
            node = document.getElementById('itemAddMachineBtn-' + item.id)
            if (node) {                    
                //---
                value = window.app.game.canAddMachineCount(item)
                //---
                style = 'btn btn-outline-warning'
                if (value == false) style += ' disabled'
                if (node.className != style) node.className = style
            }
            
            // Item remaining time
            //---
            node = document.getElementById('itemRemainingTime-' + item.id)
            if (node) {
                if (item.toComplete && item.stack != Infinity && item.totalCount >= item.stack) {
                    //---
                    html = i18next.t('word-done')
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    style = 'text-success'
                    if (node.className != style) node.className = style
                }
                else {
                    //---
                    value = item.remainingTime
                    //---
                    html = formatTime(value)
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    style = ''
                    if (item.status == 'wait' && item.machineCount > 0) style = 'text-danger'
                    else if (item.machineCount > 0) style = 'text-white'
                    if (node.className != style) node.className = style
                }
            }
            
            // Item progress
            //---
            node = document.getElementById('itemProgress-' + item.id)
            if (node) {
                //---
                value = item.getProgress() + '%'
                //---
                if (node.style.width != value) node.style.width = value
            }

            // Item stop button
            //---
            node = document.getElementById('itemStopBtn-' + item.id)
            if (node) {
                //---
                value = window.app.game.canStopLine(item)
                //---
                style = 'btn btn-outline-danger'
                if (value == false) style += ' disabled'
                if (node.className != style) node.className = style
            }
            
            // Item start button
            //---
            node = document.getElementById('itemStartBtn-' + item.id)
            if (node) {
                //---
                value = window.app.game.canStartLine(item)
                //---
                style = 'btn btn-outline-warning'
                if (value == false) style += ' disabled'
                if (node.className != style) node.className = style
            }
            
            //---
            if (item.inputs) {
                for (let id in item.inputs) {
                    this.refreshItem(id)
                }
            }
        }
    }
    //---
    refresh() {
        //---
        if (this.selectedTabId == 'factory') {
            //---
            let node, value, html = '', style = ''

            //---
            let items = window.app.game.currentItems.filter(item => item.unlocked)
            items.forEach(item => {
                
                // Nav item count
                //---
                node = document.getElementById('navItemCount-' + item.id)
                if (node) {                    
                    //---
                    value = item.count
                    //---
                    html = formatNumber(value)
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    style = 'opacity-50'
                    if (value > 0) style = 'fw-bold'
                    if (node.className != style) node.className = style
                }
                
                // Nav item available count
                //---
                node = document.getElementById('navItemAvailableCount-' + item.id)
                if (node) {
                    //---
                    value = window.app.game.getAvailableCount(item.id)
                    //---
                    html = formatNumber(value)
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    style = 'd-none'
                    if (value > 0) style = 'badge text-bg-success'
                    if (node.className != style) node.className = style
                }
            })
            
            //---
            this.refreshItem(this.selectedItemId)
        }
    }
}
