import React, { useState, useEffect } from "react";
import api from "./components/API/API";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Sites/Header";
import DisplayImages from "./components/Sites/DisplayImages";

const DivWrapper = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  height: auto;
  flex-direction: column;
`;

const DivImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  const [images, setImages] = useState<[]>([]);

  useEffect(() => {
    apiCall("cat");
  }, []);

  const apiCall = async (searchTerm: string): Promise<[]> => {
    const getImages = await api(searchTerm);
    setImages(getImages);
    return getImages;
  };

  return (
    <DivWrapper className="App">
      <Header apiCall={apiCall} />
      <DivImageWrapper>
        <DisplayImages images={images} />
      </DivImageWrapper>
    </DivWrapper>
  );
}

export default App;
