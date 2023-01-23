import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  function expand (){
    setExpanded(true);
  };

const [inputText, setInputText] = useState({
  title: "",
  content: ""
});

function handleChange(event){
  const { name, value } = event.target
  setInputText(prevValue => {
    return {
 ...prevValue,
 [name]: value
};
});
};

function handleClicl(event){
  event.preventDefault();
  props.addNote(inputText); 
  setInputText({title: "", content: ""});
}

  return (
    <div>
      <form className="create-note">
        <input className={!isExpanded ? "waitToClick" : null} name="title" placeholder={!isExpanded ? "Click here to create a new note" : "Title"} onChange={handleChange} value={inputText.title} onFocus={expand}/>
        {isExpanded && <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={inputText.content}/>}
        {isExpanded && <Zoom in={true}><Fab type="submit" onClick={handleClicl} aria-label="add"><AddIcon /></Fab></Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
