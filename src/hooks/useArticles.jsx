import { useContext } from 'react';
import ArticlesContext from '../context/ArticlesProvider';

const useArticles = () => {
	return useContext(ArticlesContext);
};

export default useArticles;
