import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { TwitterTimelineEmbed } from "react-twitter-embed";
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
        <div className="row py-3">
          <div className="col-md-6">
            <div className="twitter">
            <span className="twitter-icon">
                <AiOutlineTwitter size={"50px"} />
              </span>
           
            <div>
            
              <TwitterTimelineEmbed
                sourceType="profile"
                // colorScheme="dark"
                screenName="SomniumSpace"
                options={{ height: 500 }}
              />
            </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="twitter">
            <span className="twitter-icon">
                <AiOutlineTwitter size={"50px"} />
              </span>
           
            <div>
            {/* <Embed url='https://www.youtube.com/watch?v=qrnSoUoqBNU&ab_channel=Lt.Gen.AmjadShuaib' width={300} /> */}
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Community;
