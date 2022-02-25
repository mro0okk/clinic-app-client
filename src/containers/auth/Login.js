import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { login } from "../../services/userService"
import * as actions from "../../store/actions"
import { KeyCodeUtils, LanguageUtils } from "../../utils"
import userIcon from "../../../src/assets/images/user.svg"
import passIcon from "../../../src/assets/images/pass.svg"
import { FormattedMessage } from "react-intl"
import "./Login.scss"
import adminService from "../../services/adminService"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      showPassword: false,
    }
  }
  handleLogin = async () => {
    this.setState({
      errMessage: "",
    })
    console.table(this.state)
    try {
      let res = await login(this.state.username, this.state.password)
      console.log(res)
      if (res.errCode !== 0) {
        this.setState({
          errMessage: res.message,
        })
      }
      if (res && res.errCode === 0) {
        this.props.userLoginSuccess(res.user)
        return res
      }
    } catch (e) {
      console.dir(e)
      if (e.response) {
        if (e.response.data) {
          this.setState({
            errMessage: e.response.data.message,
          })
        }
      }
    }
  }
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content">
            <div className="login-container row">
              <div className="col-12 text-center">
                <h1 style={{ fontWeight: 600 }}>Login</h1>
              </div>
              <div className="col-12 form-group">
                <label>Username: </label>
                <input
                  type="text"
                  className="form-control login-input"
                  name="email"
                  value={this.state.username}
                  onChange={(e) =>
                    this.setState({
                      username: e.target.value,
                    })
                  }
                />
                <div className="login-input"></div>
              </div>
              <div className="col-12 form-group floor">
                <label>Password: </label>
                <input
                  type={this.state.showPassword ? "text" : "password"}
                  className="form-control login-input"
                  value={this.state.password}
                  onChange={(e) =>
                    this.setState({
                      password: e.target.value,
                    })
                  }
                />
                <div className="login-input"></div>
                <p className="text-danger">{this.state.errMessage}</p>
                <div
                  className="password-toggle"
                  onClick={() =>
                    this.setState({
                      ...this.state,
                      showPassword: !this.state.showPassword,
                    })
                  }
                >
                  {this.state.showPassword ? "hide" : "show"}
                </div>
              </div>
              <div className="col-12">
                <button className="btn-login" onClick={this.handleLogin}>
                  Login
                </button>
              </div>
              <div className="col-12">
                <span className="text-alert">Forgot your password!</span>
              </div>
              <div className="col-12 text-center">
                <span>Or Login with:</span>
              </div>
              <div className="col-12 social-login">
                <i className="fab fa-google-plus-g google"></i>
                <i className="fab fa-facebook facebook"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),

    userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) => {
      dispatch(actions.userLoginSuccess(userInfo))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
