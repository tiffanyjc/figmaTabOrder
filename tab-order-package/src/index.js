import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

var numRows = 0; 

function PanelHeader(props) {
    return (
        <div className="panelHeader">       
            {props.value}
            <button onClick={(e) => props.parent.addTab()}>Add</button>
        </div>
    ); 
} 

function MoveButton() {
    return (
        <div className="moveButton">
        </div>
    )
}

function RemoveButton(props) {
    return (
        <button onClick={(e) => props.parent.removeRow(props.value) }>
            Remove
        </button>
    ); 
}


class PluginPanel extends React.Component {
    
    constructor(props) {
        super(props); 

        this.state = {
            data: [
            ]
          }

        }
 
    removeRow(rowNumber) {
        numRows--; 

        this.setState({data: this.state.data.filter(row => row.orderNum !== rowNumber).map(r => {
            if (r.orderNum > rowNumber) {
                return {orderNum: (r.orderNum - 1), name: r.name}; 
            } else {
                return r; 
            }
        })
        }); 

    }

    addTab() {
        numRows++; 
        var newRow = {orderNum: numRows, name: "text " + numRows}; 

        // add new node name here 
        this.setState({data: this.state.data.concat(newRow)});  
    }

    render() {
        
        let rows = this.state.data.map(r => {

            return (
                <div className="tabRow">
                    
                    <MoveButton ></MoveButton>
                    <div className="tabRowOrder">{r.orderNum}</div>
                    <div className="tabRowNodeName">{r.name}</div>
                    <RemoveButton value={r.orderNum} parent={this}></RemoveButton>
            </div>
            );

                // if all else fails, uncomment this one
            // return (<TabRow name={r.name} value={r.orderNum} parent={this}></TabRow>); 
        }); 

        console.log(this.state.data); 
        console.log("rendering"); 
        
        return (
            <div id="panel">
                <PanelHeader value="TAB ORDER" parent={this}></PanelHeader >
                {rows}
            </div>
        ); 

    }; 
}




ReactDOM.render(<PluginPanel />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
