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
	border: .6rem solid red;
	border-radius: 50%;
	border-top-color: gray;
	animation: spinner .6s linear infinite; 
`;
