import React from "react";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayAllStudents from "./components/DisplayAllStudents";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/web-gui-kel-1" element={<DisplayAllStudents />} exact />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
