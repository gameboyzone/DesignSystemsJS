import { IDesignSystem } from '../types/DesignSystem';
import { IDesignLanguage } from '../types/DesignLanguage';
import { IFoundations } from '../types/Foundations';
import { IComponents } from '../types/Components';
import { IMaintenance } from '../types/Maintenance';

export class DesignSystem implements IDesignSystem {
  // private variables
  id: string;
  name: string;
  description: string;
  url: string;
  designLanguage: IDesignLanguage;
  foundations: IFoundations;
  components: IComponents;
  maintenance: IMaintenance;

  // constructor
  constructor(
    id: string,
    name: string,
    description: string,
    url: string,
    designLanguage: IDesignLanguage,
    foundations: IFoundations,
    components: IComponents,
    maintenance: IMaintenance,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;
    this.designLanguage = designLanguage;
    this.foundations = foundations;
    this.components = components;
    this.maintenance = maintenance;
  }

  // private methods
}
