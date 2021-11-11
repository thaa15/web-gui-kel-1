import "./App.css";
import React from "react";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayAllStudents from "./components/DisplayAllStudents";
import DisplayperStudents from "./components/DisplayperStudents";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="page-container">
          <div className="content-wrap">
            <GlobalStyles />
            <Routes>
              <Route
                path="/web-gui-kel-1"
                element={<DisplayAllStudents />}
                exact
              />
              <Route
                path="/web-gui-kel-1/:id"
                element={<DisplayperStudents />}
                exact
              />
            </Routes>
          </div>
          <Footer/>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
