import * as React from 'react';
import { render } from '@testing-library/react';
import Aircrafts from '../Aircrafts';
import { AircraftContext } from '../../../contexts/AircraftContext';
import { FlightContext } from '../../../contexts/FlightContext';

const flightMock = {
    "id": "AS1001",
    "departuretime": 21600,
    "arrivaltime": 26100,
    "readable_departure": "06:00",
    "readable_arrival": "07:15",
    "origin": "LFSB",
    "destination": "LFMN"
};

describe('<Aircrafts />', () => {
    it('should render correctly', () => {
        const mockFlightContext = {
            activeFlights: [
                flightMock,
            ],
        };
        const mockAircraftContext = {
            aircrafts: [
                {
                    "ident": "GABCD",
                    "type": "A320",
                    "economySeats": 186,
                    "base": "EGKK"
                }
            ],
            selectAircraft: jest.fn(),
            currentPercentage: "50",
            setPercentage: jest.fn()
        }

        const { container } = render(
            <AircraftContext.Provider value={mockAircraftContext}>
                <FlightContext.Provider value={mockFlightContext}>
                    <Aircrafts />
                </FlightContext.Provider>
            </AircraftContext.Provider>
        );

        expect(container).toMatchSnapshot();
    });
});
