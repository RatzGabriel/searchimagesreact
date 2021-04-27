import React, { FormEvent, useState } from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 4em;
    color: white;
  }
`;

const Btn = styled.button`
  padding: 1em;
  margin: 1em;
  color: white;
  background-color: #5942ad;
  border: none;
  border-radius: 8%;
  :hover {
    background-color: green;
  }
`;

const BtnSearch = styled.button`
  padding: 3em;
  margin: 1em;
  color: white;
  background-color: #9086b4;
  border: none;
  border-radius: 8%;
  :hover {
    background-color: green;
  }
`;

const Input = styled.input`
  padding: 1em;
  text-align: center;
  color: white;
  font-size: 2em;
`;

export interface HeaderProps {
  apiCall: Function;
}

const Header: React.FC<HeaderProps> = ({ apiCall }) => {
  const [input, setInput] = useState("");

  const x = (e: FormEvent) => {
    e.preventDefault();
    apiCall(input);
  };

  return (
    <DivWrapper>
      <h1>Search for Items</h1>
      <form onSubmit={(e) => x(e)} action="">
        <Input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
        <BtnSearch type="submit">Submit</BtnSearch>
      </form>
      <div>
        <Btn onClick={() => apiCall("Mountain")}>Mountain</Btn>
        <Btn onClick={() => apiCall("Beach")}>Beach</Btn>
        <Btn onClick={() => apiCall("Birds")}>Birds</Btn>
        <Btn onClick={() => apiCall("Food")}>Food</Btn>
      </div>
    </DivWrapper>
  );
};

export default Header;
