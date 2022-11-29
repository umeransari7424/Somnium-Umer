import React from 'react'

const Available = () => {
  return (
    <div className='available'>
        <div className="container  py-4">
            <div className="row">
                <div className='col-md-3 col-12 now text-end py-3'>
                    <div>
                        <h1 className='mt-2'>Available Now</h1>
                    </div>
                </div>
                    <div className='col-md-3 col-12 now text-end py-3'>
                        <img src="Assets/window.png" alt="window" /> &nbsp; &nbsp; &nbsp;&nbsp;
                        <img src="Assets/oclus.png" alt="window" />
                    </div>
                   
                    <div className='col-md-3 col-12 now text-start py-3'>
                        <img src="Assets/vive.png" alt="window" />&nbsp; &nbsp; &nbsp;&nbsp;
                        <img src="Assets/steam.png" alt="window" />
                    </div>
                    <div className='col-md-3 col-12 now text-start py-3'>
                        <h1 className='mt-2'>Ready Now</h1>
                    </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Available