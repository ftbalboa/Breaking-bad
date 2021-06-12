import { StyledCard } from './styles';
import { Link } from 'react-router-dom';

export const CardEpisode = ({ data }) => {
	return (
		<StyledCard>
			<h2>{data.title}</h2>
			<div className='card-info'>
				<p className='card-season'>
					<span>Temporada</span> {data.season}
				</p>
				<p className='card-episode'>
					<span>Episodio</span> {data.episode}
				</p>
			</div>
			<p className='card-date'>
				<span>Fecha de emisión:</span> {data.air_date}
			</p>
			<Link to={`/episodio/${data.episode_id}`}>
				<button>Más información</button>
			</Link>
		</StyledCard>
	);
};
