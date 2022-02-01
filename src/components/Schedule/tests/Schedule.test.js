import * as React from 'react';
import { render } from '@testing-library/react';
import Schedule from '../Schedule';
import { FlightContext } from '../../../contexts/FlightContext';
import { flightMock } from '../../../tests/mocks/mocks';

describe('<Schedule />', () => {
    it('should render correctly', () => {
        const mockFlightContext = {
            activeFlights: [
                flightMock,
            ],
        };

        const { container } = render(
            <FlightContext.Provider value={mockFlightContext}>
                <Schedule {...flightMock} />
            </FlightContext.Provider>
        );

        expect(container).toMatchSnapshot();
    });
});
