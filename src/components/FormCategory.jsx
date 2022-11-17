import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useArticles from '../hooks/useArticles';

const CATEGORIES = [
	{ value: 'business', label: 'Business' },
	{ value: 'entertainment', label: 'Entertainment' },
	{ value: 'general', label: 'General' },
	{ value: 'health', label: 'Health' },
	{ value: 'science', label: 'Science' },
	{ value: 'sports', label: 'Sports' },
	{ value: 'technology', label: 'Technology' },
];

const FormCategory = () => {
	const { category, handleChangeCategory } = useArticles();
	return (
		<form>
			<FormControl fullWidth>
				<InputLabel>Category</InputLabel>
				<Select
					value={category}
					label='Category'
					onChange={handleChangeCategory}
				>
					{CATEGORIES.map(category => (
						<MenuItem key={category.value} value={category.value}>
							{category.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</form>
	);
};

export default FormCategory;
