import { Typography, Container, Grid } from '@mui/material';
import Articles from './components/Articles';
import FormCategory from './components/FormCategory';
import { ArticlesProvider } from './context/ArticlesProvider';

const App = () => {
	return (
		<ArticlesProvider>
			<Container>
				<header>
					<Typography variant='h3' align='center' marginY={5}>
						Search Articles
					</Typography>
				</header>
				<Grid
					container
					direction='row'
					justifyItems='center'
					alignItems='center'
				>
					<Grid item xs={12} md={6} lg={4}>
						<FormCategory />
					</Grid>
				</Grid>
				<Articles />
			</Container>
		</ArticlesProvider>
	);
};

export default App;
