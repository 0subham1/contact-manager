import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault(); //prevent reloading page
    if (this.state.name === "" || this.state.email === "") {
      alert("fields are mandatory");
      return;
    }
    // this needs to be passed in app.js
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    console.log(this.state)
  };

  render() {
    return (
      <div className="ui main">
        <br />
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button green">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
