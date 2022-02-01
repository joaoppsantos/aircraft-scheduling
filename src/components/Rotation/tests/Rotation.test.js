import * as React from 'react';
import { render } from '@testing-library/react';
import Rotation from '../Rotation';
import { FlightContext } from '../../../contexts/FlightContext';
import { flightMock } from '../../../tests/mocks/mocks';

describe('<Rotation />', () => {
    it('should render correctly', () => {
        const mockFlightContext = {
            activeFlights: [
                flightMock,
            ],
        };
        
        const { container } = render(
            <FlightContext.Provider value={mockFlightContext}>
                <Rotation />
            </FlightContext.Provider>
        );

        expect(container).toMatchSnapshot();
    });
});
