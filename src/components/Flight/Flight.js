import './Flight.css';
import { useContext } from 'react';
import { FlightContext } from '../../contexts/FlightContext';
import { FlightCard } from '../FlightCard';

const Flight = () => {
	const {
		flights
	} = useContext(FlightContext);

    return (
        <div className="flight">
            Flight
            {flights.map((flight, index) => {
                return <FlightCard key={index} {...flight} />
            })}
        </div>
    );
}

export default Flight;
