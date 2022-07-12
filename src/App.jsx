import React from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import Loading from "./Loading";
import SetupForm from "./SetupForm";

function App() {
	const { waiting, loading, index, questions, correctAnswers } =
		useGlobalContext();

	if (waiting) {
		return <SetupForm />;
	}

	if (loading) {
		return <Loading />;
	}

	return (
		<Wrapper>
			<Container>
				<Counter>correct answers:</Counter>
				<Question>
					<Title></Title>
					<BtnContainer>
						<BtnAnswer>das</BtnAnswer>
					</BtnContainer>
				</Question>
				<BtnNext>next question</BtnNext>
			</Container>
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.main``;
const Container = styled.section``;
const Counter = styled.p``;
const Question = styled.article``;
const Title = styled.h2``;
const BtnContainer = styled.div``;
const BtnAnswer = styled.button``;
const BtnNext = styled.button``;
