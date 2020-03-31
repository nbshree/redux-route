import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
	constructor(props) {
		super(props);
		console.log(props.match.params.id)
	}
	query_common_credit(){
		var loginMode = 'msdk';//游戏内默认msdk(wx|qq|msdk)
		var url = '/api/msdk/proxy/query_common_credit';
		axios.get(url)
			.then((res) => {
				console.log(res);
			})
			.catch(error => {
				console.log(error);
			})
	}
	render() {
		return (
			<div>
				test
				<button onClick={()=>{this.query_common_credit()}}>ajax</button>
				{/*<Redirect from="/test" to="/game"/>*/}
				{/*<input/>*/}
				{/*{this.props.children}*/}
				{/*<Header source="http://localhost:3000/data/swiper"/>*/}
				{/*<Otherapp source="http://localhost:3000/data/otherapp"/>*/}
				{/*<Spike source="http://localhost:3000/data/spike"/>*/}
				{/*<More source="http://localhost:3000/data/more"/>*/}
				{/*<Like source="http://localhost:3000/data/like"/>*/}
			</div>
		)
	}
}
// export default Test;
export default Test;
