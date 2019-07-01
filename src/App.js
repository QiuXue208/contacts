import React from 'react';
import ListContacts from './ListContacts'
import './index.css'

function App() {
  const contacts = [
    {
      "id": "ryan",
      "name": "Ryan Florence",
      "email": "ryan@reacttraining.com",
      "avatarURL": "http://localhost:5001/ryan.jpg"
    },
    {
      "id": "michael",
      "name": "Michael Jackson",
      "email": "michael@reacttraining.com",
      "avatarURL": "http://localhost:5001/michael.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler McGinnis",
      "email": "tyler@reacttraining.com",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }
  ]
  return (
    <div className="App">
      <ListContacts contacts = {contacts}></ListContacts>
    </div>
  );
}

export default App;
