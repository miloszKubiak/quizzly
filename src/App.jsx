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

	//When using the dangerouslySetInnerHTML attribute in Title, we must make sure that the value is not passed from the user. I use it because question returns html and we want a string.
	return (
		<Wrapper>
			{/* <Modal /> */}
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
				<BtnNext>next</BtnNext>
			</Container>
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.main`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--color-white);
`;

const Container = styled.section`
	width: 90vw;
	max-width: var(--max-width);
	border-radius: var(--radius);
	margin: 0 auto;
	padding: 3rem;
	background: #f5fffa;
`;

const Counter = styled.p`
	margin-bottom: 2rem;
	font-size: 1.2rem;
	text-align: center;
	text-transform: capitalize;
	color: #20b2aa;
`;

const Question = styled.article`
	margin: 3rem auto;
`;

const Title = styled.h2`
	text-align: center;
	margin-bottom: 1.6rem;
`;

const BtnContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const BtnAnswer = styled.button`
	display: block;
	margin: 0.8rem auto;
	width: 90%;
	padding: 0.8rem;
	border-radius: var(--radius);
	transition: var(--transition);
	letter-spacing: 0.1rem;
	font-size: 1.2rem;
	border: transparent;
	background: #b0c4de;
	font-weight: bold;
	color: var(--color-font);
	cursor: pointer;

	&:hover {
		background: #7b68ee;
		color: var(--color-white);
	}
`;
const BtnNext = styled.button`
	display: block;
	margin: 0 auto;
	width: 40%;
	padding: 1.2rem;
	font-size: 1.2rem;
	text-transform: capitalize;
	border-radius: var(--radius);
	transition: var(--transition);
	letter-spacing: 0.1rem;
	border: transparent;
	background: #ffe4b5;
	font-weight: bold;
	color: #cd853f;
	cursor: pointer;

	&:hover {
		background: #cd853f;
		color: #ffe4b5;
	}
`;
