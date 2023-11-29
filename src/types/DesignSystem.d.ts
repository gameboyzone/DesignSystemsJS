import { IDesignLanguage } from './DesignLanguage';
import { IFoundations } from './Foundations';
import { IComponents } from './Components';
import { IMaintenance } from './Maintenance';

/**
 *
 */
export interface IDesignSystem {
  designLanguage: IDesignLanguage;
  foundations: IFoundations;
  components: IComponents;
  maintenance: IMaintenance;
}
