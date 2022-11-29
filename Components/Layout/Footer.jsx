import React from 'react'
import {FaDiscord , FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineTwitter ,AiOutlineInstagram , AiFillYoutube} from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container-fluid px-4 py-5">
            <div className="row">
                <div className="col-md-3 col-12 my-3">
                    <div>
                        <img src="Assets/somnium.png" alt="somniumlogo" />
                    </div> <br />
                    <div>
                    © 2022 by Somnium Space LTD. Somnium Space and Somnium Space Logo are trademarks of Somnium Space LTD. All other trademarks are the property of their respective owners. All rights reserved.
                    </div>
                </div>
                <div className="col-md-6 col-12 text-center my-3">
                    <div className=' getsomnium d-flex justify-content-between'>
                    <div className='py-3'>
                        <div>
                            Get Somnium
                        </div> <br />
                        <div>
                            Events
                        </div>
                    </div>
                    <div className='py-3'>
                        <div>
                            Partners
                        </div> <br />
                        <div>
                            Support
                        </div>
                    </div>
                    <div className='py-3'>
                        <div>
                            Terms of Service
                        </div> <br />
                        <div>
                            Privacy Policy
                        </div>
                    </div>
                    <div className='py-3'>
                        <div>
                            FAQ
                        </div> <br />
                        <div>
                            Contact
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 col-12  text-center my-3 ">
                    <div >
                        <div >
                        <FaDiscord size={"60px"} style={{padding:"6px",border:"3px solid" , borderRadius:"50%"}}/> &nbsp; &nbsp; &nbsp;
                        <GrFacebookOption size={"60px"} style={{padding:"6px",border:"3px solid" , borderRadius:"50%"}}/>&nbsp; &nbsp; &nbsp; 
                        <AiOutlineTwitter size={"60px"} style={{padding:"6px",border:"3px solid" , borderRadius:"50%"}}/>&nbsp; &nbsp; &nbsp; 
                        </div> 
                        <br />
                        <div >
                        <AiOutlineInstagram size={"60px"} style={{padding:"6px",border:"3px solid" , borderRadius:"50%"}}/>&nbsp; &nbsp; &nbsp; 
                        <FaTelegramPlane size={"60px"} style={{padding:"10px",border:"3px solid" , borderRadius:"50%"}}/>&nbsp; &nbsp; &nbsp; 
                        <AiFillYoutube size={"60px"} style={{padding:"6px",border:"3px solid" , borderRadius:"50%"}}/>&nbsp; &nbsp; &nbsp; 
                        </div> 
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer