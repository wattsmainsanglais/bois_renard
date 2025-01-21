'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default function GCalendar({api}: {api: string|undefined}) {

      

      const myGoogleCalendarID = "wattsmainsanglais@gmail.com";



  return (
    <div style={{width: '50%'}}>
    <FullCalendar
      plugins={[ dayGridPlugin, googleCalendarPlugin ]}
      initialView="dayGridMonth"
      googleCalendarApiKey={api}
      eventSources={[{ googleCalendarId: myGoogleCalendarID }]}
    />
    </div>
  )
}