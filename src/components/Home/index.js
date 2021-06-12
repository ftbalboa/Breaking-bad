import { StyledHome } from './styles';
import { CardEpisode } from '../CardEpisode';

export const Home = ({ episodes }) => {
	return (
		<StyledHome>
			{episodes.map((e) => (
				<CardEpisode key={e.episode_id} data={e} />
			))}
		</StyledHome>
	);
};
