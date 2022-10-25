import React, { useEffect } from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    title: 'My event',
    start: new Date(),
    end: new Date(),
  },
];

const Home = (props) => {
  useEffect(() => {
    props.handlePageChange("Home");
  }, [props]);
  return (
    <main>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: 1000 }}
      />
    </main>
  )
}

export default Home