import './AircraftCard.css';
import { useContext, useEffect } from 'react';
import { AircraftContext } from '../../contexts/AircraftContext';
import { FlightContext } from '../../contexts/FlightContext';

const AircraftCard = aircraft => {
	const {
		selectAircraft,
		currentPercentage,
		setPercentage
	} = useContext(AircraftContext);

	const {
		activeFlights
	} = useContext(FlightContext);

	const handleAircraftClick = () => {
		selectAircraft(aircraft);
	}

	let flightTime = 0, secondsInADay = 86400, sumPercentage = 0;

	useEffect(() => {
		sumPercentage = 0;

		activeFlights.forEach(flight => {
			flightTime = flight.arrivaltime - flight.departuretime;

			sumPercentage += (flightTime/secondsInADay) * 100;
		})

		setPercentage(Math.round(sumPercentage));
	}, [activeFlights])
	
	return (
		<div className="aircraft-card" onClick={handleAircraftClick}> 
			<span>{aircraft?.ident}</span>
			<span>{currentPercentage}%</span>
		</div>
	);
}

export default AircraftCard;
