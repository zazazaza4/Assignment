declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  import { FunctionComponent, SVGAttributes } from 'react';

  const content: FunctionComponent<SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png';

declare module '*.jpg';

declare module '*.jpeg';

declare const __IS_DEV__: boolean;
declare const __PROJECT__: 'frontend' | 'jest';
declare const __API__: string;
