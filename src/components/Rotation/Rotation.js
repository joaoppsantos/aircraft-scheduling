import './Rotation.css';
import { useContext } from 'react';
import { FlightContext } from '../../contexts/FlightContext';
import { FlightCard } from '../FlightCard/';

const Rotation = () => {
    const {
        activeFlights,
      } = useContext(FlightContext);

    return (
        <div className="rotation">
            Rotation
			{activeFlights.map((flight, index) => {
                return <FlightCard key={index} {...flight} />
            })}
        </div>
    );
}

export default Rotation;
