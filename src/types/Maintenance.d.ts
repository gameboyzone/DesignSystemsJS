/**
 *
 */
export interface IMaintenance {
  documentation?: IDocumentation;
  libraries?: ILibraries;
  processes?: IProcesses;
  support?: ISupport;
  contribution?: IContribution;
  [otherProps: string]: unknown;
}

/**
 *
 */
export interface IDocumentation {
  [otherProps: string]: unknown;
}

/**
 *
 */
export interface ILibraries {
  [otherProps: string]: unknown;
}

/**
 *
 */
export interface IProcesses {
  [otherProps: string]: unknown;
}

/**
 *
 */
export interface ISupport {
  [otherProps: string]: unknown;
}

/**
 *
 */
export interface IContribution {
  default: string;
}
