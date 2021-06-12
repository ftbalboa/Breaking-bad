import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Episode } from './components/Episode';

function App() {
	const [episodes, setEpisodes] = useState([]);

	useEffect(() => {
		axios('https://breakingbadapi.com/api/episodes')
			.then(({ data }) => {
				setEpisodes(data);
			})
			.catch((err) => console.error(err));
	}, []);

	const searchEpisode = (obj) => {
		const id = obj.match.params.id;
		const episodio = episodes.find((ep) => ep.episode_id === Number(id));
		return episodio;
	};

	return (
		<div className='App'>
			<Navbar />
			<Route exact path='/' render={() => <Home episodes={episodes} />} />
			<Route
				path='/episodio/:id'
				render={(obj) => <Episode episode={searchEpisode(obj)} />}
			/>
		</div>
	);
}

export default App;
