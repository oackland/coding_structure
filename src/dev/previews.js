import { jsx as _jsx } from "react/jsx-runtime";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
const ComponentPreviews = () => {
    return (_jsx(Previews, { palette: _jsx(PaletteTree, {}), children: _jsx(ComponentPreview, { path: "/UserSearch", children: _jsx(UserSearch, {}) }) }));
};
export default ComponentPreviews;
