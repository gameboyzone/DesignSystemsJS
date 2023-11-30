import { IDesignSystems } from '../types/DesignSystems';
import { IDesignSystem } from '../types/DesignSystem';

export class DesignSystems implements IDesignSystems {
  // private variables
  designSystems: IDesignSystem[];

  constructor(designSystems: IDesignSystem[]) {
    this.designSystems = designSystems;
  }

  // private methods
  /***
   *
   */
  private add = (designSystem: IDesignSystem) => {
    this.designSystems.push(designSystem);
  };

  /***
   *
   */
  private remove = (designSystem: IDesignSystem) => {
    
  };
}
