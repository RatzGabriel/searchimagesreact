import React, { useState } from "react";

export interface HeaderProps {
  apiCall: Function;
}

const Header: React.FC<HeaderProps> = ({ apiCall }) => {
  const [input, setInput] = useState("");

  const x = (e: any) => {
    e.preventDefault();
    apiCall(input);
  };

  return (
    <div>
      <h1>Search for Items</h1>
      <form onSubmit={(e) => x(e)} action="">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => apiCall("Mountain")}>Mountain</button>
      <button onClick={() => apiCall("Beach")}>Beach</button>
      <button onClick={() => apiCall("Birds")}>Birds</button>
      <button onClick={() => apiCall("Food")}>Food</button>
    </div>
  );
};

export default Header;
