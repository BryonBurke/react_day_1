
import React from "react";


function Profile(props){


  var tableStyle = {


  }

  var backgroundTopStyle = {
    // backgroundImage:"linear-gradient(lightskyblue 60%, white 50%)"
    background:"lightskyblue",
    height:"100px",
    width:"330px",


  }

  var profileLinksStyle = {
    margin:"5px",
    fontSize:"10pt"


  }

  var bottomRowStyle = {
    border: "5px solid lightgrey",
    height:"100px",
    width:"320px",
    color:"grey",
    // position:"absolute",
    // zIndex:"-1"

  }

  var profilePicStyle = {
    maxWidth: "75px",
    maxHeight:"75px",
    position:"absolute",
    zIndex:"1",
    top:"150px",
    left:"20px",
    borderRadius:"20px",
    border:"solid white"
  }

  var nameStyle = {
    position:"relative",
    left:"100px"
  }

  return (
    <div>

      <div style={backgroundTopStyle}>

      </div>
      <img style={profilePicStyle} src="https://www.cloudraxak.com/wp-content/uploads/2017/03/profile-pic-placeholder.png"></img>
      <div style={bottomRowStyle}>

        <h2 style={nameStyle}>Kellie A. Corrigan</h2>
        <span style={profileLinksStyle}>TWEETS</span>
        <span style={profileLinksStyle}>FOLLOWING</span>
        <span style={profileLinksStyle}>FOLLOWERS</span>
      </div>
    </div>






  );
}

export default Profile;
