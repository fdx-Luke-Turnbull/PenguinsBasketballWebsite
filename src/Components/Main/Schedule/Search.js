import React, { Component } from "react";

//function to download full game schedule > easiest to download attachment
const onClickSchedule = () => {
    let  alink = document.createElement("a");   
    alink.href = "documents/Schedule.pdf";
    alink.download = "Schedule.pdf";
    alink.click();  
       }

//function to search through schedule items
const EnhancedComponent = (OriginalComponent) => {
  return class extends Component {
    state = { searchTerm: '' };
    handleSearch = event => {
      this.setState({searchTerm: event.target.value})
    }
    render() {      
      return (
        <div>
          <h2 className="section_header">Schedule</h2>
          <div className="searchBarArea">
            <div>
              <i className="fa-solid fa-magnifying-glass fa-xl"></i>
              <input className="schedSearch" onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Team name or Location" />
            </div>
            <div className="printSchedule" onClick={onClickSchedule}>
              <i className="fa-solid fa-print fa-xl"></i>
              <p>PRINT FULL SCHEDULE</p>
            </div>
          </div>
          <OriginalComponent searchTerm={this.state.searchTerm} />
        </div>
      )
    }
  }
}


export default EnhancedComponent;