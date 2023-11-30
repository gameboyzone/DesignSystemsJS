import { IColors } from './Colors';
import { ICommon } from './shared';


/**
 * 
 */
export interface IFoundations {
  colors: IColors;
  layout?: ILayout;
  typography?: ITypography;
  elevation?: IElevation;
  motion?: IMotion;
  iconography?: IIconography;
}

/**
 *
 */
export interface ILayout {
  [otherProps: string]: unknown;
}

/**
 *
 */
export interface ITypography {
  [otherProps: string]: unknown;
}

/**
 *
 */
export interface IElevation {
  [otherProps: string]: unknown;
}

/**
 *
 */
export interface IMotion {
  [otherProps: string]: unknown;
}

/**
 *
 */
export interface IIconography {
  [otherProps: string]: unknown;
}