import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom";
import UserSearch from "./state/UserSearch.tsx";
import "./index.css";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
const App = () => {
    return (_jsx("div", { children: _jsx(UserSearch, {}) }));
};
ReactDOM.render(_jsx(DevSupport, { ComponentPreviews: ComponentPreviews, useInitialHook: useInitial, children: _jsx(App, {}) }), document.querySelector("#root"));
