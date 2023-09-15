import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChildAsFC } from './Child';
const Parent = () => {
    return (_jsxs("div", { children: [_jsx(ChildAsFC, { color: "red", onClick: () => console.log('Clicked') }), _jsx(ChildAsFC, { color: '', onClick: function () {
                    throw new Error('Function not implemented.');
                } })] }));
};
export default Parent;
