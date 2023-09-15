import React, { useState } from "react";

const users = [
  { name: "sarah", age: 20 },
  { name: "mario", age: 20 },
  { name: "leo", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    console.log(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
    </div>
  );
};
export default UserSearch;
