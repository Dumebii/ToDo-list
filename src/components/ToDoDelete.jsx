import React, {useState} from "react"

function DeleteItem(props) {

    return(
      <li onClick={() =>
      props.delete(props.id)}
      >
      {props.text}</li>
    )

}

export default DeleteItem
