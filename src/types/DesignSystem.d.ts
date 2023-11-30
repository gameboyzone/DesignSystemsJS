import { IDesignLanguage } from './DesignLanguage';
import { IFoundations } from './Foundations';
import { IComponents } from './Components';
import { IMaintenance } from './Maintenance';
import { Url } from 'url';


/**
 *
 */
export interface IDesignSystem {
  id: string;
  name: string;
  description: string;
  url: string;
  designLanguage?: IDesignLanguage;
  foundations?: IFoundations;
  components?: IComponents;
  maintenance?: IMaintenance;
}