export const breakpoints = {
  xs: "320px", // Mobile small
  sm: "480px", // Mobile large
  md: "768px", // Tablet
  lg: "1024px", // Laptop
  xl: "1280px", // Desktop
  xxl: "1440px", // Large desktop
};

export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
};
