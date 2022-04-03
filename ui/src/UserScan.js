import React from "react";

import Login from "./Login";
import Scan from "./Scan";
import Finished from "./Finished";
import Bar from "./Bar";

class UserScan extends React.Component {
  state = { teamId: "", empId: "", video: null, currentPage: "login" };

  onIdSubmit = (id, empId) => {
    this.setState({ teamId: id });
    this.setState({ empId: empId });
    this.setState({ currentPage: "scan" });
  };

  onUploadClick = (uploadedVideo) => {
    this.setState({ video: uploadedVideo });
    this.setState({ currentPage: "finished" });
  };

  render() {
    if (this.state.currentPage === "login") {
      return (
        <div>
          <Bar />
          <Login onIdSubmit={this.onIdSubmit} />
        </div>
      );
    } else if (this.state.currentPage === "scan") {
      return (
        <div>
          <Bar />
          <Scan onUploadClick={this.onUploadClick} />
        </div>
      );
    } else if (this.state.currentPage === "finished") {
      return (
        <div>
          <Bar />
          <Finished teamId={this.state.teamId} video={this.state.video} />
        </div>
      );
    }
  }
}

export default UserScan;
