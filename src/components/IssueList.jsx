import React, { Component } from "react";
// import Issues from './issues';


class IssueList extends Component{
    constructor(props)  {
        super(props);
        this.state = {
            list: []
    };
}
    fetchData = async () => {
    const response = await fetch(
        'https://github.com/facebookincubator/create-react-app/issues'
    );
    const data = await response.json();
    console.log(response);
    return data;
  };
   async componentDidMount() {
    const data = await this.fetchData();
    this.setState({
        list: data
    })
  }
render () {
    const { data } = this.state; 

    return (
        <div>
            {this.state.data.map((data) => (
                <p> {data} </p>
            ))}
            />

            </div>
        
    );
}
}
    export default IssueList;
