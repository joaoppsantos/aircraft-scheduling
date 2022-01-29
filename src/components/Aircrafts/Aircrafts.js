import './Aircrafts.css';
import { useContext } from 'react';
import { AircraftCard } from '../AircraftCard';
import { AircraftContext } from '../../contexts/AircraftContext';

const Aircrafts = () => {
	const {
		aircrafts
	} = useContext(AircraftContext);

	return (
		<div className="aircrafts">
			Aircrafts
			{aircrafts.map((aircraft, index) => {
                return <AircraftCard key={index} {...aircraft} />
            })}
		</div>
	);
}

export default Aircrafts;
