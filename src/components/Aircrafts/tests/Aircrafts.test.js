import * as React from 'react';
import { render } from '@testing-library/react';
import Aircrafts from '../Aircrafts';
import { AircraftContext } from '../../../contexts/AircraftContext';
import { FlightContext } from '../../../contexts/FlightContext';
import { aircraftMock, flightMock } from '../../../tests/mocks/mocks';

describe('<Aircrafts />', () => {
    it('should render correctly', () => {
        const mockFlightContext = {
            activeFlights: [
                flightMock,
            ],
        };
        const mockAircraftContext = {
            aircrafts: [
                aircraftMock
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
