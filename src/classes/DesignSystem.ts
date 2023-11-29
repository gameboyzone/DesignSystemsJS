import { IDesignSystem } from '../types/DesignSystem';
import { IDesignLanguage } from '../types/DesignLanguage';
import { IFoundations } from '../types/Foundations';
import { IComponents } from '../types/Components';
import { IMaintenance } from '../types/Maintenance';

export class DesignSystem implements IDesignSystem {
  // private variables
  designLanguage: IDesignLanguage;
  foundations: IFoundations;
  components: IComponents;
  maintenance: IMaintenance;

  // constructor
  constructor(
    designLanguage: any,
    foundations: any,
    components: any,
    maintenance: any,
  ) {
    this.designLanguage = designLanguage;
    this.foundations = foundations;
    this.components = components;
    this.maintenance = maintenance;
  }

  // private methods
}
