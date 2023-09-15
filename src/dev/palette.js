import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment } from "react";
import { Category, Component, Variant, Palette, } from "@react-buddy/ide-toolbox";
export const PaletteTree = () => (_jsx(Palette, { children: _jsx(Category, { name: "App", children: _jsx(Component, { name: "Loader", children: _jsx(Variant, { children: _jsx(ExampleLoaderComponent, {}) }) }) }) }));
export function ExampleLoaderComponent() {
    return _jsx(Fragment, { children: "Loading..." });
}
