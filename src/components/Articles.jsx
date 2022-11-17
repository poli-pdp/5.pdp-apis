import { Grid } from '@mui/material';
import useArticles from '../hooks/useArticles';
import Article from './Article';

const Articles = () => {
	const { articles } = useArticles();
	return (
		<Grid container spacing={2}>
			{articles.map((article, index) => (
				<Article key={index} article={article} />
			))}
		</Grid>
	);
};

export default Articles;
