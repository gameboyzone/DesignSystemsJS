import { IDesignSystems } from '../types/DesignSystems';
import { IDesignSystem } from '../types/DesignSystem';

export class DesignSystems implements IDesignSystems {
  // private variables
  designSystems: IDesignSystem[];
  currentDesignSystem: IDesignSystem;

  constructor(designSystems: IDesignSystem[]) {
    this.designSystems = designSystems;
    if (this.designSystems.length === 1) {
      this.setDesignSystem(this.designSystems[0]);
    }
  }

  // private methods
  /**
   * Add a Design System 
   */
  private add = (designSystem: IDesignSystem) => {
    this.designSystems.push(designSystem);
  };

  /**
   * Remove a Design System
   */
  private remove = (designSystem: IDesignSystem) => {
  };

  /**
   * Sets the current Design System
   */
  private setDesignSystem = (designSystem: IDesignSystem) => {
    this.currentDesignSystem = designSystem;
  };

  /**
   * Set the root element on which all 
   */
  private setRootElement = (root: HTMLElement) => {
    root.style.setProperty('--text-primary', this.currentDesignSystem?.foundations?.colors?.text?.primary as string);
    root.style.setProperty('--text-secondary', this.currentDesignSystem?.foundations?.colors?.text?.secondary as string);
    root.style.setProperty('--background-primary', this.currentDesignSystem?.foundations?.colors?.background?.primary as string);
    root.style.setProperty('--background-secondary', this.currentDesignSystem?.foundations?.colors?.background?.secondary as string);
    root.style.setProperty('--components-primary', this.currentDesignSystem?.foundations?.colors?.components?.primary as string);
    root.style.setProperty('--components-secondary', this.currentDesignSystem?.foundations?.colors?.components?.secondary as string);
    root.style.setProperty('--states-hover', this.currentDesignSystem?.foundations?.colors?.states?.hover as string);
    root.style.setProperty('--states-pressed', this.currentDesignSystem?.foundations?.colors?.states?.pressed as string);
  }
}
