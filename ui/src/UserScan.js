import React from 'react';

import Login from './Login';
import Scan from './Scan';
import Finished from './Finished';
import WebcamScan from './WebcamScan';

class UserScan extends React.Component {
  state = { teamId: "", video: null, currentPage: "login" };

  onIdSubmit = (id) => {
    this.setState({ teamId: id });
    this.setState({ currentPage: "scan" });
  };

  onUploadClick = (uploadedVideo) => {
    this.setState({ video: uploadedVideo });
    this.setState({ currentPage: "finished" });
  }

  render() {
    if (this.state.currentPage === "login") {
      return (
        <div>

          <Login onIdSubmit={this.onIdSubmit} />
        </div>
      )
    } else if (this.state.currentPage === "scan" ) {
      return <Scan teamId={this.state.teamId} onUploadClick={this.onUploadClick}/>
        // return <WebcamScan></WebcamScan>
    } else if (this.state.currentPage === "finished") {
      return <Finished teamId={this.state.teamId} video={this.state.video} /> 
    }
  }
}

export default UserScan;
