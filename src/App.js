import './App.css';
import { NavDate, Aircrafts, Flight, Rotation } from './components';

function App() {
	return (
		<div className="App">
			<div className="nav-date">
				<NavDate />
			</div>
			<div className="main-container">
				<Aircrafts />
				<Rotation />
				<Flight />
			</div>
		</div>
	);
}

export default App;
