import React from 'react';

export default class DistrictWiseReport extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            "data": {}
        }
    }

    async componentWillMount(){
        const url = "https://api.covid19india.org/state_district_wise.json"
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

    handleBack(){
        window.history.back();
    }

    render() {
        const district = this.props.stateName
        return (
            <div className="container">  
                    <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6" style={{"textAlign": "right", "fontWeight": "bold"}}>{this.props.stateName}</div>
                            <div className="col-md-6">
                                <button className="btn-sm btn-secondary" onClick={()=> this.handleBack()} style={{"float": "right"}}>back</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.state.data && Object.values(this.state.data).length > 0 && Object.keys(this.state.data[district]["districtData"]).map((obj, i)=>{
                                const value = Object.values(this.state.data[district])
                                const confirm = value[0][obj]["confirmed"]
                                return(
                                    <div key={i} className='col-md-4 card' style={{"marginTop": "10px"}}>
                                        <span>{obj}</span>
                                        <span>{confirm}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    </div>
            </div>
          
        )
    }
}
