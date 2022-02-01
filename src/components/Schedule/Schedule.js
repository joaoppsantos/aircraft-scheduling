import './Schedule.css';
import { useContext, useEffect } from 'react';
import { FlightContext } from '../../contexts/FlightContext';

const Schedule = () => {
    const {
        activeFlights,
    } = useContext(FlightContext);

    const arrayList = new Array(24).fill();
    const convertInHours = (seconds) => seconds/3600;

    useEffect(() => {
        let offsetWidth = document.getElementById('schedule_id')?.offsetWidth,
            offsetLeft  = document.getElementById('schedule_id')?.offsetLeft;

        const scheduleId = document.getElementById("schedule");
        const e = scheduleId.querySelectorAll("div");

        for (let i = 0; i < e.length; i++) {
            if (!!e[i]) {
                e[i].remove();
            }
        }

        activeFlights.forEach(flight => {
            let departureWidth = convertInHours(flight.departuretime),
                arrivalWidth = convertInHours(flight.arrivaltime),
                elementDiv = document.createElement("div");

            let setDepartureWidth = offsetWidth / 24 * departureWidth + offsetLeft,
                setArrivalWidth = offsetWidth / 24 * arrivalWidth + offsetLeft,
                flightWidth = (setArrivalWidth - setDepartureWidth) + 15;

            elementDiv.setAttribute("id", flight.id);
            elementDiv.setAttribute("style", "background-color: #add8e6; height: 35px; margin-top: 3px; position: absolute; width: "+flightWidth+"px; left: "+setDepartureWidth+"px;");
            document.getElementById("schedule").appendChild(elementDiv);
        })
	}, [activeFlights])

    return (
        <div className="schedule" id="schedule">
            {arrayList.map((_,index) => (
                <span key={index} className="hour-schedule">
                    {index}
                </span>
            ))}
        </div>
    );
}

export default Schedule;
