import React from 'react';
import Bar from './Bar';
import Graph from './Graph';

class Admin extends React.Component {
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
            <Bar></Bar>
            <div style = {{display: "flex", flexDirection: "col", alignItems: "center", justifyContent: "center"}}>
            <form onSubmit={this.handleSubmit}>
                <div>
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleEmpChange}
                    placeholder="Enter a Team ID"
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
                   <input
                    type="submit"
                    value="Search"
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
            </form>
            </div>
            <Graph></Graph>
            
          </div>
        )
    }
}

export default Admin;