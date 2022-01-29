import { createContext, useContext, useEffect, useState } from 'react';
import { FlightContext } from './FlightContext';
import request from '../request';

export const AircraftContext = createContext({});

export function AircraftProvider({ children }) {
	const { activeFlights } = useContext(FlightContext);

	const [aircrafts, setAircrafts] = useState([]);
	const [isAircraftLoading, setIsAircraftLoading] = useState(true);
	const [currentAircraft, setCurrentAircraft] = useState(undefined);
	const [currentPercentage, setCurrentPercentage] = useState(0);

	const setPercentage = (percentage) => {
		setCurrentPercentage(percentage);
	};
	const selectAircraft = (aircraft) => {
		setCurrentAircraft(aircraft);
	};

	useEffect(() => {
		activeFlights.sort((first, second) => {
			if (first.departuretime < second.departuretime) {
				return -1;
			}
			else if (first.departuretime > second.departuretime) {
				return 1;
			}
			return 0;
		});
	}, [activeFlights]);

	useEffect(() => {
		request.get(`/aircrafts?limit=5&offset=0`).then((response) => {
			setAircrafts(response.data.data);
			setIsAircraftLoading(false);
		});
	}, []);

	return (
		<AircraftContext.Provider value={{
			aircrafts,
			isAircraftLoading,
			currentAircraft,
			selectAircraft,
			currentPercentage,
			setPercentage
		}}>
			{children}
		</AircraftContext.Provider>
	)
}
