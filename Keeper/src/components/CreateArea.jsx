import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import {Collapse, Fab} from '@mui/material';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    const [areaClicked, setAreaClicked] = useState(false);

    function noteChange( {target: {name, value}}) {
        setNewNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function expandArea() {
        setAreaClicked(true);
    }

    function handleSubmit(event) {
        event.preventDefault(); 
        setNewNote({
            title: "",
            content: ""
        });
        if (newNote.title.trim() !== "" || newNote.content.trim() !== "") {
            props.createNewNote(newNote);
        }
    }

    return (
        <Zoom in={true} timeout={300}>
            <div>
                <form className="create-note">
                    <Collapse in={areaClicked} timeout={300}>
                    <input
                        name="title"
                        placeholder="Title"
                        onChange={noteChange}
                        value={newNote.title}
                        maxLength={25}
                        style={{ fontWeight: 'bold' }} 
                    />
                    </Collapse>
                    <textarea
                        name="content"
                        placeholder="Take a note..."
                        rows={areaClicked ? "3" : "1"}
                        onChange={noteChange}
                        value={newNote.content}
                        onClick={expandArea}
                    />
                    <Zoom in={areaClicked ? true : false} timeout={300}>
                        <Fab 
                            onClick={handleSubmit} 
                            disabled={newNote.title.trim() === "" && newNote.content.trim() === ""}
                        >
                        <AddIcon />
                        </Fab>
                    </Zoom>
                </form>
            </div>
        </Zoom>
    );
}

export default CreateArea;
