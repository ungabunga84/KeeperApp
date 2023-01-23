import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Fab from '@mui/material/Fab';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={() => {
        props.onPressDel(props.id);
      }}><DeleteOutlineIcon /></Fab>
    </div>
  );
}

export default Note;
