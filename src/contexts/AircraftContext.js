import { createContext, useEffect, useState } from 'react';
import request from '../request';

export const AircraftContext = createContext({});

export function AircraftProvider({ children }) {
	const [aircrafts, setAircrafts] = useState([]);
	const [isAircraftLoading, setIsAircraftLoading] = useState(true);
	const [currentAircraft, setCurrentAircraft] = useState(undefined);
	const [currentPercentage, setCurrentPercentage] = useState(0);

	const setPercentage = percentage => {
		setCurrentPercentage(percentage);
	};
	const selectAircraft = aircraft => {
		setCurrentAircraft(aircraft);
	};

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
