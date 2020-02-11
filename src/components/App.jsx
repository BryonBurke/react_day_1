import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Description from "./Description";
import Feed from "./Feed";



function App(){
  return (
    <div>
      <Navbar/>
      <table>
      <tr>
      <td>
      <Profile/>
      <Description/>
      </td>

      <td>
      <Feed/>
      </td>
      </tr>
      </table>
    </div>
  );
}

export default App;
