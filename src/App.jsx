import React from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import Loading from "./Loading";
import SetupForm from "./SetupForm";
import Modal from "./Modal";

function App() {
	const { waiting, loading, index, questions, correctAnswers } =
		useGlobalContext();

	if (waiting) {
		return <SetupForm />;
	}

	if (loading) {
		return <Loading />;
	}

	const { question, correct_answer, incorrect_answers } = questions[index];
	const answers = [...incorrect_answers, correct_answer];

	//Używając atrybutu dangerouslySetInnerHTML w Title musimy mieć pewność, że wartość nie idzie od usera, ponieważ jest to niebezpieczne. Używam jej ponieważ question zwraca html a chcemy stringa.
	return (
		<Wrapper>
			<Modal />
			<Container>
				<Counter>
					correct answers: {correctAnswers}/{index}
				</Counter>
				<Question>
					<Title dangerouslySetInnerHTML={{ __html: question }} />
					<BtnContainer>
						{answers.map((answer, index) => {
							return (
								<BtnAnswer
									key={index}
									dangerouslySetInnerHTML={{ __html: answer }}
								/>
							);
						})}
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
