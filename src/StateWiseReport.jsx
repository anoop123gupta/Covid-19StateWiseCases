import React from 'react';
import DistrictWiseReport from './DistrictWiseReport';


export default class StateWiseReport extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "data": {},
            'show': false,
            "stateName":""
        }
    }

    async componentWillMount() {
        const url = "https://api.covid19india.org/data.json"
        await fetch(url)
        .then((res)=>{
            return res.json()   
        })
        .then((data)=> {
            this.setState({"data": data})
                        
        })
        .catch(()=> console.error()
        )
    }

    handleDistrictWise(state){
        this.setState({'show': true, "stateName": state})
    }

    IsDisable(obj){
        if(obj["state"] === "Total"){
            return false
        }
        else if (obj["confirmed"] ==0){
            return false
        }
        else {
            return true 
        }
    }

    render() {
        return (
            <div className="container">
                { !this.state.show ? <div className="card-body">
                    <div className="row">
                        {this.state.data && this.state.data["statewise"] && this.state.data["statewise"].length > 0  && this.state.data["statewise"].map((obj, i)=>{
                            return (
                                <div className="col-md-12"  style={{"marginTop": "10px"}} key={i}>
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title" style={{"fontWeight": "bold", "textAlign": "center"}}>{obj["state"]} </h5>
                                        <div className="card-text">
                                            <b>Confirmed Cases : </b> <span> {obj["confirmed"]} </span> <br></br>
                                            <b>Recovered Cases: </b> <span> {obj["recovered"]} </span><br></br>
                                            <b>Deaths Cases:</b> <span> {obj["deaths"]} </span><br></br>
                                            <b>Active Cases: </b> <span> {obj["active"]} </span><br></br>
                                            <b>Updated Date : </b> <span> {obj["lastupdatedtime"]} </span>
                                        </div>
                                        { this.IsDisable(obj) === true ? <a href="#" className="card-link btn btn-primary btn-sm btn-block" style={{"marginTop": "10px", "fontWeight":'bold'}} onClick={()=> this.handleDistrictWise( obj["state"])}>District Wise Confirm Cases</a> :  <a href="#" className="card-link btn btn-primary btn-sm btn-block disabled"  style={{"marginTop": "10px", "fontWeight":'bold'}} onClick={()=> this.handleDistrictWise( obj["state"])}>District Wise Confirm Cases</a> }
                                    </div>
                                    </div>
                                </div>
                                )
                        }) }
                    </div>
                </div> : <DistrictWiseReport  stateName={this.state.stateName} />}
            </div>
        )
    }
}
