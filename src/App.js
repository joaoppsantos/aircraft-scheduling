import './App.css';
import { AircraftProvider } from './contexts/AircraftContext';
import { FlightProvider } from './contexts/FlightContext';
import { NavDate, Aircrafts, Flight, Rotation } from './components';

function App() {
	const mainComponents = [<Aircrafts />, <Rotation />, <Flight />];

	return (
		<FlightProvider>
			<AircraftProvider>
				<div className="app">
					<div className="nav-date">
						<NavDate />
					</div>
					<div className="main-container">
						{mainComponents.map((component, index) => (
								<div key={index} className="element-container">
									{component}
								</div>
							)
						)}
					</div>
				</div>
			</AircraftProvider>
		</FlightProvider>
	);
}

export default App;
