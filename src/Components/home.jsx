import React from 'react';
import { TableSimple } from 'react-pagination-table';


export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "counrty_wise_cases":{},
        }
    }

    async componentWillMount(){
        const url = "https://corona.lmao.ninja/v2/countries"
        await fetch(url)
        .then((res)=>{
            return res.json()   
        })
        .then((data)=> {
            this.setState({"counrty_wise_cases": data})
        })
        .catch(()=> console.error()
        )
    }

    get_data(){
        
        // const data = this.state.counrty_wise_cases
        // const main_arr = [["country", "cases", "deaths", "active", "recoverd"],]
        // data.map((obj, i)=>{
        //     const arr = []
        //     arr.push(obj["country"])
        //     arr.push(obj["cases"])
        //     arr.push(obj["deaths"])
        //     arr.push(obj["active"])
        //     arr.push(obj["recovered"])
        //     // console.log("ARRR ", arr );
        //     main_arr.push(arr)
        // })
        // console.log(main_arr);
        // return main_arr

        // return [
        //     ["country", "active", "death", "recovered", "cases"],
        //     ["India", 1500, 500, 100, 400],
        //     ["Spain", 2500, 800, 400, 200],
        //     ["Italy", 3500, 50, 1000, 300],
        //     ["India", 1500, 500, 100, 400],
        //     ["Spain", 2500, 800, 400, 200],
        //     ["Italy", 3500, 50, 1000, 300],
        //     ["India", 1500, 500, 100, 400],
        //     ["Spain", 2500, 800, 400, 200],
        //     ["Italy", 3500, 50, 1000, 300],
        //   ];
    }

    async chartData() {
        await this.get_data()
        // return this.get_data()
    }

    render(){
        // console.log(this.state.counrty_wise_cases);
        const Header = ["country", "active", "death", "recovered", "cases"]
        return(
            <div className="container">
                <div className="card">
                    <div className="card-header color" style={{"textAlign": "center","color": "white", "fontWeight": "bold"}}>
                        COVID-19 DASHBOARD  
                    </div>
                    <div className="card-body">
                        {/* <img src="https://www.pharmaceutical-technology.com/wp-content/uploads/sites/10/2020/02/coronavirus-2.jpg" className="responsive"></img> */}
                        {/* <button className="btn btn-primary btn-sm" onClick={()=> this.get_data()}>test </button> */}
                        <TableSimple
                            title="TableSimple"
                            subTitle="Sub Title"
                            data={ this.state.counrty_wise_cases }
                            headers={ Header }
                            //Tell the component what order you wanna render.
                            columns="country.active.death.recovered.cases"
                            // arrayOption={ [["size", 'all', ', ']] }
                        />
                    </div>
                </div>
            </div>
        )
    }
}