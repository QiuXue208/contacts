import React from 'react';
import PropTypes from 'prop-types';
import ListContacts from './ListContacts'
import './index.css'

class App extends React.Component{
  constructor(props){
    super(props)
    this.removeContact = this.removeContact.bind(this)
  }
  state = {
    contacts : [
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
  }
  removeContact(contact){
    this.setState((state)=>({
      contacts :state.contacts.filter(c=>c.id !== contact.id)
    }))
  }
  render(){
    return (
      <div className="App">
        <ListContacts onDeleteContact={this.removeContact} contacts = {this.state.contacts}></ListContacts>
      </div>
    );
  }

}
ListContacts.propTypes = {
  contacts:PropTypes.array.isRequired,
  onDeleteContact:PropTypes.func.isRequired
}
export default App;
