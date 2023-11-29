/**
 *
 */
export interface IMaintenance {
  documentation: IDocumentation;
  libraries: ILibraries;
  processes: IProcesses;
  support: ISupport;
  contribution: IContribution;
}

/**
 *
 */
export interface IDocumentation {
  default: string;
}

/**
 *
 */
export interface ILibraries {
  default: string;
}

/**
 *
 */
export interface IProcesses {
  default: string;
}

/**
 *
 */
export interface ISupport {
  default: string;
}

/**
 *
 */
export interface IContribution {
  default: string;
}
