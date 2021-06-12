export const Episode = ({ episode }) => {
	return (
		<div>
			<h2>{episode.title}</h2>
			<p>{episode.season}</p>
			<p>{episode.episode}</p>
			<p>{episode.air_date}</p>
			<h3>Personajes:</h3>
			<ul>
				{episode.characters.map((char, i) => {
					return <li key={i}>{char}</li>;
				})}
			</ul>
		</div>
	);
};
