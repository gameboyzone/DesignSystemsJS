// import classes
import { DesignSystems as DesignSystemsJS } from './classes/DesignSystems.js';
import { DesignSystem } from './classes/DesignSystem.js';

// import types
import { IDesignSystem } from './types/DesignSystem';
import { IDesignLanguage } from './types/DesignLanguage';
import { IFoundations } from './types/Foundations';
import { IComponents } from './types/Components';
import { IMaintenance } from './types/Maintenance';

export let DesignSystems: DesignSystemsJS;

// eslint-disable-next-line no-console
console.log("--------------------------------------");
console.log("Compiling DesignSystemJS ...");
console.log("--------------------------------------");

// Construct DesignSystem
let designLanguage: IDesignLanguage = {} as any;
let foundations: IFoundations = {} as any;
let components: IComponents = {} as any;
let maintenance: IMaintenance = {} as any;

// Initialize DesignSystemsJS
let EverestDesignSystem: DesignSystem = new DesignSystem(
  designLanguage,
  foundations,
  components,
  maintenance,
);
DesignSystems = new DesignSystemsJS([EverestDesignSystem]);

console.log("--------------------------------------");
console.log("DesignSystemJS compilation successful");
console.log("--------------------------------------");