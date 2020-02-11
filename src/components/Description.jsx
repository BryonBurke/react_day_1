import React from "react";

function Description(props){
  var descriptionStyle = {
    border: "solid lightgrey",
    borderWidth: "1px",
    padding: "40px 20px",
    textAlign: "center",
    color: "grey",
    margin: "25px 0px",
    maxHeight:"500px",
    maxWidth:"290px",
    fontSize:"20pt"

  }


  return (
    <div style={descriptionStyle}>
    <p >Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. </p>


    </div>
  );
}

export default Description;
