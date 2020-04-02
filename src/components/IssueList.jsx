import React, { Component } from "react";
// import Issue from "./components/Issue";
import { loadData } from "../utils/loadData";


class IssueList extends Component {
    state = {
        issuesFromState: []
    } 

    async componentDidMount() {
       const apiUrl = `https://api.github.com/repos/facebook/create-react-app/issues`
        const issuesFromApi = await loadData(apiUrl);  
       

        this.setState({
            issuesFromState: issuesFromApi
        })

    }

    render () {
        // Line 24 makes a variable that holds the data from issuesfromState which was set === to issues from api on line 17. 
        const issuesToRender = this.state.issuesFromState;
        // console log issuesToRender will display the issues in the console. To view the console log results inspect and click console.
        console.log(issuesToRender);
    

        return (
            <div> 
                {issuesToRender.map(eachItemInsideArray => {
                    return (
                       <div>
                        <h1>{eachItemInsideArray.title}</h1>
                        <a href={eachItemInsideArray.url}>Link to Issue</a> 
                        </div>
                     )
                })}  
            </div>
        )
    }
}


export default IssueList;
