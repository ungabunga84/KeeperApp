import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  
    const [notes, setNewNote] = useState([]);
      
  
    function addItem(newNote) {
      setNewNote(prevItems => {
        return [...prevItems, newNote];
      });
      
    }

    function deleteNote(id) {
      setNewNote(prevItems => {
        return prevItems.filter((item, index) => {
          return index !== id;
        });
      });
    }




  return (
    <div>
      <Header />
      <CreateArea addNote={addItem}/>
      
      {notes.map((note, index) => (
        <Note
            key={index}
            title={note.title}
            content={note.content}
            id={index}
            onPressDel={deleteNote}
            />
          ))}
        
       <div><Footer /></div>   
      
    </div>
  );
}

export default App;
