'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Calendar } from '@fullcalendar/core';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import googleCalendarPlugin from '@fullcalendar/google-calendar';




export default function GCalendar({api, calendarId, name}: {api: string|undefined , calendarId: string | undefined, name: string}) {



   
      // eventSources={[{ googleCalendarId: myGoogleCalendarID }]}


  return (
    <div style={{width: '100%'}}>
    <h2>{name}</h2>
    <FullCalendar
      plugins={[ dayGridPlugin, googleCalendarPlugin, bootstrap5Plugin ]}
      initialView="dayGridMonth"
      eventColor='#378006'
      contentHeight={350}
      aspectRatio={2}
      themeSystem='bootstrap5'
      googleCalendarApiKey={api}
      eventSources={[{ googleCalendarId: calendarId }]}
      
    />
   
    </div>
  )
}