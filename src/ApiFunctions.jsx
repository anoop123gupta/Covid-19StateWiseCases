import React from 'react';
import StateWiseReport from './StateWiseReport';
import StateWiseContacts from './StateWiseContacts';
import CountryWiseCases from  './CountryWiseData';

export default class ApiComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "data": {
                "show": false
            },
            "showCountryWiseData": false
        }
    }

    handleContacts() {
        this.setState({"show": true})
    }

    handleBack() {
        const url = window.location.origin
        window.location.replace(url)
    }

    showCountryWiseData(){
        this.setState({"showCountryWiseData": !this.state.showCountryWiseData})
    }

    render() {
        console.log(this.state.showCountryWiseData);
        
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header color" style={{"textAlign": "center","color": "white", "fontWeight": "bold"}}>
                        COVID-19 DASHBOARD   <i className="fa fa-address-book" onClick={()=> this.handleContacts()} style={{"float": "right", "padding":"0px", "fontWeight": "bold", "margin": "2px 20px", "cursor":"pointer"}}></i> 
                        {this.state.show === true && <i className="fa fa-home" style={{"float": "right", "padding":"0px", "fontWeight": "bold", "margin": "2px 10px", "cursor":"pointer"}} onClick={()=> this.handleBack()}></i>}
                        <i className="fa fa-globe" style={{"float": "right", "padding":"0px", "fontWeight": "bold", "margin": "2px 10px", "cursor":"pointer"}} onClick={()=> this.showCountryWiseData()}></i>
                    </div>
                    
                  {this.state.showCountryWiseData === false && <div className="card-body">
                        { !this.state.show ? <StateWiseReport />  : <StateWiseContacts/> }
                    </div>}
                    <div style={{marginTop: "50px"}}>
                        {this.state.showCountryWiseData === true && <CountryWiseCases />}
                    </div>
                </div>
            </div>
        )
    }
}
