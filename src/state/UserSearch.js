import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const users = [
    { name: "sarah", age: 20 },
    { name: "mario", age: 20 },
    { name: "leo", age: 20 },
];
const UserSearch = () => {
    const [name, setName] = useState("");
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        console.log(foundUser);
    };
    return (_jsxs("div", { children: ["User Search", _jsx("input", { value: name, onChange: (e) => setName(e.target.value) }), _jsx("button", { onClick: onClick, children: "Find User" })] }));
};
export default UserSearch;
