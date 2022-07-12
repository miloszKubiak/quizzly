import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";

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

	useEffect(() => {
		fetchQuestions(tempUrl);
	}, []);

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
