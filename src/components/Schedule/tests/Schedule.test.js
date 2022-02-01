import * as React from 'react';
import { render } from '@testing-library/react';
import Schedule from '../Schedule';
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

describe('<Schedule />', () => {
    it('should render correctly', () => {
        const mockFlightContext = {
            activeFlights: [
                mockFlightCardProps,
            ],
        };

        const { container } = render(
            <FlightContext.Provider value={mockFlightContext}>
                <Schedule {...mockFlightCardProps} />
            </FlightContext.Provider>
        );

        expect(container).toMatchSnapshot();
    });
});
