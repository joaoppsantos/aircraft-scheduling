import * as React from 'react';
import { render } from '@testing-library/react';
import FlightCard from '../FlightCard';
import { FlightContext } from '../../../contexts/FlightContext';
import { flightMock } from '../../../tests/mocks/mocks';

describe('<FlightCard />', () => {
    it('should render correctly', () => {
        const mockFlightContext = {
            activeFlights: [
                flightMock,
            ],
            toggleActiveFlight: jest.fn(),
        };

        const { container } = render(
            <FlightContext.Provider value={mockFlightContext}>
                <FlightCard {...flightMock} />
            </FlightContext.Provider>
        );

        expect(container).toMatchSnapshot();
    });
});
