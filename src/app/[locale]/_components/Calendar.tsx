'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default function GCalendar() {

    

      const myGoogleCalendarID = "wattsmainsanglais@gmail.com";



  return (
    <div style={{width: '50%'}}>
    <FullCalendar
      plugins={[ dayGridPlugin, googleCalendarPlugin ]}
      initialView="dayGridMonth"
      googleCalendarApiKey="AIzaSyDjyGPeqouoFdc7qTbOAWb-MD84rdjfi_E"
      eventSources={[{ googleCalendarId: myGoogleCalendarID }]}
    />
    </div>
  )
}