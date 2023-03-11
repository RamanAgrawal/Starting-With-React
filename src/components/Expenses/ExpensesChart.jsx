
import Chart from '../Chart/Chart'

const ExpensesChart=props=>{
    let chartDataPoints=[
        {label:'jan',value:0},
        {label:'feb',value:0},
        {label:'mar',value:0},
        {label:'apr',value:0},
        {label:'may',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
    ]
    for(const expense of props.expenses){
        chartDataPoints[expense.date.getMonth()].value=expense.amount
    }
    return <Chart dataPoints={chartDataPoints}/>
}

export default ExpensesChart