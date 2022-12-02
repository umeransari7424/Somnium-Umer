import React from 'react'

const Events = () => {
  return (
    <div className='event'>
        <div className="container text-center">
            <div className="row py-5">
                <h4>STAY SHARP WITH UPCOMING EVENTS</h4>
                <h1>SOMNIUM EVENTS CALENDAR</h1>
                <h4>Have Fun and Share with your Friends our Weekly and Special Events</h4>
            </div>
            <div className="row py-5">
                <div className="col-md-2">
                        
                </div>
                <div className="col-md-5 cal2">
                    <div className='calander'>
                        <h3>Featured Events </h3>
                    </div>
                    <br />
                    <br />
                <div className='feature'>
                    <div>
                        <img src="Assets/event2.png" className='img-fluid e2' alt="event1" />
                    </div>
                    <div>
                        <img src="Assets/event1.png" className='img-fluid' alt="event1" />
                    </div>
                    

                </div>
                </div>
                <div className="col-md-5">
                    <div className='calander'>
                        <h3>Event Calendar</h3>
                    </div>
                    <br />
                    <br />
                <iframe src="https://calendar.google.com/calendar/embed?src=somnium.space.events%40gmail.com" width="400" height="400" scrolling="no" style={{border: "0px", borderRadius:" 5px"}}></iframe>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Events