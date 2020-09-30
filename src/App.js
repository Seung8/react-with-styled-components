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

const ButtonGroup = styled.div`
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
          <ButtonGroup>
            <Button color="blue" size="large">
              BUTTON
            </Button>
            <Button color="gray" size="medium">
              BUTTON
            </Button>
            <Button color="pink" size="small">
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="blue" size="large" outline>
              BUTTON
            </Button>
            <Button color="gray" size="medium" outline>
              BUTTON
            </Button>
            <Button color="pink" size="small" outline>
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="blue" size="large" fullWidth>
              BUTTON
            </Button>
            <Button color="gray" size="large" fullWidth>
              BUTTON
            </Button>
            <Button color="pink" size="large" fullWidth>
              BUTTON
            </Button>
          </ButtonGroup>
        </AppBlock>
      </ThemeProvider>
    </>
  );
}

export default App;
