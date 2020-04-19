import React from 'react';

export default class CountryWiseCases extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: []
        }
    }

    async componentWillMount(){
        await fetch("https://corona.lmao.ninja/v2/countries")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log("data ", data);
            this.setState({"data": data})
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render(){
            
        return(
            <div className="container">
                <div className="row">
                    {this.state.data && this.state.data.length >0 && this.state.data.map((obj, i)=>{
                        return(
                            <div key={i} className='col-md-4' style={{"marginTop": "10px"}}>
                                <div className="card">
                                <div className="card-header" style={{"fontWeight": "bold", "textAlign":"center"}}>
                                    {obj["country"]}
                                </div>
                                <div className="card-body">
                                    <span> <b>cases :</b> </span>{obj["cases"]} <br></br>
                                    <span> <b>active :</b> </span>{obj["active"]} <br></br>
                                    <span> <b>deaths :</b> </span>{obj["deaths"]} <br></br>
                                    <span> <b>recovered :</b> </span>{obj["recovered"]} <br></br>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}