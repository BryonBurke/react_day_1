import React from "react";

function Feed(props){
  var feedHeaderStyles = {
    backgroundColor:"white",
    color:"lightskyblue",
    border:"solid lightskyblue",
    padding:"5px 70px 5px 5px"


  }
  var feedHeaderBackgroundStyles = {
    backgroundColor: "lightblue",
    padding: "5px 10px 5px 30px",
    minWidth: "500px"
  }


  var profilePicStyle = {
    maxWidth: "30px",
    maxHeight:"30px",
    margin:"0",
    padding:"0",


  }
  var feedBodyStyle = {
    margin:"0",
        padding:"0",
        minWidth: "500px"
  }




  return (
    <div>
    <table>
      <tr>

      <div style={feedHeaderBackgroundStyles}>
      <h3 >⬛️ <span style={feedHeaderStyles}>What's happening?</span></h3>
        </div>

      </tr>

      <tr>
      <div style={feedBodyStyle}>
        <td>
          <img style={profilePicStyle} src="https://www.cloudraxak.com/wp-content/uploads/2017/03/profile-pic-placeholder.png"></img>
        </td>

        <td>
          <h2>Lorum ipsum</h2>
          <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
        </td>
        </div>
      </tr>

      <tr>
      </tr>

      <tr>
      </tr>

    </table>
    </div>
  );
}

export default Feed;
