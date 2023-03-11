import './Chart.css'
import Card from '../UI/Card'
import ChartBar from './ChartBar'

const Chart=props=>{
    const dataPointsValues=props.dataPoints.map(data=>data.value)
    let totalMaximum=Math.max(...dataPointsValues)
    return <Card className='chart-cover'> 
        
        {props.dataPoints.map(dataPoint=>(
            <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            max={totalMaximum}
            value={dataPoint.value}
            />
        ))}
    
    </Card>
}
export default Chart
