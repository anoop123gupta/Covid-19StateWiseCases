import React from 'react';

export default class DistrictWiseReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": {},
            "main_arr": []
        }
    }

    async componentWillMount() {
        const url = "https://api.covid19india.org/state_district_wise.json"
        await fetch(url).then((res) => {
            return res.json()
        }).then((data) => {
            const district = this.props.stateName;
            const obj = data[district]
            if (obj) {
                const districtObj = obj["districtData"];
                const states = Object.keys(districtObj)
                var main_arr = []
                for (var i of states) {
                    const state_obj = {
                        "state_name": i,
                        "cases": districtObj[i]
                    }
                    main_arr.push(state_obj)
                }
                this.setState({"main_arr": main_arr})
            }
        }).catch(() => console.error())
    }

    handleBack() {
        const url = window.location.origin
        window.location.replace(url)
    }

    render() {
        const district = this.props.stateName;
        return (
            <div className="container">
                <div className="card mainCard">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6" style={{"textAlign": "right", "fontWeight": "bold"}}>District Wise Coronavirus Cases in {this.props.stateName}</div>
                            <div className="col-md-6">
                                <button className="btn-sm btn-primary" onClick={()=> this.handleBack()} style={{"float": "right"}}>back</button>
                            </div>
                        </div>
                    </div>
                </div>
                    {this.state.main_arr &&  this.state.main_arr.length >0 && this.state.main_arr.map((obj, i)=>{
                        return(
                            <div className="card groupcard">
                                <div className="card-header text-center">{obj["state_name"]}</div>
                                <div className="card-body">
                                    <div className="card-text">
                                        <b>Confirmed Cases : </b> <span> {obj["cases"]["confirmed"]} </span> <br></br>
                                        <b>Recovered Cases: </b> <span> {obj["cases"]["recovered"]} </span><br></br>
                                        <b>Deaths Cases:</b> <span> {obj["cases"]["deceased"]} </span><br></br>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

        )
       
    }
}
