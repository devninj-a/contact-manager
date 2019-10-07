import React, { Component } from 'react';
import { ContactContext } from '../../context';
import TextInputGroup from '../layouts/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };
  async componentDidMount() {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    );
    const { name, email, phone } = res.data;
    this.setState({ name, email, phone });
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name field is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email field is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone field is required' } });
      return;
    }

    // edit contact

    const updateContact = {
      name,
      email,
      phone
    };
    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );
    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

    // reset form
    this.setState({ name: '', email: '', phone: '', errors: {} });

    // redirect to home page
    this.props.history.push('/');
  };
  render() {
    return (
      <ContactContext.Consumer>
        {context => {
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, context.dispatch)}>
                  <TextInputGroup
                    label="Name"
                    value={this.state.name}
                    name="name"
                    type="text"
                    onChange={this.handleChange}
                    error={this.state.errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    value={this.state.email}
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    error={this.state.errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    value={this.state.phone}
                    name="phone"
                    type="text"
                    onChange={this.handleChange}
                    error={this.state.errors.phone}
                  />
                  <input
                    type="submit"
                    value="Save"
                    className="btn btn-primary btn-block"
                    disabled={
                      !this.state.name || !this.state.email || !this.state.phone
                    }
                  />
                </form>
              </div>
            </div>
          );
        }}
      </ContactContext.Consumer>
    );
  }
}

export default EditContact;
