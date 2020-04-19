import React from 'react'

export default class StateWiseContacts extends React.Component {
    constructor(props){
        super(props);
        this.state={
            "data":""
        }
    }

    async componentWillMount() {
        // const url ="http://127.0.0.1:5000/contacts"
        const url = "https://api.rootnet.in/covid19-in/contacts"
        await fetch(url)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            this.setState({"data": data})
        })
        .catch(()=> {
            console.error();
        })
    }



    render() {
        // console.log("====>>> ", this.state.data);
        
        return (
            <div className="">
                <div className="card">
                    <div className="card-header" style={{"textAlign":"center", "fontWeight": "bold"}}>State Wise Helpline Number</div>
                    <div className="card-body">
                        <div className="col-md-12">
                        {this.state.data &&  Object.keys(this.state.data).length > 0 &&
                            <div className="row">
                                
                                <div className="col-md-12 ">
                                        <div className="row" style={{"marginLeft": "40%"}}>
                                            <a className="fa fa-twitter" href={this.state.data["data"]["contacts"]["primary"]["twitter"]}> </a>
                                            <a className="fa fa-facebook" href={this.state.data["data"]["contacts"]["primary"]["facebook"]}>   </a>
                                        </div>
                                    <div className="row" style={{"marginBottom":"30px"}}>
                                        <div className="col-md-4" >
                                            <b>Email : </b> <span>{this.state.data["data"]["contacts"]["primary"]["email"]}</span>
                                        </div>
                                        <div className="col-md-4" >
                                           <b>Number : </b> <span>{this.state.data["data"]["contacts"]["primary"]["number"]}</span><br></br>
                                        </div>
                                        <div className="col-md-4">
                                         <b>Tollfree Number : </b> <span>{this.state.data["data"]["contacts"]["primary"]["number-tollfree"]}</span><br></br>
                                        </div>
                                    </div>
                                </div>

                                     <table className="table">
                                        <thead>
                                            <tr>
                                                <th>State</th>
                                                <th>Contact Number</th>
                                            </tr>
                                        </thead>
                                        {this.state.data &&  Object.keys(this.state.data).length > 0 && this.state.data["data"]["contacts"]["regional"].map((obj, i)=>{
                                        return (
                                            <tbody>
                                                <tr>
                                                    <td>{obj["loc"]}</td>
                                                    <td> {obj["number"]}</td>
                                                </tr>
                                            </tbody>
                                         )
                                         }) }
                                    </table>
                            </div>
                         }
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

}