import React, { Component } from 'react';
import Contact from './Contact';
import { ContactContext } from '../../context';

class Contacts extends Component {
  render() {
    return (
      <ContactContext.Consumer>
        {context => {
          return (
            <React.Fragment>
              <h4 className="text-dark mb-4">Contact List</h4>
              {context.contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </ContactContext.Consumer>
    );
  }
}

export default Contacts;
