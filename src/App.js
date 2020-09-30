import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

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

          <Dialog title="데이터 삭제" confirmText="삭제" cancelText="취소">
            데이터가 삭제됩니다.
          </Dialog>
        </AppBlock>
      </ThemeProvider>
    </>
  );
}

export default App;
