import { useEffect, useState } from 'react';
import NewsContext from './NewsContext';

/*
useEffect(() => {
	const searchAPI = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=c105012511a84a1897f5b95b3840de26`;
		const { data } = await axios(url);
		setNews(data.articles);
	};
	searchAPI();
}, [category]);
*/
const NewsProvider = ({ children }) => {
	const [category, setCategory] = useState('general');
	const [news, setNews] = useState([]);
	return (
		<NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
	);
};

export default NewsProvider;
