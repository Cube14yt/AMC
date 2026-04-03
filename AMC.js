//AMC
//adacey's chemical mod
//COMMUNITY R74ncord PROJECT TO MOD EVERY CHEMICAL ELEMENT INTO SANDBOXELS
console.log("vro just play the mod")
elements.bromine = {
	density: 3102.8,
	color: ["#401505","#401005","#401107","#3d190a"],
	tempLow: -7.2,
	tempHigh: 58.8,
	stateLow: "frozen_bromine",
	stateHigh: "bromine_gas",
	state: "liquid",
	category: "liquids",
	viscosity: 0.944,
	reactions: {
		"water": {elem1:null, elem2:"hydrobromic_acid"},
		"propane": {elem1:"hydrobromic_acid", elem2:"brominated_hydrocarbons"},
		"oil": {elem1:"hydrobromic_acid", elem2:"brominated_hydrocarbons"},
		"lamp_oil": {elem1:"hydrobromic_acid", elem2:"brominated_hydrocarbons"},
		"hydrogen": {elem1:"hydrobromic_acid", elem2:"hydrobromic_acid", tempMin:400},
		"gold": {elem1:null, elem2:"gold_bromide", tempMin:140, tempMax:160},
		"gold_coin": {elem1:null, elem2:"gold_bromide", tempMin:140, tempMax:160},
		"iron": {elem1:null, elem2:"iron_bromide"},
		"oxidized_copper": {elem1:"oxygen", elem2:"copper_bromide"},
		"copper": {elem1:null, elem2:"copper_bromide"},
		"silver": {elem1:null, elem2:"silver_bromide"},
		"aluminum": {elem1:"smoke", elem2:"aluminum_bromide"},
		"sodium": {elem1:"pop", elem2:"sodium_bromide"},
		"copper": {elem1:null, elem2:"copper_bromide"},
		"magnesium": {elem1:null, elem2:"magnesium_bromide"},
		"sulfur": {elem1:[null,"disulfur_dibromide"], elem2:"disulfur_dibromide"},
		"plant": {elem1:null, elem2:"dead_plant"},
		"potassium": {elem1:"pop", elem2:"potassium_bromide"},
		"calcium": {elem1:null, elem2:"calcium_bromide"},
		"uranium": {elem1:"null", elem2:"uranium_pentabromide"},
	}
};
//Ytterbium (Yb)
elements.ytterbium = {
	density: 6970,
	color: ["#e3e4e5", "#9c9c9c", "#ada898"],
	tempHigh: 824,
	stateHigh: "molten_ytterbium",
	state: "solid",
	category: "solids",
	behavior: behaviors.WALL,
	conduct: 0.6,
	hardness: 0.2,
	reactions: {
	  "water": {elem1:"ytterbium_hydroxide", elem2:"hydrogen"},
	  "hydrogen": {elem1:"ytterbium_trihydride", elem2:null},
	},
tick: function(pixel){
  for (let i = 0; i<adjacentCoords.length; i++){
    let coord = adjacentCoords[i]
    let x = pixel.x + coord[0]
    let y = pixel.y + coord[1]
    if (isEmpty(x, y)){
      if (Math.random()<0.0001){
        changePixel(pixel, "ytterbium_oxide")
        return
      }
    }
  }
}
};
elements.molten_ytterbium = {
	density: 6500,
	color: ["#f5b27a", "#e06a1a", "#d99a4a"],
	temp: 1000,
	tempLow: 824,
	stateLow: "ytterbium",
	state: "liquid",
	category: "states",
	behavior: behaviors.MOLTEN,
	conduct: 0.6,
	fireColor: ["#39ff14", "#00913f"],
};
//Ytterbium Hydroxide (Yb(OH)₃)
elements.ytterbium_hydroxide = {
	density: 6970,
	color: "#515151",
	tempHigh: 100,
	stateHigh: ["ytterbium_oxide", "water"],
	state: "solid",
	category: "solids",
	behavior: behaviors.WALL,
    conduct: 0.6,
	hardness: 0.2,
};
//Ytterbium Oxide (Yb₂O₃)
elements.ytterbium_oxide = {
	density: 9170,
	color: "#ffffff",
	tempHigh: 2227,
	stateHigh: "molten_ytterbium_oxide",
	state: "solid",
	category: "powders",
	behavior: behaviors.POWDER,
};
elements.molten_ytterbium_oxide = {
	density: 9000,
	color: ["#ffe5d6", "#ffd9cc"],
	temp: 2500,
	tempLow: 2227,
	stateLow: "ytterbium_oxide",
	state: "liquid",
	category: "states",
	behavior: behaviors.MOLTEN,
	fireColor: ["#39ff14", "#00913f"],
};
//Ytterbium Trihydride (YbH₃)
elements.ytterbium_trihydride = {
	density: 6700,
	color: ["#23282b", "#474b4e"],
	tempHigh: 1000,
	stateHigh: ["molten_ytterbium", "hydrogen"],
	state: "solid",
	category: "powders",
	behavior: behaviors.POWDER,
};
//Ytterbium stuff by Ytterbium
