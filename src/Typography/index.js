import typography from './Typography.scss';
import typographyV5 from './TypographyV5.scss';
export * from './Utils';

// NOTE: both typography and typographyV5 have [`h1`, `h2`,...] calsses which are the same.
export default {...typography, ...typographyV5};
// export default typography;

