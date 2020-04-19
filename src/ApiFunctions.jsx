import React from 'react';
import StateWiseReport from './StateWiseReport';
import StateWiseContacts from './StateWiseContacts';


export default class ApiComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "data": {
                "show": false
            }
        }
    }

    handleContacts() {
        this.setState({"show": true})
    }

    handleBack() {
        window.history.back();
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header color" style={{"textAlign": "center","color": "white", "fontWeight": "bold"}}>
                        COVID-19 DASHBOARD   <i className="fa fa-address-book" onClick={()=> this.handleContacts()} style={{"float": "right", "padding":"0px", "fontWeight": "bold", "margin": "2px 20px", "cursor":"pointer"}}></i> 
                        {this.state.show === true && <i className="fa fa-home" style={{"float": "right", "padding":"0px", "fontWeight": "bold", "margin": "2px 10px", "cursor":"pointer"}} onClick={()=> this.handleBack()}></i>}
                    </div>
                    
                   <div className="card-body">
                        { !this.state.show ? <StateWiseReport />  : <StateWiseContacts/> }
                    </div>
                </div>
            </div>
        )
    }
}
