import React from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import Loading from "./Loading";
import SetupForm from "./SetupForm";

function App() {
	const { waiting, loading, index, questions, correctAnswers } =
    useGlobalContext();
  
  if (waiting) {
    return <SetupForm />
  }

  if (loading) {
    return <Loading />
  }

	return <Container>quiz app</Container>;
}

export default App;

const Container = styled.div`
  
`;
