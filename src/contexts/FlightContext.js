import request from '../request';
import { createContext, useEffect, useState } from 'react';

export function FlightProvider({ children }) {
	const [flights, setFlights] = useState([]);
	const [activeFlights, setActiveFlights] = useState([]);
	const [offset, setOffset] = useState(-1);
	const [hasFlightsRemaining, setHasFlightsRemaining] = useState(true);
	const paginationLimit = 25;

	const toggleActiveFlight = (flight) => {
		let isFlightOnList = false;

		activeFlights.forEach((activeInfo) => {
			if (activeInfo.id === flight.id) {
				isFlightOnList = true;
			}
		});

		isFlightOnList ? 
			setActiveFlights(activeFlights.filter(activeInfo => activeInfo.id !== flight.id))
			: setActiveFlights([...activeFlights, flight]);
	}

	useEffect(() => {
		if (!hasFlightsRemaining) {
			return;
		}

		async function fetchData() {
			try {
				const newOffset = offset + 1;
				const response = await request.get(`/flights?limit=${paginationLimit}&offset=${newOffset}`);

				setOffset(newOffset);
				setFlights([...flights, ...response?.data?.data]);

				if (paginationLimit * (newOffset + 1) > response?.data?.pagination?.total) {
					setHasFlightsRemaining(false);
				}
			} catch (error) {
				console.log('Failed to load !');
			};
		}

		fetchData();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [flights, hasFlightsRemaining]);

	return (
		<FlightContext.Provider value={{
			flights,
			toggleActiveFlight,
			activeFlights
		}}>
			{ children }
		</FlightContext.Provider>
	)
}

export const FlightContext = createContext({});