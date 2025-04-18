'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import googleCalendarPlugin from '@fullcalendar/google-calendar';




export default function GCalendar({bgcolor, api, calendarId, name}: {bgcolor: string, api: string|undefined , calendarId: string | undefined, name: string}) {



   
      // eventSources={[{ googleCalendarId: myGoogleCalendarID }]}


  return (

    <div className="w-lg lg:w-3/5 ">
      
        <h2>{name}</h2>
        <FullCalendar
          plugins={[ dayGridPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          eventColor={bgcolor}
          contentHeight={350}
          aspectRatio={2}
          themeSystem='default'
          buttonIcons={false}
          googleCalendarApiKey={api}
          eventSources={[{ googleCalendarId: calendarId }]}
          
        />
    
      
    </div>
  )
}