// import classes
import { DesignSystems as DesignSystemsJS } from './classes/DesignSystems.js';
import { DesignSystem } from './classes/DesignSystem.js';
export let DesignSystems;
// eslint-disable-next-line no-console
console.log("--------------------------------------");
console.log("Compiling DesignSystemJS ...");
console.log("--------------------------------------");
// Construct DesignSystem
let designLanguage = {};
let foundations = {};
let components = {};
let maintenance = {};
// Initialize DesignSystemsJS
let EverestDesignSystem = new DesignSystem(designLanguage, foundations, components, maintenance);
DesignSystems = new DesignSystemsJS([EverestDesignSystem]);
console.log("--------------------------------------");
console.log("DesignSystemJS compilation successful");
console.log("--------------------------------------");
//# sourceMappingURL=index.js.map