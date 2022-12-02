import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import {GrFacebookOption} from "react-icons/gr";
import {SiDiscord} from "react-icons/si";
// import { FacebookProvider, Like } from 'react-facebook';
import { FacebookEmbed } from 'react-social-media-embed';
import Embed from 'react-embed';


const Community = () => {
  return (
    <div className="community">
      <div className="container text-center py-5">
        <div className="row py-3">
          <h4>KEEP IN TOUCH WITH</h4>
          <h1>SOMNIUM COMMUNITY</h1>
          <h4>Share your thoughts with Us and the World</h4>
        </div>
        <div className="row py-3 ">
          <h5>
            We are an open social world. Our community is the most important
            thing. We are active and happy to <br /> answer every question
            through our live channels or through our social channels.
          </h5>
        </div>
        <div className="row text-center">
          <div className="col-md-8 py-3">
          
            <div className="twitter">
            <span className="discord-icon">
                <SiDiscord size={"50px"} />
              </span>
           
            <div className="discord">
            <iframe src="https://e.widgetbot.io/channels/494994753146847233/496817347211034630" width="1100" height="400"></iframe>
            </div>
            
          </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-6 py-3">
            <div className="twitter">
            <span className="twitter-icon">
                <AiOutlineTwitter size={"50px"} />
              </span>
           
            <div>
            
              <TwitterTimelineEmbed
                sourceType="profile"
                // colorScheme="dark"
                screenName="SomniumSpace"
                options={{ height: 550,width:450 }}
              />
            </div>
            </div>
          </div>
          <div className="col-md-6 py-3">
            <div className="twitter">
            <span className="twitter-icon">
                <GrFacebookOption size={"50px"} />
              </span>
           
            <div className="facebook">
            <iframe
            
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSomniumSpace&amp;tabs=timeline&amp;width=500&amp;height=600&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
              width="550"
              height="550"
              scrolling="no"
              frameborder="0"
              allow="encrypted-media"
            ></iframe>
            {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="400" height="550" scrolling="no" frameborder="0" allowfullscreen="true" ></iframe> */}
            </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='social'>
        <div className="container  py-4">
        <div className="row">
        <div className='col-md-1 '></div>
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
    </div>
  );
};

export default Community;
