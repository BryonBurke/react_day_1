
import React from "react";


function Profile(props){


  var tableStyle = {


  }

  var backgroundTopStyle = {
    // backgroundImage:"linear-gradient(lightskyblue 60%, white 50%)"
    background:"lightskyblue",
    height:"100px",
    width:"300px"
  }

  var profileLinksStyle = {
    margin:"5px",
    fontSize:"10pt"

  }

  var bottomRowStyle = {
    border: "5px solid lightgrey",
    height:"100px",
    width:"290px"

  }
  return (
    <div>

      <div style={backgroundTopStyle}>

      </div>
      <div style={bottomRowStyle}>

        <h2>Kellie A. Corrigan</h2>
        <span style={profileLinksStyle}>TWEETS</span>
        <span style={profileLinksStyle}>FOLLOWING</span>
        <span style={profileLinksStyle}>FOLLOWERS</span>
      </div>
    </div>






  );
}

export default Profile;
