import React from "react";
import acLogo from "./assets/logo.svg";
import thermaLogo from "./assets/poweredByThe.svg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { team: "", emp: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmpChange = this.handleEmpChange.bind(this);
  }

  handleChange(event) {
    this.setState({ team: event.target.value });
  }

  handleEmpChange(event) {
    this.setState({ emp: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onIdSubmit(this.state.team, this.state.emp);
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "45vh",
          }}
        >
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "36px",
                    color: "#2a4763",
                    textAlign: "center",
                  }}
                >
                  Hello!
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    color: "#2A4763",
                    textAlign: "center",
                  }}
                >
                  Check in with your Unit and Employee IDs.
                </p>
              </div>
              <div>
                <div style={{ marginBottom: "8px" }}>
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Enter your unit code"
                    style={{
                      marginBottom: "8px",
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "rgb(42, 71, 99, 0.54)",
                      border: "2px solid #2A4763",
                      borderRadius: "28px",
                      display: "inline-block",
                      width: "400px",
                      height: "32px",
                      padding: "8px 20px",
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleEmpChange}
                    placeholder="Enter your employee id"
                    style={{
                      marginBottom: "8px",
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "rgb(42, 71, 99, 0.54)",
                      border: "2px solid #2A4763",
                      borderRadius: "28px",
                      display: "inline-block",
                      width: "400px",
                      height: "32px",
                      padding: "8px 20px",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    padding: "8px",
                    marginTop: "20px",
                  }}
                >
                  <input
                    type="submit"
                    value="Ok"
                    style={{
                      textAlign: "center",
                      fontSize: "18px",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "13px",
                      fontWeight: "bold",
                      width: "100px",
                      height: "48px",
                      background: "#005EB8",
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
