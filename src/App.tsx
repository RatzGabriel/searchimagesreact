import React, { useState, useEffect } from "react";
import api from "./components/API/API";

import "./App.css";
import Header from "./components/Sites/Header";
import DisplayImages from "./components/Sites/DisplayImages";

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
    <div className="App">
      <Header apiCall={apiCall} />
      <DisplayImages images={images} />
    </div>
  );
}

export default App;
