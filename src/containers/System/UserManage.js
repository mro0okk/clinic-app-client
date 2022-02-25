import React, { Component } from "react"
import { FormattedMessage } from "react-intl"
import "./UserManage.scss"
import { getAllUsers } from "../../services/userService"
import { connect } from "react-redux"
import ModalUser from "./ModalUser"
class UserManage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isOpenModal: false,
    }
  }

  async componentDidMount() {
    let res = await getAllUsers("ALL")
    if (res && res.errCode === 0) {
      this.setState({
        users: res.users,
      })
    }
  }
  handleAddNewUser = () => {
    this.setState({ isOpenModal: !this.state.isOpenModal })
  }

  render() {
    console.log("check render", this.state)
    let arrUsers = this.state.users
    return (
      <div className="user-container">
        <ModalUser
          isOpen={this.state.isOpenModal}
          toggle={this.handleAddNewUser}
        />
        <div className="title text-center"> manage with daniel nguyen</div>
        <div className="mx-1">
          <button
            className="btn btn-success px-2"
            onClick={this.handleAddNewUser}
          >
            <span>
              <i className="fas fa-plus-circle"></i>
            </span>{" "}
            Add new User
          </button>
        </div>

        <div className="user-table mt-3 mx-1">
          <table id="customers">
            <thead>
              <tr>
                <th>Email</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {arrUsers &&
                arrUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.address}</td>
                    <td>
                      <button className="btn btn__Usermanage text-yellow">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn btn__Usermanage text-red">
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManage)
