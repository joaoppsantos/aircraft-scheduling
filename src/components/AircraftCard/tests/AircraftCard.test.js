import * as React from 'react';
import { render } from '@testing-library/react';
import AircraftCard from '../AircraftCard';
import { AircraftContext } from '../../../contexts/AircraftContext';
import { FlightContext } from '../../../contexts/FlightContext';
import { aircraftMock, flightMock } from '../../../tests/mocks/mocks';

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
                    <AircraftCard {...aircraftMock} />
                </FlightContext.Provider>
            </AircraftContext.Provider>
        );

        expect(container).toMatchSnapshot();
    });
});
