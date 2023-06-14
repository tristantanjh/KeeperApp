import React from 'react';
import ChecklistIcon from '@mui/icons-material/Checklist';

function Header() {
    return (
        <header>
            <h1><ChecklistIcon style={{marginRight: "0.5em"}}/>Keeper</h1>
        </header>
    );
}

export default Header;