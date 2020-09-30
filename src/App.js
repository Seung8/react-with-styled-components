import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 400px;
  border: 1px solid black;
  padding: 1rem;
`;

const buttonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595",
};

function App() {
  return (
    <>
      <ThemeProvider theme={{ palette }}>
        <AppBlock>
          <buttonGroup>
            <Button color="blue" size="large">
              BUTTON
            </Button>
            <Button color="gray" size="medium">
              BUTTON
            </Button>
            <Button color="pink" size="small">
              BUTTON
            </Button>
          </buttonGroup>
        </AppBlock>
      </ThemeProvider>
    </>
  );
}

export default App;
