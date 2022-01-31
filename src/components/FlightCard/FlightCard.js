import './FlightCard.css';
import { useContext } from 'react';
import { FlightContext } from '../../contexts/FlightContext';

const FlightCard = flight => {
	const { activeFlights, toggleActiveFlight } = useContext(FlightContext);

	const handleCardClick = () => {
		let lastFlight = activeFlights[activeFlights.length - 1];
		let twentyMinutes = 1200; // 20 * 60
		let isFlightToggled = false;

		activeFlights.forEach(activeFlight => {
			if (activeFlight.id === flight.id) {
				toggleActiveFlight(flight);
				isFlightToggled = true;
			}
		});

		if (!!isFlightToggled) {
			return;
		}

		if (lastFlight === undefined) {
			toggleActiveFlight(flight);
		} 
		else if (lastFlight?.arrivaltime + twentyMinutes < flight.departuretime &&
				lastFlight?.destination === flight?.origin) {
			toggleActiveFlight(flight);
		}
		else {
			alert('Invalid Rotation');
		}
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
