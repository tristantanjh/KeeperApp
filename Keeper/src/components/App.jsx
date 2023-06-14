import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
    const defaultNote = {
        id: uuidv4(),
        title: "Title of Note",
        content: "Content of Note"
    };

    const [listOfNotes, setListOfNotes] = useState([defaultNote]);

    function newNote(note) {
        const newNote = {
            id: uuidv4(),
            ...note,
        };
        setListOfNotes(prevList => [...prevList, newNote]);
    }

    function deleteNote(id) {
        setListOfNotes(prevList => {
            return prevList.filter((note) => note.id !== id);
        })
    }

    return (
        <div>
        <Header/>
        <CreateArea createNewNote={newNote} />
        {listOfNotes.map((note) => {
            return <Note 
                key={note.id} 
                id={note.id}
                title={note.title} 
                content={note.content} 
                delete={deleteNote}
            />
        })}
        <Footer />
        </div>
    );
}

export default App;
