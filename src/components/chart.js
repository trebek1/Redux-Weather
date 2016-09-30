import React from 'react'; 
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function calc(data,type){
	var average = data.map((c,i,arr) => c/arr.length).reduce((p,c) => c + p);
	var max = Math.max.apply(null,data);
	var min = Math.min.apply(null,data);

	if(type === 'avg'){
		return average.toFixed(2);
	}else if(type === 'max'){
		return max.toFixed(2);
	}else if(type === 'min'){
		return min.toFixed(2);
	}
}

export default (props) => {


	return (
			<div>
				<Sparklines height={120} width={180} data={props.data}>
					<SparklinesLine color={props.color} />
					<SparklinesReferenceLine type='avg'/>
				</Sparklines>
				<div>Average: {calc(props.data, 'avg')} {props.units}</div>
				<div>Max: {calc(props.data, 'max')} {props.units}</div>
				<div>Min: {calc(props.data, 'min')} {props.units}</div>

			</div>
		)
}

