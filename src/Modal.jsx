import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const Modal = () => {
	const { isModalOpen, closeModal, correctAnswers, questions } =
		useGlobalContext();

	return (
		<>
			{isModalOpen && (
				<ModalContainer>
					<Content>
						<Title>Congrats!</Title>
						<Info>
							{(
								(correctAnswers / questions.length) *
								100
							).toFixed(0)}
							% answers correctly!
						</Info>
						<BtnClose onClick={closeModal}>Play again</BtnClose>
					</Content>
				</ModalContainer>
			)}
		</>
	);
};

export default Modal;

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: var(--transition);
	background: rgba(0, 0, 0, 0.8);
	opacity: 1;
	z-index: 99;
`;

const Content = styled.div`
	position: relative;
	width: 90vw;
	max-width: 34rem;
	padding: 2rem;
	border-radius: var(--radius);
	text-align: center;
	background: #f0f8ff;
`;

const Title = styled.h2`
	color: #7b68ee;
	font-size: 1.6rem;
`;

const Info = styled.p`
	font-size: 1.2rem;
	font-weight: bold;
`;

const BtnClose = styled.button`
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
