import './Schedule.css';
import { useContext, useEffect } from 'react';
import { FlightContext } from '../../contexts/FlightContext';

const Schedule = () => {
    const {
        activeFlights,
    } = useContext(FlightContext);

    const arrayList = new Array(24).fill(1);

    useEffect(() => {
        let offsetWidth = document.getElementById('schedule_id')?.offsetWidth;
        let offsetLeft = document.getElementById('schedule_id')?.offsetLeft;

        activeFlights.forEach(flight => {
            let departureWidth = flight.departuretime / 60 / 60;
            let arrivalWidth = flight.arrivaltime / 60 / 60;

            let setDepartureWidth = offsetWidth / 24 * departureWidth + offsetLeft;
            let setArrivalWidth = offsetWidth / 24 * arrivalWidth + offsetLeft;

            console.log(setDepartureWidth, setArrivalWidth, ' should set');

            //document.getElementById('hour_5').setAttribute("style","background-color:red; width: calc(4vh * 0.7)");
        })
	}, [activeFlights])

    return (
        <div className="schedule">
            {arrayList.map((array, index) => {
                return (
                    <div id={"hour_"+index} key={index} className="hour-schedule" />
                )
            })}
        </div>
    );
}

export default Schedule;
