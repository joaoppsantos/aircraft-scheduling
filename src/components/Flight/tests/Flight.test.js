import * as React from 'react';
import { render } from '@testing-library/react';
import Flight from '../Flight';
import { FlightContext } from '../../../contexts/FlightContext';
import { flightMock } from '../../../tests/mocks/mocks';

const flightsMock = [
    flightMock,                 
    {
        "id": "AS1002",
        "departuretime": 27900,
        "arrivaltime": 32100,
        "readable_departure": "07:45",
        "readable_arrival": "08:55",
        "origin": "LFMN",
        "destination": "LFSB"
    }
];

describe('<Flight />', () => {
    it('should render correctly', () => {
        const mockFlightContext = {
            flights: flightsMock,
        };

        const { container } = render(
            <FlightContext.Provider value={mockFlightContext}>
                <Flight />
            </FlightContext.Provider>
        );

        expect(container).toMatchSnapshot();
    });
});
