import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { AircraftContext } from './contexts/AircraftContext';
import { FlightContext } from './contexts/FlightContext';

beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2022, 1, 1));
});

afterAll(() => {
    jest.useRealTimers();
});

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
					<App {...mockAircraftProps} />
				</FlightContext.Provider>
			</AircraftContext.Provider>
		);

		expect(container).toMatchSnapshot();
	});
});
