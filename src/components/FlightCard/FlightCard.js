import './FlightCard.css';
import { useContext } from 'react';
import { FlightContext } from '../../contexts/FlightContext';

const FlightCard = flight => {
	const { flights, toggleActiveFlight } = useContext(FlightContext);

	const handleCardClick = () => {
		// verificar se o schedule já está ocupado
		// verificar se o aeroporto de destino foi o último
		// verificar se já passaram 20 minutos do último vôo

		

		toggleActiveFlight(flight);
	};

	return (
		<div>
			<div className="flight-card" onClick={handleCardClick}> 
				<span className="flight-id">{flight?.id}</span>
				<span>{flight?.origin} {'>'} {flight?.destination}</span>
				<span>{flight?.readable_departure} {'>'} {flight?.readable_arrival}</span>
			</div>
		</div>
	)
};

export default FlightCard;
