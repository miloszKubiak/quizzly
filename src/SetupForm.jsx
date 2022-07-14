import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const SetupForm = () => {
	const { error, quiz, handleChange, handleSubmit } = useGlobalContext();

	return (
		<Wrapper>
			<Container>
				<Form>
					<Title>Quizzly</Title>
					<FormControl>
						<Label htmlFor="amount">number of questions</Label>
						<Input
							type="number"
							name="amount"
							id="amount"
							value={quiz.amount}
							onChange={handleChange}
							min={1}
							max={50}
						/>
					</FormControl>
					<FormControl>
						<Label htmlFor="category">category</Label>
						<Select
							name="category"
							id="category"
							value={quiz.category}
							onChange={handleChange}
						>
							<Option value="videoGames">Video games</Option>
							<Option value="history">History</Option>
							<Option value="film">Film</Option>
						</Select>
					</FormControl>
					<FormControl>
						<Label htmlFor="difficulty">select difficulty</Label>
						<Select
							name="difficulty"
							id="difficulty"
							value={quiz.difficulty}
							onChange={handleChange}
						>
							<Option value="easy">Easy</Option>
							<Option value="medium">Medium</Option>
							<Option value="hard">Hard</Option>
						</Select>
					</FormControl>
					{error && (
						<Error>
							Can't generate questions, please try different
							options.
						</Error>
					)}
					<Button type="submit" onClick={handleSubmit}>
						Start
					</Button>
				</Form>
			</Container>
		</Wrapper>
	);
};

export default SetupForm;

const Wrapper = styled.main`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.section`
	width: 90vw;
	max-width: 34rem;
	margin: 4rem auto;
	padding: 3rem;
	background: #f0f8ff;
`;

const Form = styled.form``;

const Title = styled.h2`
	margin-bottom: 2rem;
	color: #7b68ee;
	text-align: center;
	font-family: cursive;
	font-weight: bold;
	font-size: 2rem;
`;
const FormControl = styled.div`
	margin-bottom: 2rem;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	text-transform: capitalize;
	color: var(--font-color);
	font-weight: bold;
`;

const Input = styled.input`
	width: 100%;
	font-size: 1rem;
	border: none;
	background: #708090;
	color: var(--color-white);
	padding: 0.5rem;
	border-radius: var(--radius);
`;

const Select = styled.select`
	width: 100%;
	font-size: 1rem;
	border: none;
	background: #708090;
	color: var(--color-white);
	padding: 0.5rem;
	border-radius: var(--radius);
`;

const Option = styled.option``;

const Error = styled.p`
	color: #dc143c;
	font-weight: bold;
	text-align: center;
`;

const Button = styled.button`
	display: block;
	margin: 0 auto;
	margin-top: 3rem;
	width: 40%;
	padding: 1.2rem;
	font-size: 1.2rem;
	text-transform: capitalize;
	border-radius: var(--radius);
	transition: var(--transition);
	letter-spacing: 0.1rem;
	border: transparent;
	background: #3cb371;
	font-weight: bold;
	color: var(--color-white);
	cursor: pointer;

	&:hover {
		background: #98fb98;
		color: #3cb371;
	}
`;
