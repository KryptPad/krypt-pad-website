/**
 * @jamescoyle/vue-icon ships a bare `.vue` file as its entry point with no
 * typings, so the `*.vue` wildcard above doesn't cover the package name.
 */
declare module '@jamescoyle/vue-icon' {
    import type { DefineComponent } from 'vue';
    const SvgIcon: DefineComponent<{
        /** Icon preset that supplies the default size and viewBox. */
        type?: 'mdi' | 'simple-icons';
        /** SVG path data, e.g. an export from `@mdi/js`. */
        path: string;
        size?: string | number;
        viewbox?: string;
        flip?: 'horizontal' | 'vertical' | 'both' | 'none';
        rotate?: number;
    }>;
    export default SvgIcon;
}
