import React from "react";
import { PureComponent } from "react";
import API from "../../api/api";
import ModeContext from "../Context/ModeContext";
import { Switch } from "antd";
import {Button } from 'antd';
import FormComponent from "../FormComponent/FormComponent";

class UsersDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: null,
      edit: false,
      text: "",
    };

    this.editMode = this.editMode.bind(this);
    this.changeText = this.changeText.bind(this);
    this.blueer = this.blueer.bind(this);
  }

  editMode() {
    this.setState({ edit: !this.state.edit });
  }

  blueer() {
    // console.log(this.state.userDetails);
    // this.setState({userDetails: {...this.state.userDetails, name: this.state.text}});
    this.setState({ edit: !this.state.edit });
  }

  componentDidMount() {
    new API()
      .UserDetails(this.props.idUser)
      .then((user) => this.setState({ userDetails: user }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.idUser !== this.props.idUser) {
      new API()
        .UserDetails(this.props.idUser)
        .then((user) => this.setState({ userDetails: user }));
      this.setState({ text: "Enter something", edit: false });
    }
  }

  changeText(e) {
    this.setState({
      userDetails: { ...this.state.userDetails, name: e.currentTarget.value },
    });
  }



  render() {
    console.log(this.state.userDetails);

    if (!this.state.userDetails) {
      return <div>LOADING....</div>;
    }

    const {
      name,
      username,
      email,
      id,
      address: { city, suite, street, zipcode, website },
    } = this.state.userDetails;

    const { putPostIdDetails } = this.props;

    return (
      <div className="user-details-wrapper">
        <div className="wrapper-user">
          {!this.state.edit ? (
            <div onClick={this.editMode}>{name}</div>
          ) : (
            <input
              value={this.state.userDetails.name}
              onChange={this.changeText}
              onBlur={this.blueer}
              type="text"
            />
          )}
          <div>{username}</div>
          <div>{email}</div>
          <div>{city}</div>
          <div>{suite}</div>
          <div>{street}</div>
          <div>{zipcode}</div>
          <div>{website}</div>
          <ModeContext.Consumer>
            {(value) => {
              return (
                <Switch
                  id="switcher-app"
                  defaultChecked
                  onChange={() => {
                    value();
                  }}
                />
              );
            }}
          </ModeContext.Consumer>

          <Button
            onClick={() => {
              putPostIdDetails(id);
            }}
          >
            GET POSTS
          </Button>
        </div>
        < FormComponent addPost={this.props.addPost} />
        
      </div>
    );
  }
}

export default UsersDetails;
