import Test from './components/Test';
import NewsProvider from './context/NewsProvider';

const App = () => {
	return (
		<div>
			<NewsProvider>
				<Test />
			</NewsProvider>
		</div>
	);
};

export default App;
