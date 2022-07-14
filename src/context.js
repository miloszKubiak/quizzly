import axios from "axios";
import React, { useContext, useState } from "react";

const categories = {
	videoGames: 15,
	history: 23,
	film: 11,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";
const tempUrl =
	"https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [waiting, setWaiting] = useState(true); //waits for the user to complete the form(construct url)
	const [questions, setQuestions] = useState([]);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [quiz, setQuiz] = useState({
		amount: 10,
		category: "videoGames",
		difficulty: "easy",
	});

	const fetchQuestions = async (url) => {
		setLoading(true);
		setWaiting(false);

		const response = await axios(url).catch((error) => console.log(error));
		if (response) {
			const data = response.data.results;
			if (data.length > 0) {
				setQuestions(data);
				setWaiting(false);
				setLoading(false);
				setError(false);
			} else {
				setWaiting(true);
			}
		} else {
			setWaiting(true);
		}
	};

	const nextQuestion = () => {
		setIndex((oldIndex) => {
			const index = oldIndex + 1;
			if (index > questions.length - 1) {
				openModal();
				return 0;
			} else {
				return index;
			}
		});
	};

	const checkAnswer = (value) => {
		if (value) {
			setCorrectAnswers((oldState) => oldState + 1);
		}
		nextQuestion();
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setWaiting(true);
		setCorrectAnswers(0);
		setIsModalOpen(false);
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setQuiz({ ...quiz, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { amount, category, difficulty } = quiz;

		const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${categories[category]}&type=multiple`;
		
		fetchQuestions(url);
	};

	return (
		<AppContext.Provider
			value={{
				waiting,
				questions,
				correctAnswers,
				index,
				loading,
				error,
				isModalOpen,
				nextQuestion,
				checkAnswer,
				closeModal,
				quiz,
				handleChange,
				handleSubmit,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
