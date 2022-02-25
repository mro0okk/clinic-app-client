import React, { Component } from "react"
import { FormattedMessage } from "react-intl"
import { connect } from "react-redux"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"
import "./UserManage.scss"
class ModalUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    }
  }
  componentDidMount() {
    console.log("mount")
  }
  toggle = () => {
    this.props.toggle()
  }

  handleOnchangeInput = (e, type) => {
    let newState = this.state
    const transform = (type) => {
      newState[type] = e.target.value
    }
    transform(type)
    return this.setState(newState)
  }

  validateInput = () => {
    let isValid = true
    const arrInput = ["email", "password", "firstName", "lastName", "address"]
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false
        alert(`missing parameter! :  ${arrInput[i]}`)
        break
      }
    }
    return isValid
  }
  handleAddUser = () => {
    let invalid = this.validateInput()
    if (invalid) {
      this.props.createNewUser(this.state)
      console.log(this.state)
      this.toggle()
    }
    return
  }
  render() {
    console.log(this.state)
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.toggle}
        className={"modal__user--container"}
        size="lg"
        centered
      >
        <ModalHeader
          toggle={this.toggle}
          className="modal__user--title"
          color="blue"
        >
          Modal title
        </ModalHeader>
        <ModalBody>
          <div className="modal__user--body">
            <div className="user-login">
              <div className="input-container">
                <label>Email:</label>
                <input
                  type="email"
                  onChange={(e) => this.handleOnchangeInput(e, "email")}
                  value={this.state.email}
                />
              </div>

              <div className="input-container">
                <label>Password:</label>
                <input
                  type="password"
                  onChange={(e) => this.handleOnchangeInput(e, "password")}
                  value={this.state.password}
                />
              </div>
            </div>
            <div className="user-login">
              <div className="input-container">
                <label>firstName:</label>
                <input
                  type="text"
                  onChange={(e) => this.handleOnchangeInput(e, "firstName")}
                  value={this.state.firstName}
                />
              </div>

              <div className="input-container">
                <label>lastName:</label>
                <input
                  type="text"
                  onChange={(e) => this.handleOnchangeInput(e, "lastName")}
                  value={this.state.lastName}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <label>Address:</label>
                <input
                  type="text"
                  onChange={(e) => this.handleOnchangeInput(e, "address")}
                  value={this.state.address}
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={(e) => {
              e.preventDefault()
              this.handleAddUser()
            }}
          >
            Add
          </Button>{" "}
          <Button
            onClick={() => {
              this.toggle()
            }}
            className="px-3"
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}
const mapStateToProp = (state) => {
  return {}
}
const mapDispatchToProp = (dispatch) => {
  return {}
}
export default connect(mapStateToProp, mapDispatchToProp)(ModalUser)
