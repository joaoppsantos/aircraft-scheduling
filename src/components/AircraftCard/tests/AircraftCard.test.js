import * as React from 'react';
import { render } from '@testing-library/react';
import AircraftCard from '../AircraftCard';
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
const mockAircraftProps = {
    ident: "GABCD",
    economySeats: 186,
    base: "EGKK",
    type: "A320",
};

describe('<AircraftCard />', () => {
    it('should render correctly', () => {
        const mockFlightContext = {
            activeFlights: [
                flightMock,
            ],
        };
        const mockAircraftContext = {
            selectAircraft: jest.fn(),
            currentPercentage: "50",
            setPercentage: jest.fn()
        }

        const { container } = render(
            <AircraftContext.Provider value={mockAircraftContext}>
                <FlightContext.Provider value={mockFlightContext}>
                    <AircraftCard {...mockAircraftProps} />
                </FlightContext.Provider>
            </AircraftContext.Provider>
        );

        expect(container).toMatchSnapshot();
    });
});
