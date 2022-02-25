import React, { Component } from "react"
import { FormattedMessage } from "react-intl"
import { connect } from "react-redux"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"
import "./UserManage.scss"
class ModalUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true,
    }
  }
  componentDidMount() {}
  toggle = () => {
    this.props.toggle()
  }
  render() {
    console.log(`check child props :${this.props.toggle}`)
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.toggle}
        className={"modal__user--container"}
        size="lg"
        centered
      >
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
          <div className="modal__user--body">
            <div className="row">
              <div className="input-container">
                <label>Email:</label>
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <label>Password:</label>
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <label>firstname:</label>
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <label>Lastname:</label>
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <label>Address:</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>
            Do Something
          </Button>{" "}
          <Button onClick={this.toggle}>Cancel</Button>
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
