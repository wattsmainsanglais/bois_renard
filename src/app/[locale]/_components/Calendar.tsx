'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Calendar } from '@fullcalendar/core';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import googleCalendarPlugin from '@fullcalendar/google-calendar';




export default function GCalendar({api}: {api: string|undefined}) {



      const myGoogleCalendarID = "wattsmainsanglais@gmail.com";
      // eventSources={[{ googleCalendarId: myGoogleCalendarID }]}


  return (
    <div style={{width: '40%'}}>
    <FullCalendar
      plugins={[ dayGridPlugin, googleCalendarPlugin, bootstrap5Plugin ]}
      initialView="dayGridMonth"
      eventColor='#378006'
      themeSystem='bootstrap5'
     
      events={[
        {
          id: 'a',
          title: 'my event',
          start: '2025-01-23'
        }
      ]}
      
    />
   
    </div>
  )
}