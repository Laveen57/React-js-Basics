const { Component } = require("react");

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

const TableConetnt = (props) => {
    const {charData, removeChar} = props;
    const row = charData.map((char,i)=>{
        return(<tr key={i}><td>{char.name}</td><td>{char.job}</td><td><button onClick={()=>removeChar(i)}>Delete</button></td></tr>)
    })
    return(
        <tbody>
            {row}
        </tbody>
    )
}


class Table extends Component{
    render(){
        const {charData, removeChar} = this.props;
        return(
            <table>
                <TableHeader/>
                <TableConetnt removeChar={removeChar} charData={charData}/>
            </table>
        )
    }
}

export default Table;