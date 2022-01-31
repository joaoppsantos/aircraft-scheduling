import * as React from 'react';
import { render } from '@testing-library/react';
import FlightCard from '../FlightCard';
import { FlightContext } from '../../../contexts/FlightContext';

const mockFlightCardProps = {
    "id": "AS1001",
    "departuretime": 21600,
    "arrivaltime": 26100,
    "readable_departure": "06:00",
    "readable_arrival": "07:15",
    "origin": "LFSB",
    "destination": "LFMN"
};

describe('<FlightCard />', () => {
    it('should render correctly', () => {
        const mockFlightContext = {
            activeFlights: [
                mockFlightCardProps,
            ],
            toggleActiveFlight: jest.fn(),
        };

        const { container } = render(
            <FlightContext.Provider value={mockFlightContext}>
                <FlightCard {...mockFlightCardProps} />
            </FlightContext.Provider>
        );

        expect(container).toMatchSnapshot();
    });
});
