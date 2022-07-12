import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const SetupForm = () => {
	const { error } = useGlobalContext();

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
							min={1}
							max={50}
						/>
					</FormControl>
					<FormControl>
						<Label htmlFor="category">category</Label>
						<Select name="category" id="category">
							<Option value="video-games">video games</Option>
							<Option value="history">history</Option>
							<Option value="film">film</Option>
						</Select>
					</FormControl>
					<FormControl>
						<Label htmlFor="difficulty">select difficulty</Label>
						<Select name="difficulty" id="difficulty">
							<Option value="easy">easy</Option>
							<Option value="medium">medium</Option>
							<Option value="hard">hard</Option>
						</Select>
					</FormControl>
					{error && (
						<Error>
							can't generate questions, please try different
							options
						</Error>
					)}
					<Button type="submit">Start</Button>
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
	background: red;
`;

const Form = styled.form`
	background: blue;
`;

const Title = styled.h2``;
const FormControl = styled.div``;
const Label = styled.label``;
const Input = styled.input``;
const Select = styled.select``;
const Option = styled.option``;
const Error = styled.p``;
const Button = styled.button``;
