import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const GuestList = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState([]);
    const onClick = () => {
        setName(' ');
        setGuests([...guests, name]);
    };
    return (_jsxs("div", { children: [_jsx("h3", { children: "Guest List" }), _jsx("ul", { children: guests.map((guest) => (_jsx("li", { children: guest }, guest))) }), _jsx("input", { value: name, onChange: (e) => setName(e.target.value) }), _jsx("button", { children: "Add Guest" })] }));
};
export default GuestList;
