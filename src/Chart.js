import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './Chart.css';


export default class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData :{
                labels :['JAN','FEB','MARCH','APRIL','MAY','JUNE','JULY','AUG','SEPT','OCT','NOV','DEC'],
                datasets:[
                    {
                        label:'Trades',
                        data:[5,10,15,20,25,30,35,40,45,50,55,60,65],
                        backgroundcolor:[
                            "#f38b4a",
                            "#56d798",
                            "#ff8397",
                            "#6970d5" 
                        ]
                    }
                ]
            }
        }
    }
  render() {
    return (
      <div className="chartstyle">
          <div className="chart">
      <Bar
        data={this.state.chartData}
         options={{}}
       />
       </div>
       

      </div>
    )
  }
}
