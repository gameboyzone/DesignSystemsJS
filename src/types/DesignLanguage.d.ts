import { ICommon } from './shared';


/**
 *
 */
export interface IDesignLanguage {
  brand?: IBrand;
  guidelines?: IGuidelines;
}

/**
 *
 */
export interface IBrand {
  vision?: ICommon;
  designPrinciples?: ICommon[];
  brandAssets?: IBrandAssets;
}

/**
 *
 */
export interface IGuidelines {
  accessibility?: ICommon[];
  terminologies?: ICommon[];
  internationalization?: object; // language, currency and metric support
  localization?: object; // ltr or rtl
}

/**
 *
 */
export interface IBrandAssets {
  logo?: object;
  fonts?: object;
  icons?: object;
  illustrations?: object;
}
