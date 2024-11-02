// src/types/global.d.ts
declare module '*.jsx' {
    import { FunctionComponent } from 'react';
    const component: FunctionComponent<any>;
    export default component;
}