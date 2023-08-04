//---
var DATA = {
    //---
    categories:[ 'objective','machine','tech' ],
    //---
    scenarios:[
        //---
        {   id:'fto1', img:'img/fto1/', label:'fto1-', victoryReqs:{ 'mission-satellite':1 },
            //---
            recipes:[
            
                // Mission #1
                //---
                {	name:'mission-furnace',	machine:'manual',	time:0.5,	output:1,	inputs:{ 'stone':5 }	},
                //---
                {	name:'manual'	},
                //---
                {	name:'stone',	machine:'miner',	time:1,	output:1 },	

                // Mission #2
                //---
                {	name:'mission-assembler',	reqs:{ 'mission-furnace':1 },	machine:'manual',	time:7,	output:1,	inputs:{ 'iron-plate':22, 'copper-plate':5 }	},
                //---
                {	name:'furnace',	reqs:{ 'mission-furnace':1 },	machine:'manual',	time:0.5,	output:1,	inputs:{ 'stone':5 }	},
                //---
                {	name:'copper',	machine:'miner',	time:1,	output:1 },	
                {	name:'copper-plate',	machine:'furnace',	time:3.2,	output:1,	inputs:{ 'copper':1 }	},
                {	name:'iron',	machine:'miner',	time:1,	output:1 },	
                {	name:'iron-plate',	machine:'furnace',	time:3.2,	output:1,	inputs:{ 'iron':1 }	},

                // Mission #3
                //---
                {	name:'mission-lab',	reqs:{ 'mission-assembler':1 },	machine:'manual',	time:2,	output:1,	inputs:{ 'circuit':10, 'gear':10, 'belt':4 }	},
                //---
                {	name:'assembler',	reqs:{ 'mission-assembler':1 },	machine:'manual',	time:7,	output:1,	inputs:{ 'iron-plate':22, 'copper-plate':5 }	},
                {	name:'miner',	reqs:{ 'mission-assembler':1 },	machine:'manual',	time:5,	output:1,	inputs:{ 'iron-plate':6, 'gear':6, 'stone':10 }	},
                //---
                {	name:'belt',	machine:'assembler',	time:0.5,	output:2,	inputs:{ 'iron-plate':1, 'gear':1 }	},
                {	name:'cable',	machine:'assembler',	time:0.5,	output:2,	inputs:{ 'copper-plate':1 }	},
                {	name:'circuit',	machine:'assembler',	time:0.5,	output:2,	inputs:{ 'copper-plate':1, 'cable':3 }	},
                {	name:'gear',	machine:'assembler',	time:0.5,	output:1,	inputs:{ 'iron-plate':2 }	},

                // Mission #4
                //---
                {	name:'mission-car',	reqs:{ 'mission-lab':1 },	machine:'assembler',	time:2,	output:1,	inputs:{ 'engine':8, 'iron-plate':20, 'steel':5 }	},
                //---
                {	name:'lab',	reqs:{ 'mission-lab':1 },	machine:'manual',	time:2,	output:1,	inputs:{ 'circuit':10, 'gear':10, 'belt':4 }	},
                //---
                {	name:'engine',	reqs:{ 'engine-tech':1 },	machine:'assembler',	time:10,	output:1,	inputs:{ 'pipe':2, 'gear':1, 'steel':1 }	},
                {	name:'green-pack',	reqs:{ 'green-tech':1 },	machine:'assembler',	time:6,	output:1,	inputs:{ 'inserter':1, 'belt':1	}	},
                {	name:'inserter',	machine:'assembler',	time:0.5,	output:1,	inputs:{ 'iron-plate':1, 'gear':1, 'circuit':1 }	},
                {	name:'pipe',	machine:'assembler',	time:0.5,	output:1,	inputs:{ 'iron-plate':1 }	},
                {	name:'red-pack',	reqs:{ 'mission-lab':1 },	machine:'assembler',	time:5,	output:1,	inputs:{ 'copper-plate':1, 'gear':1	}	},
                {	name:'steel',	reqs:{ 'steel-tech':1 },	machine:'furnace',	time:16,	output:1,	inputs:{ 'iron-plate':5 }	},
                //---
                {	name:'engine-tech',	reqs:{ 'mission-lab':1 },	machine:'lab',	time:15*100,	output:1,	inputs:{ 'red-pack':100, 'green-pack':100 }	},
                {	name:'green-tech',	reqs:{ 'mission-lab':1 },	machine:'lab',	time:5*75,	output:1,	inputs:{ 'red-pack':75 }	},
                {	name:'steel-tech',	reqs:{ 'mission-lab':1 },	machine:'lab',	time:5*50,	output:1,	inputs:{ 'red-pack':50 }	},

                // Mission #5
                //---
                {	name:'mission-train',	reqs:{ 'mission-car':1 },	machine:'assembler',	time:2,	output:1,	inputs:{ 'locomotive':1, 'cargo-wagon':1, 'fluid-wagon':1, 'rail':250, 'train-stop':10 }	},
                //---
                {	name:'cargo-wagon',	reqs:{ 'railway':1 },	machine:'assembler',	time:1,	output:1,	inputs:{ 'gear':10, 'iron-plate':20, 'steel':20 }	},
                {	name:'fluid-wagon',	reqs:{ 'fluid-wagon-tech':1 },	machine:'assembler',	time:4.5,	output:1,	inputs:{ 'gear':10, 'steel':16, 'pipe':8, 'storage-tank':1 }	},
                {	name:'locomotive',	reqs:{ 'railway':1 },	machine:'assembler',	time:4,	output:1,	inputs:{ 'circuit':10, 'engine':20, 'steel':30 }	},
                {	name:'rail',	reqs:{ 'railway':1 },	machine:'assembler',	time:0.5,	output:2,	inputs:{ 'stone':1, 'stick':1, 'steel':1 }	},
                {	name:'stick',	machine:'assembler',	time:0.5,	output:2,	inputs:{ 'iron-plate':1 }	},
                {	name:'storage-tank',	reqs:{ 'fluid-handling':1 },	machine:'assembler',	time:3,	output:1,	inputs:{ 'iron-plate':20, 'steel':5 }	},
                {	name:'train-stop',	reqs:{ 'train-stop-tech':1 },	machine:'assembler',	time:0.5,	output:1,	inputs:{ 'circuit':5, 'iron-plate':6, 'stick':6, 'steel':3 }	},
                //---
                {	name:'fluid-handling',	reqs:{ 'mission-car':1 },	machine:'lab',	time:15*50,	output:1,	inputs:{ 'red-pack':50, 'green-pack':50 }	},
                {	name:'fluid-wagon-tech',	reqs:{ 'mission-car':1 },	machine:'lab',	time:30*200,	output:1,	inputs:{ 'red-pack':200, 'green-pack':200 }	},
                {	name:'railway',	reqs:{ 'mission-car':1 },	machine:'lab',	time:30*75,	output:1,	inputs:{ 'red-pack':75, 'green-pack':75 }	},
                {	name:'train-stop-tech',	reqs:{ 'mission-car':1 },	machine:'lab',	time:30*75,	output:1,	inputs:{ 'red-pack':75, 'green-pack':75 }	},

                // Mission #6
                //---
                {	name:'mission-defense',	reqs:{ 'mission-train':1 },	machine:'assembler',	time:5,	output:1,	inputs:{ 'wall':250, 'gun-turret':10, 'gate':25, 'land-mine':50, 'tank':1, 'flamethrower':1, 'submachine-gun':1 }	},
                //---
                {	name:'chemical-plant',	reqs:{ 'oil-tech':1 },	machine:'manual',	time:5,	output:1,	inputs:{ 'pipe':5, 'gear':5, 'steel':5, 'circuit':5 }	},
                {	name:'pump',	reqs:{ 'oil-tech':1 },	machine:'manual',	time:0.5,	output:1,	inputs:{ 'pipe':1, 'gear':6, 'circuit':2 }	},
                {	name:'pumpjack',	reqs:{ 'oil-tech':1 },	machine:'manual',	time:5,	output:1,	inputs:{ 'pipe':10, 'gear':10, 'steel':5, 'circuit':5 }	},
                {	name:'refinery',	reqs:{ 'oil-tech':1 },	machine:'manual',	time:8,	output:1,	inputs:{ 'brick':10, 'pipe':10, 'gear':10, 'steel':15, 'circuit':10 }	},                
                //---
                {	name:'blue-pack',	reqs:{ 'blue-tech':1 },	machine:'assembler',	time:24,	output:2,	inputs:{ 'circuit-2':3, 'engine':2, 'sulfur':1	}	},
                {	name:'brick',	machine:'furnace',	time:3.2,	output:1,	inputs:{ 'stone':2 }	},
                {	name:'circuit-2',	reqs:{ 'electronics-2':1 },	machine:'assembler',	time:6,	output:1,	inputs:{ 'cable':4, 'circuit':2, 'plastic':2 }	},
                {	name:'coal',	reqs:{ 'oil-tech':1 },	machine:'miner',	time:1,	output:1 },	
                {	name:'explosives',	reqs:{ 'explosives-tech':1 },	machine:'chemical-plant',	time:4,	output:2,	inputs:{ 'coal':1, 'sulfur':1, 'water':10 }	},
                {	name:'flamethrower',	reqs:{ 'flamethrower-tech':1 },	machine:'assembler',	time:10,	output:1,	inputs:{ 'gear':10, 'steel':5 }	},
                {	name:'gate',	reqs:{ 'gate-tech':1 },	machine:'assembler',	time:1,	output:1,	inputs:{ 'circuit':2, 'steel':2, 'brick':5 }	},
                {	name:'grenade',	reqs:{ 'military-2':1 },	machine:'assembler',	time:8,	output:1,	inputs:{ 'coal':10, 'iron-plate':5 }	},
                {	name:'grey-pack',	reqs:{ 'grey-tech':1 },	machine:'assembler',	time:10,	output:2,	inputs:{ 'magazine-2':1, 'grenade':1, 'wall':2 }	},
                {	name:'gun-turret',	reqs:{ 'gun-turret-tech':1 },	machine:'assembler',	time:8,	output:1,	inputs:{ 'copper-plate':10, 'gear':10, 'steel':20 }	},
                {	name:'land-mine',	reqs:{ 'land-mine-tech':1 },	machine:'assembler',	time:5,	output:1,	inputs:{ 'explosives':2, 'steel':1 }	},
                {	name:'magazine',	machine:'assembler',	time:1,	output:1,	inputs:{ 'iron-plate':4 }	},
                {	name:'magazine-2',	reqs:{ 'military-2':1 },	machine:'assembler',	time:3,	output:1,	inputs:{ 'copper-plate':5, 'magazine':1, 'steel':1 }	},
                {	name:'oil',	reqs:{ 'oil-tech':1 },	machine:'pumpjack',	time:1,	output:1 },	
                {	name:'petrol',	reqs:{ 'oil-tech':1 },	machine:'refinery',	time:1,	output:9,	inputs:{ 'oil':20 }	},
                {	name:'plastic',	reqs:{ 'plastics':1 },	machine:'chemical-plant',	time:1,	output:1,	inputs:{ 'coal':1, 'petrol':20 }	},
                {	name:'submachine-gun',	reqs:{ 'military':1 },	machine:'assembler',	time:10,	output:1,	inputs:{ 'copper-plate':5, 'gear':10, 'iron-plate':10 }	},
                {	name:'sulfur',	reqs:{ 'sulfur-tech':1 },	machine:'chemical-plant',	time:1,	output:2,	inputs:{ 'water':30, 'petrol':30 }	},
                {	name:'tank',	reqs:{ 'tank-tech':1 },	machine:'assembler',	time:5,	output:1,	inputs:{ 'circuit-2':10, 'engine':32, 'gear':15, 'steel':50 }	},
                {	name:'wall',	reqs:{ 'wall-tech':1 },	machine:'assembler',	time:0.5,	output:1,	inputs:{ 'brick':5 } },	
                {	name:'water',	reqs:{ 'oil-tech':1 },	machine:'pump',	time:1,	output:1 },	
                //---
                {	name:'blue-tech',	reqs:{ 'mission-train':1 },	machine:'lab',	time:10*75,	output:1,	inputs:{ 'red-pack':75, 'green-pack':75 }	},
                {	name:'electronics-2',	reqs:{ 'mission-train':1 },	machine:'lab',	time:15*200,	output:1,	inputs:{ 'red-pack':200, 'green-pack':200 }	},
                {	name:'explosives-tech',	reqs:{ 'mission-train':1 },	machine:'lab',	time:15*100,	output:1,	inputs:{ 'red-pack':100, 'green-pack':100 }	},
                {	name:'flamethrower-tech',	reqs:{ 'mission-train':1 },	machine:'lab',	time:30*50,	output:1,	inputs:{ 'red-pack':50, 'green-pack':50, 'grey-pack':50 }	},
                {	name:'gate-tech',	reqs:{ 'mission-train':1 },	machine:'lab',	time:30*100,	output:1,	inputs:{ 'red-pack':100, 'green-pack':100 }	},
                {	name:'grey-tech',	reqs:{ 'mission-train':1 },	machine:'lab',	time:15*30,	output:1,	inputs:{ 'red-pack':30, 'green-pack':30 }	},
                {	name:'gun-turret-tech',	reqs:{ 'mission-train':1 },	machine:'lab',	time:10*10,	output:1,	inputs:{ 'red-pack':10 }	},
                {	name:'land-mine-tech',	reqs:{ 'mission-train':1 },	machine:'lab',	time:30*100,	output:1,	inputs:{ 'red-pack':100, 'green-pack':100, 'grey-pack':100 }	},
                {	name:'military',	reqs:{ 'mission-train':1 },	machine:'lab',	time:15*10,	output:1,	inputs:{ 'red-pack':10 }	},
                {	name:'military-2',	reqs:{ 'mission-train':1 },	machine:'lab',	time:15*20,	output:1,	inputs:{ 'red-pack':20, 'green-pack':20 }	},
                {	name:'oil-tech',	reqs:{ 'mission-train':1 },	machine:'lab',	time:30*100,	output:1,	inputs:{ 'red-pack':100, 'green-pack':100 }	},
                {	name:'plastics',	reqs:{ 'mission-train':1 },	machine:'lab',	time:30*200,	output:1,	inputs:{ 'red-pack':200, 'green-pack':200 }	},
                {	name:'sulfur-tech',	reqs:{ 'mission-train':1 },	machine:'lab',	time:30*150,	output:1,	inputs:{ 'red-pack':150, 'green-pack':150 }	},
                {	name:'tank-tech',	reqs:{ 'mission-train':1 },	machine:'lab',	time:30*250,	output:1,	inputs:{ 'red-pack':250, 'green-pack':250, 'grey-pack':250, 'blue-pack':250 }	},
                {	name:'wall-tech',	reqs:{ 'mission-train':1 },	machine:'lab',	time:10*10,	output:1,	inputs:{ 'red-pack':10 }	},

                // Mission #7
                //---
                {	name:'mission-equipment',	reqs:{ 'mission-defense':1 },	machine:'assembler',	time:5,	output:1,	inputs:{ 'armor':1, 'personal-roboport':1, 'nightvision':1 }	},
                //---
                {	name:'assembler-2',	reqs:{ 'automation-2':1 },	machine:'manual',	time:8,	output:1,	inputs:{ 'gear':5, 'steel':2, 'circuit':3, 'iron-plate':22, 'copper-plate':5 }	},
                //---
                {	name:'armor',	reqs:{ 'armor-tech':1 },	machine:'assembler',	time:25,	output:1,	inputs:{ 'engine-2':40, 'low-density-structure':30, 'circuit-3':60 }	},
                {	name:'battery',	reqs:{ 'battery-tech':1 },	machine:'chemical-plant',	time:4,	output:1,	inputs:{ 'iron-plate':1, 'copper-plate':1, 'sulfuric-acid':20 }	},
                {	name:'circuit-3',	reqs:{ 'electronics-3':1 },	machine:'assembler-2',	time:10,	output:1,	inputs:{ 'circuit':20, 'circuit-2':2, 'sulfuric-acid':5 }	},
                {	name:'engine-2',	reqs:{ 'engine-tech-2':1 },	machine:'assembler-2',	time:10,	output:1,	inputs:{ 'engine':1, 'circuit':2, 'lubricant':15 }	},
                {	name:'heavy-oil',	reqs:{ 'mission-defense':1 },	machine:'refinery',	time:1,	output:5,	inputs:{ 'water':10, 'oil':20 }	},
                {	name:'low-density-structure',	reqs:{ 'low-density-structure-tech':1 },	machine:'assembler',	time:20,	output:1,	inputs:{ 'copper-plate':20, 'steel':2, 'plastic':5 }	},
                {	name:'lubricant',	reqs:{ 'lubricant-tech':1 },	machine:'chemical-plant',	time:1,	output:10,	inputs:{ 'heavy-oil':10 }	},
                {	name:'nightvision',	reqs:{ 'nightvision-tech':1 },	machine:'assembler',	time:10,	output:1,	inputs:{ 'circuit-2':5, 'steel':10 }	},
                {	name:'personal-roboport',	reqs:{ 'personal-roboport-tech':1 },	machine:'assembler',	time:70,	output:1,	inputs:{ 'circuit-2':50, 'battery':225, 'gear':200, 'steel':100, 'circuit-3':100, 'low-density-structure':20 }	},
                {	name:'robot',	reqs:{ 'robotics':1 },	machine:'assembler',	time:20,	output:1,	inputs:{ 'steel':1, 'circuit':3, 'battery':2, 'engine-2':1 }	},
                {	name:'sulfuric-acid',	reqs:{ 'mission-defense':1 },	machine:'chemical-plant',	time:1,	output:50,	inputs:{ 'water':100, 'iron-plate':1, 'sulfur':5 }	},
                {	name:'yellow-pack',	reqs:{ 'yellow-tech':1 },	machine:'assembler',	time:21,	output:3,	inputs:{ 'robot':1, 'low-density-structure':3, 'circuit-3':2	}	},
                //---
                {	name:'armor-tech',	reqs:{ 'mission-defense':1 },	machine:'lab',	time:30*400,	output:1,	inputs:{ 'red-pack':400, 'green-pack':400, 'grey-pack':400, 'blue-pack':400, 'yellow-pack':400 }	},
                {	name:'automation-2',	reqs:{ 'mission-defense':1 },	machine:'lab',	time:15*40,	output:1,	inputs:{ 'red-pack':30, 'green-pack':30 }	},
                {	name:'battery-tech',	reqs:{ 'mission-defense':1 },	machine:'lab',	time:30*150,	output:1,	inputs:{ 'red-pack':150, 'green-pack':150 }	},
                {	name:'electronics-3',	reqs:{ 'mission-defense':1 },	machine:'lab',	time:30*300,	output:1,	inputs:{ 'red-pack':300, 'green-pack':300, 'blue-pack':300 }	},
                {	name:'engine-tech-2',	reqs:{ 'mission-defense':1 },	machine:'lab',	time:30*50,	output:1,	inputs:{ 'red-pack':50, 'green-pack':50, 'blue-pack':50 }	},
                {	name:'low-density-structure-tech',	reqs:{ 'mission-defense':1 },	machine:'lab',	time:45*300,	output:1,	inputs:{ 'red-pack':300, 'green-pack':300, 'blue-pack':300 }	},
                {	name:'lubricant-tech',	reqs:{ 'mission-defense':1 },	machine:'lab',	time:30*50,	output:1,	inputs:{ 'red-pack':50, 'green-pack':50, 'blue-pack':50 }	},
                {	name:'nightvision-tech',	reqs:{ 'mission-defense':1 },	machine:'lab',	time:15*50,	output:1,	inputs:{ 'red-pack':50, 'green-pack':50 }	},
                {	name:'personal-roboport-tech',	reqs:{ 'mission-defense':1 },	machine:'lab',	time:30*250,	output:1,	inputs:{ 'red-pack':250, 'green-pack':250, 'blue-pack':250, 'yellow-pack':250 }	},
                {	name:'robotics',	reqs:{ 'mission-defense':1 },	machine:'lab',	time:30*75,	output:1,	inputs:{ 'red-pack':75, 'green-pack':75, 'blue-pack':75 }	},
                {	name:'yellow-tech',	reqs:{ 'mission-defense':1 },	machine:'lab',	time:30*100,	output:1,	inputs:{ 'red-pack':100, 'green-pack':100, 'blue-pack':100 }	},

                /*
                {	name:'mission-spidertron',	reqs:{ 'mission-equipment':1 },	machine:'assembler',	time:10,	output:1,	inputs:{ 'exoskeleton':4, 'fusion-reactor':2, 'rocket-launcher':4, 'rocket-control-unit':16, 'low-density-structure':150, 'radar':2 }	},
                {	name:'mission-rocket',	reqs:{ 'mission-spidertron':1 },	machine:'rocket-silo',	time:3,	output:1,	inputs:{ 'rocket-fuel':10, 'rocket-control-unit':10, 'low-density-structure':10 }	},
                {	name:'mission-satellite',	reqs:{ 'mission-rocket':1 },	machine:'assembler-3',	time:5,	output:1,	inputs:{ 'accumulator':100, 'low-density-structure':100, 'circuit-3':100, 'radar':5, 'rocket-fuel':50, 'solar-panel':100 }	},
                //---
                {	name:'portable-fusion-reactor',	reqs:{ 'portable-fusion-reactor-tech':1 },	machine:'assembler',	time:10,	output:1,	inputs:{ 'circuit-3':200, 'low-density-structure':50 }	},
                {	name:'accumulator',	reqs:{ 'accumulator-tech':1 },	machine:'assembler',	time:10,	output:1,	inputs:{ 'iron-plate':2, 'battery':5 }	},
                {	name:'concrete',	reqs:{ 'concrete-tech':1 },	machine:'assembler-2',	time:10,	output:10,	inputs:{ 'water':100, 'iron':1, 'brick':5 }	},
                {	name:'exoskeleton',	reqs:{ 'exoskeleton-tech':1 },	machine:'assembler',	time:10,	output:1,	inputs:{ 'circuit-3':10, 'engine-2':30, 'steel':20 }	},
                {	name:'furnace-3',	reqs:{ 'material-2':1 },	machine:'assembler',	time:5,	output:1,	inputs:{ 'circuit-2':5, 'steel':10, 'brick':10 }	},
                {	name:'light-oil',	reqs:{ 'oil-tech':1 },	machine:'chemical-plant',	time:1,	output:15,	inputs:{ 'water':15, 'heavy-oil':20 }	},
                {	name:'productivity-module',	reqs:{ 'productivity':1 },	machine:'assembler',	time:15,	output:1,	inputs:{ 'circuit':5, 'circuit-2':5 }	},
                {	name:'purple-pack',	reqs:{ 'purple-tech':1 },	machine:'assembler',	time:21,	output:3,	inputs:{ 'furnace-3':1, 'productivity-module':1, 'rail':30	}	},
                {	name:'radar',	machine:'assembler',	time:0.5,	output:1,	inputs:{ 'iron-plate':10, 'gear':5, 'circuit':5 }	},
                {	name:'rocket-control-unit',	reqs:{ 'rocket-control-unit-tech':1 },	machine:'assembler',	time:30,	output:1,	inputs:{ 'speed-module':1, 'circuit-3':1 }	},
                {	name:'rocket-fuel',	reqs:{ 'rocket-fuel-tech':1 },	machine:'assembler-2',	time:30,	output:1,	inputs:{ 'solid-fuel':10, 'light-oil':10 }	},
                {	name:'rocket-launcher',	reqs:{ 'rocketry':1 },	machine:'assembler',	time:10,	inputs:{ 'iron-plate':5, 'gear':5, 'circuit':5 }	},
                {	name:'solar-panel',	reqs:{ 'solar-energy':1 },	machine:'assembler',	time:10,	output:1,	inputs:{ 'copper-plate':5, 'steel':5, 'circuit':15 }	},
                {	name:'solid-fuel',	reqs:{ 'oil-tech':1, 'oil-tech-2':1 },	machine:'chemical-plant',	time:2,	output:1,	inputs:{ 'light-oil':10 }	},
                {	name:'speed-module',	reqs:{ 'speed':1 },	machine:'assembler',	time:15,	output:1,	inputs:{ 'circuit':5, 'circuit-2':5 }	},
                //---
                {	name:'assembler-3',	reqs:{ 'automation-3':1 },	machine:'manual',	time:12,	output:1,	inputs:{ 'speed-module':4, 'gear':10, 'steel':4, 'circuit':6, 'iron-plate':44, 'copper-plate':10 }	},
                {	name:'rocket-silo',	reqs:{ 'rocket-tech':1 },	machine:'manual',	time:30,	output:1,	inputs:{ 'pipe':100, 'steel':1000, 'concrete':1000, 'circuit-3':200, 'engine-2':200 }	},
                //---
                {	name:'portable-fusion-reactor-tech',	reqs:{ 'mission-defense':1 },	machine:'lab',	time:30*200,	output:1,	inputs:{ 'red-pack':200, 'green-pack':200, 'grey-pack':200, 'blue-pack':200, 'yellow-pack':200 }	},
                {	name:'accumulator-tech',	reqs:{ 'mission-rocket':1 },	machine:'lab',	time:30*150,	output:1,	inputs:{ 'red-pack':150, 'green-pack':150 }	},
                {	name:'automation-3',	reqs:{ 'purple-tech':1, 'speed':1 },	machine:'lab',	time:60*150,	output:1,	inputs:{ 'red-pack':150, 'green-pack':150, 'blue-pack':150, 'purple-pack':150 }	},
                {	name:'concrete-tech',	reqs:{ 'automation-2':1 },	machine:'lab',	time:30*250,	output:1,	inputs:{ 'red-pack':250, 'green-pack':250 }	},
                {	name:'exoskeleton-tech',	reqs:{ 'electronics-3':1, 'engine-tech-2':1 },	machine:'lab',	time:30*50,	output:1,	inputs:{ 'red-pack':50, 'green-pack':50, 'blue-pack':50 }	},
                {	name:'flammables',	reqs:{ 'oil-tech':1 },	machine:'lab',	time:30*50,	output:1,	inputs:{ 'red-pack':50, 'green-pack':50 }	},
                {	name:'material-2',	reqs:{ 'mission-rocket':1 },	machine:'lab',	time:30*250,	output:1,	inputs:{ 'red-pack':250, 'green-pack':250, 'blue-pack':250 }	},
                {	name:'military-3',	reqs:{ 'grey-tech':1 },	machine:'lab',	time:30*100,	output:1,	inputs:{ 'red-pack':100, 'green-pack':100, 'grey-pack':100, 'blue-pack':100 }	},
                {	name:'military-4',	reqs:{ 'yellow-tech':1 },	machine:'lab',	time:45*150,	output:1,	inputs:{ 'red-pack':150, 'green-pack':150, 'grey-pack':150, 'blue-pack':150, 'yellow-pack':150 }	},
                {	name:'oil-tech-2',	reqs:{ 'mission-equipment':1 },	machine:'lab',	time:30*75,	output:1,	inputs:{ 'red-pack':75, 'green-pack':75, 'blue-pack':75 }	},
                {	name:'productivity',	reqs:{ 'electronics-2':1 },	machine:'lab',	time:30*50,	output:1,	inputs:{ 'red-pack':50, 'green-pack':50 }	},
                {	name:'purple-tech',	reqs:{ 'material-2':1, 'productivity':1, 'railway':1 },	machine:'lab',	time:30*100,	output:1,	inputs:{ 'red-pack':100, 'green-pack':100, 'blue-pack':100 }	},
                {	name:'rocket-control-unit-tech',	reqs:{ 'speed':1, 'yellow-tech':1 },	machine:'lab',	time:45*300,	output:1,	inputs:{ 'red-pack':300, 'green-pack':300, 'blue-pack':300, 'yellow-pack':300 }	},
                {	name:'rocket-tech',	reqs:{ 'concrete-tech':1, 'rocket-control-unit-tech':1, 'rocket-fuel-tech':1 },	machine:'lab',	time:60*1000,	output:1,	inputs:{ 'red-pack':1000, 'green-pack':1000, 'blue-pack':1000, 'purple-pack':1000, 'yellow-pack':1000 }	},
                {	name:'rocket-fuel-tech',	reqs:{ 'flammables':1, 'oil-tech-2':1 },	machine:'lab',	time:45*300,	output:1,	inputs:{ 'red-pack':300, 'green-pack':300, 'blue-pack':300 }	},
                {	name:'rocketry',	reqs:{ 'flammables':1, 'explosives-tech':1, 'green-tech':1 },	machine:'lab',	time:15*120,	output:1,	inputs:{ 'red-pack':120, 'green-pack':120, 'grey-pack':120 }	},
                {	name:'solar-energy',	reqs:{ 'mission-rocket':1 },	machine:'lab',	time:30*250,	output:1,	inputs:{ 'red-pack':250, 'green-pack':250 }	},
                {	name:'speed',	reqs:{ 'electronics-2':1 },	machine:'lab',	time:30*50,	output:1,	inputs:{ 'red-pack':50, 'green-pack':50 }	},
                */
            ],
            //---
            items:[
                
                // Objectives
                //---
                {	id:'mission-furnace',	cat:'objective',	recipeName:'mission-furnace',	stack:1,	toComplete:true,	hasUnlocks:true,	desc:true	},
                {	id:'mission-assembler',	cat:'objective',	recipeName:'mission-assembler',	stack:1,	toComplete:true,	hasUnlocks:true,	desc:true	},
                {	id:'mission-lab',	cat:'objective',	recipeName:'mission-lab',	stack:1,	toComplete:true,	hasUnlocks:true,	desc:true	},
                {	id:'mission-car',	cat:'objective',	recipeName:'mission-car',	stack:1,	toComplete:true,	hasUnlocks:true,	desc:true	},
                {	id:'mission-train',	cat:'objective',	recipeName:'mission-train',	stack:1,	toComplete:true,	hasUnlocks:true,	desc:true	},
                {	id:'mission-defense',	cat:'objective',	recipeName:'mission-defense',	stack:1,	toComplete:true,	hasUnlocks:true,	desc:true	},
                {	id:'mission-equipment',	cat:'objective',	recipeName:'mission-equipment',	stack:1,	toComplete:true,	hasUnlocks:true,	desc:true	},
                //{	id:'mission-spidertron',	cat:'objective',	recipeName:'mission-spidertron',	stack:1,	toComplete:true,	hasUnlocks:true,	desc:true	},
                //{	id:'mission-rocket',	cat:'objective',	recipeName:'mission-rocket',	stack:100,	toComplete:true,	hasUnlocks:true,	desc:true	},
                //{	id:'mission-satellite',	cat:'objective',	recipeName:'mission-satellite',	stack:1,	toComplete:true,	hasUnlocks:true,	desc:true	},
                
                // Machines
                //---
                {	id:'manual',	cat:'machine',	recipeName:'manual',	count:1	},
                {	id:'furnace',	cat:'machine',	recipeName:'furnace',	count:1,	hasUnlocks:true	},
                {	id:'assembler',	cat:'machine',	recipeName:'assembler',	count:1,	hasUnlocks:true	},
                {	id:'miner',	cat:'machine',	recipeName:'miner',	count:1	},
                {	id:'lab',	cat:'machine',	recipeName:'lab',	count:1,	hasUnlocks:true	},
                {	id:'pump',	cat:'machine',	recipeName:'pump'	},
                {	id:'pumpjack',	cat:'machine',	recipeName:'pumpjack'	},
                {	id:'refinery',	cat:'machine',	recipeName:'refinery'	},
                {	id:'chemical-plant',	cat:'machine',	recipeName:'chemical-plant'	},
                {	id:'assembler-2',	cat:'machine',	recipeName:'assembler-2'	},
                //{	id:'assembler-3',	cat:'machine',	recipeName:'assembler-3'	},
                //{	id:'rocket-silo',	cat:'machine',	recipeName:'rocket-silo'	},

                // Techs
                //---
                {	id:'green-tech',	cat:'tech',	recipeName:'green-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'engine-tech',	cat:'tech',	recipeName:'engine-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'steel-tech',	cat:'tech',	recipeName:'steel-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                //---
                {	id:'fluid-handling',	cat:'tech',	recipeName:'fluid-handling',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'fluid-wagon-tech',	cat:'tech',	recipeName:'fluid-wagon-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'railway',	cat:'tech',	recipeName:'railway',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'train-stop-tech',	cat:'tech',	recipeName:'train-stop-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                //---
                {	id:'blue-tech',	cat:'tech',	recipeName:'blue-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'electronics-2',	cat:'tech',	recipeName:'electronics-2',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'explosives-tech',	cat:'tech',	recipeName:'explosives-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'flamethrower-tech',	cat:'tech',	recipeName:'flamethrower-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'gate-tech',	cat:'tech',	recipeName:'gate-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'grey-tech',	cat:'tech',	recipeName:'grey-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'gun-turret-tech',	cat:'tech',	recipeName:'gun-turret-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'land-mine-tech',	cat:'tech',	recipeName:'land-mine-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'military',	cat:'tech',	recipeName:'military',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'military-2',	cat:'tech',	recipeName:'military-2',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'oil-tech',	cat:'tech',	recipeName:'oil-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'plastics',	cat:'tech',	recipeName:'plastics',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'sulfur-tech',	cat:'tech',	recipeName:'sulfur-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'tank-tech',	cat:'tech',	recipeName:'tank-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'wall-tech',	cat:'tech',	recipeName:'wall-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                //---
                {	id:'armor-tech',	cat:'tech',	recipeName:'armor-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'automation-2',	cat:'tech',	recipeName:'automation-2',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'battery-tech',	cat:'tech',	recipeName:'battery-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'electronics-3',	cat:'tech',	recipeName:'electronics-3',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'engine-tech-2',	cat:'tech',	recipeName:'engine-tech-2',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'low-density-structure-tech',	cat:'tech',	recipeName:'low-density-structure-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'lubricant-tech',	cat:'tech',	recipeName:'lubricant-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'personal-roboport-tech',	cat:'tech',	recipeName:'personal-roboport-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'nightvision-tech',	cat:'tech',	recipeName:'nightvision-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'robotics',	cat:'tech',	recipeName:'robotics',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'yellow-tech',	cat:'tech',	recipeName:'yellow-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},

                /*
                {	id:'portable-fusion-reactor-tech',	cat:'tech',	recipeName:'portable-fusion-reactor-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'flammables',	cat:'tech',	recipeName:'flammables',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'military-3',	cat:'tech',	recipeName:'military-3',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'oil-tech-2',	cat:'tech',	recipeName:'oil-tech-2',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'military-4',	cat:'tech',	recipeName:'military-4',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'exoskeleton-tech',	cat:'tech',	recipeName:'exoskeleton-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'rocketry',	cat:'tech',	recipeName:'rocketry',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'rocket-control-unit-tech',	cat:'tech',	recipeName:'rocket-control-unit-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'speed',	cat:'tech',	recipeName:'speed',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'rocket-fuel-tech',	cat:'tech',	recipeName:'rocket-fuel-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'concrete-tech',	cat:'tech',	recipeName:'concrete-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'rocket-tech',	cat:'tech',	recipeName:'rocket-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'accumulator-tech',	cat:'tech',	recipeName:'accumulator-tech',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'solar-energy',	cat:'tech',	recipeName:'solar-energy',	stack:1,	hasUnlocks:true,	toComplete:true	},                
                {	id:'automation-3',	cat:'tech',	recipeName:'automation-3',	stack:1,	hasUnlocks:true,	toComplete:true	},                
                {	id:'productivity',	cat:'tech',	recipeName:'productivity',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'material-2',	cat:'tech',	recipeName:'material-2',	stack:1,	hasUnlocks:true,	toComplete:true	},
                {	id:'purple-tech',	cat:'tech',	recipeName:'purple-tech',	stack:1,	hasUnlocks:true,	toComplete:true	}, 
                */                
            ],
        }
    ]
}
