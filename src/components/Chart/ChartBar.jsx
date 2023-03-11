import './ChartBar.css'

const ChartBar = props => {
    let colorFill='0%';
    if(props.max>0){

        colorFill = Math.round(props.value * 100 / props.max) + '%'
    }

    return <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{ height: colorFill}}>
                
            </div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>
}
export default ChartBar