export const breakpointVals = {
  small: 480,
  medium: 720,
  large: 1024
};

const mq = (query: string) => (content: string): string => `
  @media ${query} {
    ${content}
  }
`;

export const breakpoints = {
  smallUp: `(min-width: ${breakpointVals.small + 1}px)`,
  mediumUp: `(min-width: ${breakpointVals.medium + 1}px)`,
  largeUp: `(min-width: ${breakpointVals.large + 1}px)`
};

export const mqSmallUp = mq(breakpoints.smallUp);
export const mqMediumUp = mq(breakpoints.mediumUp);
export const mqLargeUp = mq(breakpoints.largeUp);
