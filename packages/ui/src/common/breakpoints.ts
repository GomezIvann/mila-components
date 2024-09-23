export const breakpoints = {
  xs: "320px", // Mobile small
  sm: "480px", // Mobile large
  md: "768px", // Tablet
  lg: "1024px", // Laptop
  xl: "1280px", // Desktop
  xxl: "1440px", // Large desktop
};

export const mediaQueries = {
  xs: `@media (max-width: ${breakpoints.xs})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  xl: `@media (max-width: ${breakpoints.xl})`,
  xxl: `@media (max-width: ${breakpoints.xxl})`,
};
