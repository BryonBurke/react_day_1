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

  var feedStyle = {
    border: "solid lightskyblue",
    padding: "5px 150px 5px 10px",
    borderRadius: "30px",
    float: "right",
    // margin: "0px 50px 0px 0px",
    color: "grey"
  }

  var profilePicStyle = {
    maxWidth: "75px",
    maxHeight:"75px",

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
        <td>
          <img style={profilePicStyle} src="https://www.cloudraxak.com/wp-content/uploads/2017/03/profile-pic-placeholder.png"></img>
        </td>

        <td>
          <h2>Lorum ipsum</h2>
          <h3>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </h3>
        </td>
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
