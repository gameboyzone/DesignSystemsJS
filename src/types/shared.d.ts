/**
 *
 */
export interface ICommon {
  title?: string;
  description?: string;
  url?: string;
  [otherProps: string]: unknown;
}
