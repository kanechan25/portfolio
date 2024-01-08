import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomScrollbars from "./components/Scrollbar/CustomScrollbar";
import GeneralLayout from "./GeneralLayout";
import { publicRoutes } from "./routes/routes";

export const SlugPath = createContext();

function App() {
  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("100%", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", documentHeight);
  documentHeight();

  let bgVideo = document.getElementById("bgVideo");
  bgVideo.playbackRate = 0.5;

  return (
    <div className="App">
      <div className="overlay"></div>
      <BrowserRouter>
        <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Component = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <SlugPath.Provider value={route.id}>
                      <GeneralLayout>
                        <Component />
                      </GeneralLayout>
                    </SlugPath.Provider>
                  }
                />
              );
            })}
          </Routes>
        </CustomScrollbars>
      </BrowserRouter>
    </div>
  );
}

export default App;
