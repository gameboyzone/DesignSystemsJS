import { ICommon } from './shared';

/**
 *
 */
export interface IColors {
  text: IColorPallette;
  background: IColorPallette;
  components: IColorPallette;
  states: IColorPallette;
}

/**
 * Color Pallette
 * Atlassian Colors link: 
 *  - https://atlassian.design/foundations/color
 *  - https://atlassian.design/foundations/color-new#applying-color-with-design-tokens
 *  - https://atlassian.design/foundations/color-new/color-palette-new
 *  - Check design token name: https://atlassian.design/components/button/examples
 */
export interface IColorPallette {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  [otherProps: string]: unknown;
}
