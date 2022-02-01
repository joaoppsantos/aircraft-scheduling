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
                scheduledService = document.createElement("div"),
                turnaroundTime = document.createElement("div");

            let setDepartureWidth = offsetWidth / 24 * departureWidth + offsetLeft,
                setArrivalWidth = offsetWidth / 24 * arrivalWidth + offsetLeft,
                flightWidth = (setArrivalWidth - setDepartureWidth);

            scheduledService.setAttribute("id", flight.id);
            turnaroundTime.setAttribute("id", flight.id);
            scheduledService.setAttribute("style", "background-color: #6fdb95; height: 35px; margin-top: 3px; position: absolute; width: "+flightWidth+"px; left: "+setDepartureWidth+"px;");
            turnaroundTime.setAttribute("style", "background-color: #ae59e3; height: 35px; margin-top: 3px; position: absolute; width: "+15+"px; left: "+setArrivalWidth+"px;");
            document.getElementById("schedule").appendChild(scheduledService);
            document.getElementById("schedule").appendChild(turnaroundTime);
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
