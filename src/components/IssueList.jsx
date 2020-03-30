import { Component } from "react";

class IssueList extends Component{
    constructor(props)  {
        super(props);

        this.state = {
            list: [],
fetchData = async () =>{
    const response = await fetch(
        "https://github.com/facebookincubator/create-react-app/issues"
    );
    const data = await response.json();
    console.log(response);
    return data.results
}
        };
    }

render () {
    return (
        <div>
            <ul>
                {this.state.list.map(item =>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default IssueList;