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
                <table className="table table-stripped">
                    <thead className="">
                        <tr>
                            <th>Country Name</th>
                            <th>Total Cases</th>
                            <th>Active</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data && this.state.data.length >0 && this.state.data.map((obj, i)=>{
                            return (
                                <tr>
                                    <td className="countryName">{obj["country"]}</td>
                                    <td>{obj["cases"]}</td>
                                    <td>{obj["active"]}</td>
                                    <td>{obj["deaths"]}</td>
                                    <td>{obj["recovered"]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}