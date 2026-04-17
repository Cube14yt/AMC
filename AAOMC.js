//AAOMC
//adacey and others' modded chem
//COMMUNITY R74ncord PROJECT TO MOD EVERY CHEMICAL ELEMENT INTO SANDBOXELS
console.log("vro just play the mod")

/**
 * Makes an element deadly, directly mutating `elements[name]`.
 * 
 * This also mutates `elements.human` to add the reaction for making humans panic around the
 * element.
 * 
 * @param {string} name The name of the element
 * @param {"ACID" | "POISON"} type Whether it a (strong) acid or a poison
 * @param {number} speed How fast it should be deadly
 * 
 * @param args The arguments for making the element
 * @param {number} args.panic The amount humans should panic around this element. Defaults to 5.
 * 
 * @returns The reactions generated
 */
function make_deadly(name, type, speed, args = {}) {
	const bug_entries = eLists.ANIMAL
		.map(x => [x, { elem1: null, elem2: elements[x].breakInto, chance: speed }])

	elements.human.reactions[name] = { attr1: { panic: args.panic ?? 5 } }

	switch (type) {
		case "ACID":
			elements[name].reactions = {
				"plant": { elem1: null, elem2: "dead_plant", chance: speed },
				"head": { elem1: "bone", chance: speed },
				"body": { elem1: "bone", chance: speed },
				...Object.fromEntries(bug_entries)
			}

		case "POISON":
			elements[name].reactions = {
				"plant": { elem1: null, elem2: "dead_plant", chance: speed },
				"head": { elem1: "rotten_meat", chance: speed },
				"body": { elem1: "rotten_meat", chance: speed },
				...Object.fromEntries(bug_entries)
			}
	}
}

elements.bromine = {
	density: 3102.8,
	color: ["#401505", "#401005", "#401107", "#3d190a"],
	tempLow: -7.2,
	tempHigh: 58.8,
	stateLow: "bromine_ice",
	stateHigh: "bromine_gas",
	state: "liquid",
	category: "liquids",
	behavior: behaviors.LIQUID,
	viscosity: 0.944,
	reactions: {
		"water": { elem1: null, elem2: "hydrobromic_acid" },
		"propane": { elem1: "hydrobromic_acid", elem2: "brominated_hydrocarbons" },
		"oil": { elem1: "hydrobromic_acid", elem2: "brominated_hydrocarbons" },
		"lamp_oil": { elem1: "hydrobromic_acid", elem2: "brominated_hydrocarbons" },
		"hydrogen": { elem1: "hydrobromic_acid", elem2: "hydrobromic_acid", tempMin: 400 },
		"gold": { elem1: null, elem2: "gold_bromide", tempMin: 140, tempMax: 160 },
		"gold_coin": { elem1: null, elem2: "gold_bromide", tempMin: 140, tempMax: 160 },
		"iron": { elem1: null, elem2: "iron_bromide" },
		"oxidized_copper": { elem1: "oxygen", elem2: "copper_bromide" },
		"copper": { elem1: null, elem2: "copper_bromide" },
		"silver": { elem1: null, elem2: "silver_bromide" },
		"aluminum": { elem1: "smoke", elem2: "aluminum_bromide" },
		"sodium": { elem1: "pop", elem2: "sodium_bromide" },
		"copper": { elem1: null, elem2: "copper_bromide" },
		"magnesium": { elem1: null, elem2: "magnesium_bromide" },
		"sulfur": { elem1: [null, "disulfur_dibromide"], elem2: "disulfur_dibromide" },
		"potassium": { elem1: "pop", elem2: "potassium_bromide" },
		"calcium": { elem1: null, elem2: "calcium_bromide" },
		"uranium": { elem1: "null", elem2: "uranium_pentabromide" }
	}
};
make_deadly("bromine", "POISON", 0.5)

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
		"water": { elem1: "ytterbium_hydroxide", elem2: "hydrogen" },
		"hydrogen": { elem1: "ytterbium_hydride", elem2: null },
		"chlorine": { elem1: "ytterbium_chloride", elem2: null },
		"bromine": { elem1: "ytterbium_bromide", elem2: null },
		"hydrobromic_acid": { elem1: "ytterbium_bromide", elem2: "hydrogen" },
		"acid": { elem1: "ytterbium_chloride", elem2: "hydrogen" },
		"neutral_acid": { elem1: "ytterbium_chloride", elem2: ["hydrogen", "water"] },
	},
	tick: function (pixel) {
		for (let i = 0; i < adjacentCoords.length; i++) {
			let coord = adjacentCoords[i]
			let x = pixel.x + coord[0]
			let y = pixel.y + coord[1]
			if (isEmpty(x, y)) {
				if (Math.random() < 0.0001) {
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
	tick: function (pixel) {
		for (let i = 0; i < adjacentCoords.length; i++) {
			let coord = adjacentCoords[i]
			let x = pixel.x + coord[0]
			let y = pixel.y + coord[1]
			if (isEmpty(x, y)) {
				if (Math.random() < 0.0001) {
					changePixel(pixel, "ytterbium_oxide")
					return
				}
			}
		}
	}
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
	reactions: {
		"hydrobromic_acid": { elem1: "ytterbium_bromide", elem2: "hydrogen" },
		"acid": { elem1: "ytterbium_chloride", elem2: "hydrogen" },
		"neutral_acid": { elem1: "ytterbium_chloride", elem2: ["hydrogen", "water"] },
	},
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
	reactions: {
		"hydrobromic_acid": { elem1: "ytterbium_bromide", elem2: "hydrogen" },
		"acid": { elem1: "ytterbium_chloride", elem2: "hydrogen" },
		"neutral_acid": { elem1: "ytterbium_chloride", elem2: ["hydrogen", "water"] },
	},
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
//Ytterbium Hydride (YbH₃)
elements.ytterbium_hydride = {
	density: 7100,
	color: ["#23282b", "#474b4e"],
	tempHigh: 600,
	stateHigh: ["molten_ytterbium", "hydrogen"],
	state: "solid",
	category: "powders",
	behavior: behaviors.POWDER,
	reactions: {
		"water": { elem1: "ytterbium_hydroxide", elem2: null },
	},
};
//Ytterbium Chloride (YbCl₃)
elements.ytterbium_chloride = {
	density: 4600,
	color: ["#ffffff", "#d3d3d3"],
	tempHigh: 703,
	stateHigh: "molten_ytterbium_chloride",
	state: "solid",
	category: "powders",
	behavior: behaviors.POWDER,
	reactions: {
		"water": { elem1: "ytterbium_hydroxide", elem2: null },
	}
};
elements.molten_ytterbium_chloride = {
	density: 3580,
	color: ["#ffc067", "#ffdbbb"],
	temp: 900,
	tempLow: 703,
	stateLow: "ytterbium_chloride",
	state: "liquid",
	category: "states",
	behavior: behaviors.MOLTEN,
	fireColor: ["#39ff14", "#00913f"],
};
//Ytterbium Bromide (YbBr₃)
elements.ytterbium_bromide = {
	density: 5350,
	color: ["#ffffff", "#f2f0eb"],
	tempHigh: 300,
	stateHigh: "molten_ytterbium_bromide",
	state: "solid",
	category: "powders",
	behavior: behaviors.POWDER,
};
elements.molten_ytterbium_bromide = {
	density: 5070,
	color: ["#fbceb1", "#ffaa66"],
	temp: 500,
	tempLow: 300,
	stateLow: "ytterbium_bromide",
	state: "liquid",
	category: "states",
	behavior: behaviors.MOLTEN,
	fireColor: ["#39ff14", "#00913f"],
};
//Ytterbium-169 (¹⁶⁹Yb)
elements.ytterbium169 = {
  density: 6970,
	color: ["#e3e4e5", "#9c9c9c", "#ada898"],
	tempHigh: 824,
	stateHigh: "molten_ytterbium169",
	state: "solid",
	category: "solids",
	conduct: 0.6,
	hardness: 0.2,
    reactions: {
		"water": { elem1: "ytterbium_hydroxide", elem2: ["hydrogen", "dirty_water"] },
		"hydrogen": { elem1: "ytterbium_hydride", elem2: null },
		"chlorine": { elem1: "ytterbium_chloride", elem2: null },
		"bromine": { elem1: "ytterbium_bromide", elem2: null },
		"hydrobromic_acid": { elem1: "ytterbium_bromide", elem2: "hydrogen" },
		"acid": { elem1: "ytterbium_chloride", elem2: "hydrogen" },
		"neutral_acid": { elem1: "ytterbium_chloride", elem2: ["hydrogen", "water"] },
		"neutron": { elem1: "ytterbium169", elem2: null, temp1: 150 },
	  },
	behavior: [
    "XX|CR:radiation%0.1 AND CH:thulium%0.00001|XX", "CR:radiation%0.1 AND CH:thulium%0.00001|XX|CR:radiation%0.001 AND CH:thulium%0.00001", "M2|M1|M2"
	],
	tick: function (pixel) {
      pixel.temp += 0.0005;
    },
};
elements.molten_ytterbium169 = {
  density: 6970,
	color: ["#f5b27a", "#e06a1a", "#d99a4a"],
	temp: 1600,
	tempLow: 824,
	stateLow: "ytterbium169",
	state: "solid",
	category: "states",
	conduct: 0.6,
	hardness: 0.2,
	behavior: [
	"XX|CR:fire%2.5 AND CH:molten_thulium%0.00001 AND CR:radiation%0.1|XX", "M2 AND CH:molten_thulium%0.00001 AND CR:radiation%0.1|XX|M2 AND CH:molten_thulium%0.00001 AND CR:radiation%0.1", "M1|M1|M1"
	],
	tick: function (pixel) {
      pixel.temp += 0.0005;
    },
};
//Stainless Ytterbium (Yb)
elements.stainless_ytterbium = {
    density: 6970,
	color: ["#e3e4e5", "#9c9c9c", "#ada898"],
	tempHigh: 824,
	stateHigh: "molten_stainless_ytterbium",
	state: "solid",
	category: "solids",
	behavior: behaviors.WALL,
	conduct: 0.6,
	hardness: 0.2,
	reactions: {
		"hydrogen": { elem1: "ytterbium_hydride", elem2: null },
		"chlorine": { elem1: "ytterbium_chloride", elem2: null },
		"bromine": { elem1: "ytterbium_bromide", elem2: null },
		"hydrobromic_acid": { elem1: "ytterbium_bromide", elem2: "hydrogen" },
		"acid": { elem1: "ytterbium_chloride", elem2: "hydrogen" },
		"neutral_acid": { elem1: "ytterbium_chloride", elem2: ["hydrogen", "water"] },
	},
};
elements.molten_stainless_ytterbium = {
	density: 6500,
	color: ["#f5b27a", "#e06a1a", "#d99a4a"],
	temp: 1000,
	tempLow: 824,
	stateLow: "stainless_ytterbium",
	state: "liquid",
	category: "states",
	behavior: behaviors.MOLTEN,
	conduct: 0.6,
	fireColor: ["#39ff14", "#00913f"],
};
	//Thulium (Tm)
	elements.thulium = {
	density: 9321,
	color: ["#23282b", "#a9a9a9"],
	tempHigh: 1545,
	stateHigh: "molten_thulium",
	state: "solid",
	category: "solids",
	behavior: behaviors.WALL,
	conduct: 0.4,
	hardness: 0.2,
	tick: function (pixel) {
		for (let i = 0; i < adjacentCoords.length; i++) {
			let coord = adjacentCoords[i]
			let x = pixel.x + coord[0]
			let y = pixel.y + coord[1]
			if (isEmpty(x, y)) {
				if (Math.random() < 0.0001) {
					changePixel(pixel, "thulium_oxide")
					return
				}
			}
		}
	}
};
elements.molten_thulium = {
	density: 8560,
	color: ["#78542e", "#a87f52"],
	temp: 1800,
	tempLow: 1545,
	stateLow: "thulium",
	state: "liquid",
	category: "states",
	behavior: behaviors.MOLTEN,
	conduct: 0.4,
	fireColor: ["#14d8ff", "#007e91"],
    tick: function (pixel) {
		for (let i = 0; i < adjacentCoords.length; i++) {
			let coord = adjacentCoords[i]
			let x = pixel.x + coord[0]
			let y = pixel.y + coord[1]
			if (isEmpty(x, y)) {
				if (Math.random() < 0.0001) {
					changePixel(pixel, "thulium_oxide")
					return
				}
			}
		}
	}
};
//Thulium Oxide (Tm₂O₃)
elements.thulium_oxide = {
	density: 8900,
	color: "#ffffff",
	tempHigh: 2341,
	stateHigh: "molten_thulium_oxide",
	state: "solid",
	category: "powders",
	behavior: behaviors.POWDER,
};
elements.molten_thulium_oxide = {
	density: 7700,
	color: ["#ffe5d6", "#ffd9cc"],
	temp: 2600,
	tempLow: 2227,
	stateLow: "thulium_oxide",
	state: "liquid",
	category: "states",
	behavior: behaviors.MOLTEN,
	fireColor: ["#14d8ff", "#007e91"],
};
//Stainless Thulium (Tm)
elements.stainless_thulium = {
    density: 9321,
	color: ["#23282b", "#a9a9a9"],
	tempHigh: 1545,
	stateHigh: "molten_stainless_thulium",
	state: "solid",
	category: "solids",
	behavior: behaviors.WALL,
	conduct: 0.4,
	hardness: 0.2,
};
elements.molten_stainless_thulium = {
    density: 8560,
	color: ["#78542e", "#a87f52"],
	temp: 1800,
	tempLow: 1545,
	stateLow: "stainless_thulium",
	state: "liquid",
	category: "states",
	behavior: behaviors.MOLTEN,
	conduct: 0.4,
	fireColor: ["#14d8ff", "#007e91"],
};
//Ytterbium stuff by Kytterbium
elements.acid.name = "hydrochloric_acid"
if (langCode === "xem") {
	lang.bromine = "🟧☠️💧";
}
if (langCode === "qha") {
	lang.bromine = "samocomomae-e-alama";
}
if (langCode === "qha") {
	lang.ytterbium = "paemaelama-e-a-i-ehehalacihalama-elama";
}

// Noble gases by Cube14 (Hydrogen)
elements.argon = {
	color: "#b5a1bd",
	behavior: behaviors.GAS,
	tempLow: -185.848,
	category: "gases",
	density: 1.784,
	state: "gas",
	conduct: 0.5,
	colorOn: ["#e100ff", "#bd00d6", "#a101b6"]
}

elements.liquid_argon = {
	tempLow: -189.34,
	colorOn: ["#e100ff", "#bd00d6", "#a101b6"]
}

elements.argon_ice = {
	colorOn: ["#e100ff", "#bd00d6", "#a101b6"]
}

elements.krypton = {
	color: "#94829b",
	behavior: behaviors.GAS,
	tempLow: -153.415,
	category: "gases",
	density: 3.749,
	state: "gas",
	conduct: 0.4,
	colorOn: ["#cdadd1", "#a789aa"]
}

elements.liquid_krypton = {
	tempLow: -157.37,
	colorOn: ["#cdadd1", "#a789aa"]
}

elements.krypton_ice = {
	colorOn: ["#cdadd1", "#a789aa"]
}

elements.xenon = {
	color: "#bbbce7",
	behavior: behaviors.GAS,
	tempLow: -108.099,
	category: "gases",
	density: 5.894,
	state: "gas",
	conduct: 0.4,
	colorOn: ["#74a3cf", "#3790cc", "#2879c5"]
}

elements.liquid_xenon = {
	tempLow: -111.75,
	colorOn: ["#74a3cf", "#3790cc", "#2879c5"]
}

elements.xenon_ice = {
	colorOn: ["#74a3cf", "#3790cc", "#2879c5"]
}

if (!elements?.neutron?.reactions) elements.neutron.reactions = {}

elements.neutron.reactions.radon = { temp2:100 }
elements.neutron.reactions.liquid_radon = { temp2:100 }
elements.neutron.reactions.radon_ice = { temp2:100 }

elements.radon = {
	color: "#abc0a4",
	behavior: behaviors.GAS,
	tempLow: -61.7,
	category: "gases",
	density: 9.73,
	state: "gas",
	conduct: 0.1,
	colorOn: ["#c2eec2", "#bdeeb1"],
	tick(pixel) {
		if (Math.random() <= 0.01) {
			releaseElement(pixel, "radiation")
		}
		if (Math.random() <= 0.0005) {
			const alpha_particle = releaseElement(pixel, "helium")
			if (alpha_particle) {
				alpha_particle.temp += 300
			}
			changePixel(pixel, "polonium")
			pixel.temp += 600
		}
	},
	reactions: {
		"neutron": {elem1: "n_explosion", tempMin: 400, chance: 0.1}
	}
}

elements.liquid_radon = {
	tempLow: -71,
	colorOn: ["#c2eec2", "#bdeeb1"],
	tick: elements.radon.tick,
}

elements.radon_ice = {
	colorOn: ["#c2eec2", "#bdeeb1"],
	tick: elements.radon.tick,
}

elements.oganesson = {
	color: elements.neon.color,
	behavior: behaviors.GAS,
	colorOn: ["#b5e65b", "#b9f756", "#aee456"],
	category: "gases",
	state: "gas",
	conduct: 0.2,
	density: 9.73,
	tick(pixel) {
		releaseElement(pixel, "radiation", 5)
		if (Math.random() <= 0.5) {
			changePixel(pixel, "transuranium_explosion")
			return
		}
		if (Math.random() <= 0.3) {
			const alpha_particle = releaseElement(pixel, "helium")
			if (alpha_particle) {
				alpha_particle.temp += 1000
			}
			changePixel(pixel, "livermorium")
			pixel.temp += 1000
		}
	}
}
elements.transuranium_explosion = {
	color: ["#a7ff5f", "#54fa83", "#53fdc5"],
	behavior: [
		"XX|XX|XX",
		"XX|EX:80>plasma,plasma,plasma,plasma,radiation,rad_steam|XX",
		"XX|XX|XX"
	],
	temp: 10000000000,
	category: "energy",
	state: "gas",
	density: 1000,
	excludeRandom: true,
	hidden: true,
	noMix: true
}
