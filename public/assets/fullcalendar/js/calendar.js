// // assets/fullcalendar/lib/main.js
// document.addEventListener('DOMContentLoaded', function() {

//     /* initialize the external events
//     -----------------------------------------------------------------*/

//     var containerEl = document.getElementById('external-events-list');
//     new FullCalendar.Draggable(containerEl, {
//       itemSelector: '.fc-event',
//       eventData: function(eventEl) {
//         return {
//           title: eventEl.innerText.trim()
//         }
//       }
//     });

//     //// the individual way to do it
//     // var containerEl = document.getElementById('external-events-list');
//     // var eventEls = Array.prototype.slice.call(
//     //   containerEl.querySelectorAll('.fc-event')
//     // );
//     // eventEls.forEach(function(eventEl) {
//     //   new FullCalendar.Draggable(eventEl, {
//     //     eventData: {
//     //       title: eventEl.innerText.trim(),
//     //     }
//     //   });
//     // });

//     /* initialize the calendar
//     -----------------------------------------------------------------*/

//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       headerToolbar: {
//         left: 'prev,next today',
//         center: 'title',
//         right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
//       },
//       locale: 'hy-am', //added change language
//       navLinks:true,  //added click date to see to do list 
//       selectable: true,
//       editable: true,
//       droppable: true, // this allows things to be dropped onto the calendar
//       // drop: function(arg) {
//       //   if (document.getElementById('drop-remove').checked) {
//       //     arg.draggedEl.parentNode.removeChild(arg.draggedEl);
//       //   }
//       // }, 
//       eventDrop: function (event){
//         alert('event drop')
//       },
//       eventClick: function (event){
//         alert('event click');
//       },
//       eventResize: function (event){
//         alert('event resize');
//       },
//       select: function (event){
//         alert('event selected');
//       },
//       events: [
//         {
//           "title": "All Day Event",
//           "start": "2022-03-01"
//         },
//         {
//           "title": "Long Event",
//           "start": "2022-03-07",
//           "end": "2022-03-10"
//         },
//         {
//           "id": "999",
//           "title": "Repeating Event",
//           "start": "2022-03-09T16:00:00-05:00"
//         },
//         {
//           "id": "999",
//           "title": "Repeating Event",
//           "start": "2022-03-16T16:00:00-05:00"
//         },
//         {
//           "title": "Conference",
//           "start": "2022-03-11",
//           "end": "2022-03-13"
//         },
//         {
//           "title": "Meeting",
//           "start": "2020-09-12T10:30:00-05:00",
//           "end": "2020-09-12T12:30:00-05:00"
//         },
//         {
//           "title": "Lunch",
//           "start": "2020-09-12T12:00:00-05:00"
//         },
//         {
//           "title": "Meeting",
//           "start": "2020-09-12T14:30:00-05:00"
//         },
//         {
//           "title": "Happy Hour",
//           "start": "2020-09-12T17:30:00-05:00"
//         },
//         {
//           "title": "Dinner",
//           "start": "2020-09-12T20:00:00"
//         },
//         {
//           "title": "Birthday Party",
//           "start": "2020-09-13T07:00:00-05:00"
//         },
//         {
//           "title": "Click for Google",
//           "url": "http://google.com/",
//           "start": "2020-09-28"
//         }
//       ],
//       eventColor: '#FF0043'
//     });
//     calendar.render();

//   });
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      initialDate: '2020-09-12',
      navLinks: true, // can click day/week names to navigate views
      businessHours: true, // display business hours
      editable: true,
      selectable: true,
      events: [
        {
          title: 'Business Lunch',
          start: '2020-09-03T13:00:00',
          constraint: 'businessHours'
        },
        {
          title: 'Meeting',
          start: '2020-09-13T11:00:00',
          constraint: 'availableForMeeting', // defined below
          color: '#257e4a'
        },
        {
          title: 'Conference',
          start: '2020-09-18',
          end: '2020-09-20'
        },
        {
          title: 'Party',
          start: '2020-09-29T20:00:00'
        },

        // areas where "Meeting" must be dropped
        {
          groupId: 'availableForMeeting',
          start: '2020-09-11T10:00:00',
          end: '2020-09-11T16:00:00',
          display: 'background'
        },
        {
          groupId: 'availableForMeeting',
          start: '2020-09-13T10:00:00',
          end: '2020-09-13T16:00:00',
          display: 'background'
        },

        // red areas where no events can be dropped
        {
          start: '2020-09-24',
          end: '2020-09-28',
          overlap: false,
          display: 'background',
          color: '#ff9f89'
        },
        {
          start: '2020-09-06',
          end: '2020-09-08',
          overlap: false,
          display: 'background',
          color: '#ff9f89'
        }
      ],
      eventColor: '#FF0043'
    });

    calendar.render();
  });