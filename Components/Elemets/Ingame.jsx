import React from 'react'

const Ingame = () => {
  return (
    <div className='ingame'>
        <div className="container text-center py-5">
            <div className="row py-5">
                <h4>SOMNIUM SPACE</h4>
                <h1>INGAME MECHANICS</h1>
            </div>
            <div className="row ">
                <div className="col-md-4 text-end ingame-para">
                    <h3>Cross Platform</h3>
                    <p>Available on all major VR headsets.</p>
                </div>
                <div className="col-md-2">
                    <img src="Assets/cross.png" alt="cross platform" />
                </div>
                <div className="col-md-2 ">
                    <img src="Assets/persistance.png" alt="cross platform" />
                </div>
                <div className="col-md-4 text-start">
                    <h3>Persistent Social VR World</h3>
                    <p>Unlimited scalable world built by users within one instance.</p>
                </div>

            </div>
            <div className="row ">
                <div className="col-md-4 text-end ingame-para">
                    <h3>Customizable PC Client</h3>
                    <p>
Create and adjust your own layout setup for fast in-game interaction.</p>
                </div>
                <div className="col-md-2 imgame-pic">
                    <img src="Assets/client.png" alt="cross platform" />
                </div>
                <div className="col-md-2 ">
                    <img src="Assets/virtual.png" alt="cross platform" />
                </div>
                <div className="col-md-4 text-start">
                    <h3>Virtual Land Ownership</h3>
                    <p>
Buy and customize your own land. Build anything you envision.</p>
                </div>

            </div>
            <div className="row ">
                <div className="col-md-4 text-end ingame-para">
                    <h3>Live Forever</h3>
                    <p>Automatic recording mode of yourself on your own property for future AI analysis to bring your avatar to life.</p>
                </div>
                <div className="col-md-2 imgame-pic">
                    <img src="Assets/live.png" alt="cross platform" />
                </div>
                <div className="col-md-2 ">
                    <img src="Assets/scriptable.png" alt="cross platform" />
                </div>
                <div className="col-md-4 text-start">
                    <h3>Scriptable World</h3>
                    <p>Program your own experience and monetize through the asset store or on your property.</p>
                </div>

            </div>
            <div className="row ">
                <div className="col-md-4 text-end ingame-para">
                    <h3>Blockchain</h3>
                    <p>
Integration of blockchain allows true ownership of digital goods, avatars, items and virtual land. We are creating a long lasting Economy which will allow instant monetization for our in-world creators.</p>
                </div>
                <div className="col-md-2 imgame-pic">
                    <img src="Assets/blockchain.png" alt="cross platform" />
                </div>
                <div className="col-md-2  ">
                    <img src="Assets/monetize.png" alt="cross platform" />
                </div>
                <div className="col-md-4 text-start">
                    <h3>Monetize Your Space</h3>
                    <p>
Take advantage of fully programmatic VR advertisement plugin. Capture and analyze gaze tracking, engagement and conversion rates.</p>
                </div>

            </div>
            
            
        </div>
        <div className='available'>
        <div className="container  py-3">
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
        
    </div>
  )
}

export default Ingame