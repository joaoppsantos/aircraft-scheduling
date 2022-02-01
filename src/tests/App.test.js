import * as React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { AircraftContext } from '../contexts/AircraftContext';
import { FlightContext } from '../contexts/FlightContext';
import { aircraftMock, flightMock } from '../tests/mocks/mocks';

beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2022, 1, 1));
});

afterAll(() => {
    jest.useRealTimers();
});

describe('<App />', () => {
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
					<App {...aircraftMock} />
				</FlightContext.Provider>
			</AircraftContext.Provider>
		);

		expect(container).toMatchSnapshot();
	});
});
