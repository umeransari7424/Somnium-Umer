import React from 'react'

const Social = () => {
  return (
    <div className='social'>
        <div className="container  py-4">
        <div className="row">
        {/* <div className='col-md-1 '></div> */}
            <div className='col-md-2 col-4 text-center tele py-2'>
                <img src="Assets/tele.png" alt="tele" />
            </div>
            <div className='col-md-2 col-4 text-center tele py-2'>
                <img src="Assets/insta.png" alt="tele" />
            </div>
            <div className='col-md-2 col-4 text-center tele py-2'>
                <img src="Assets/web.png" alt="tele" />
            </div>
            <div className='col-md-2 col-4 text-center tele py-2'>
                <img src="Assets/medium.png" alt="tele" />
            </div>
            <div className='col-md-2 col-4 text-center tele py-2'>
                <img src="Assets/linkedin.png" alt="tele" />
            </div>
            {/* <div className="col-md-1"></div> */}
        </div>
        </div>

    </div>
  )
}

export default Social