import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactContext } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showDetails: false
  };

  handleDeleteContact = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { contact } = this.props;
    return (
      <ContactContext.Consumer>
        {context => {
          return (
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-sm-2">
                  <img
                    src={`https://ui-avatars.com/api/?length=1&name=${contact.name}&background=2196f3&color=fff&rounded=true&font-size=0.33`}
                    alt="avatar"
                    className="mt-4 ml-3"
                  />
                </div>
                <div className="col-sm-10">
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      {contact.name}
                      <span
                        className="text-muted ml-2"
                        style={{ fontSize: '0.8em' }}
                      >
                        {contact.email}
                      </span>
                    </h5>
                    <h6
                      className="card-subtitle text-muted mb-3"
                      style={{ fontSize: '0.8em' }}
                    >
                      {contact.phone}
                    </h6>
                    <Link
                      to={`contact/edit/${contact.id}`}
                      className="card-link"
                    >
                      Edit
                    </Link>
                    <Link
                      className="card-link"
                      onClick={this.handleDeleteContact.bind(
                        this,
                        contact.id,
                        context.dispatch
                      )}
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ContactContext.Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
