import React from "react";
import styled from "styled-components";

const Loading = () => {
	return (
		<Container>
			<Spinner />
		</Container>
	);
};

export default Loading;

const Container = styled.div`
	position: relative;

	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}
`;

const Spinner = styled.div`
	width: 8rem;
	height: 8rem;
	margin: 0 auto;
	margin-top: 20rem;
	border: 0.6rem solid #7b68ee;
	border-radius: 50%;
	border-top-color: #b0c4de;
	animation: spinner 0.6s linear infinite;
`;
