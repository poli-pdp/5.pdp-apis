import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link, Typography } from '@mui/material';

const Article = ({ article }) => {
	const { urlToImage, author, title, description, url } = article;
	return (
		<Grid item xs={12} md={6} lg={4}>
			<Card>
				<CardMedia
					component='img'
					height='140'
					image={urlToImage}
					alt={`imagen ${author}`}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Link
						href={url}
						target='_blank'
						variant='button'
						textAlign='center'
						width='100%'
					>
						Read more...
					</Link>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Article;
