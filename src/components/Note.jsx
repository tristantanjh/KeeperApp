import React, { useState } from 'react';
import { Zoom, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
    setTimeout(() => {
      props.delete(props.id);
    }, 300); // Wait for the zoom animation to finish (300ms)
  };

  return (
    <Zoom in={!isDeleted} timeout={300}>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Zoom>
  );
}

export default Note;