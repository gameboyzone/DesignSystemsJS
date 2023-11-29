import { ICommon } from './shared';

/**
 *
 */
export interface IFoundations {
  colors: IColors;
  layout: Layout;
  typography: Typography;
  elevation: Elevation;
  motion: Motion;
  iconography: Iconography;
}

/**
 *
 */
export interface IColors {
  pallette: IPallette;
  states: IStates;
  backgrounds: IBackgrounds;
  actions: ICommon[];
}

/**
 *
 */
export interface IPallette {
  primary: string;
  secondary: string;
  tertiary: string;
  text: object;
  background: object;
  icon: object;
}

/**
 *
 */
export interface IStates {
  default: string;
  hover: string;
  pressed: string;
}

/**
 *
 */
export interface IBackgrounds {
  default: string;
}
