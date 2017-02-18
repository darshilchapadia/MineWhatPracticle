import React,{Component} from 'react';

class Product extends Component {
	constructor(props) {
      super(props);		
   }
	
   render() {
      return (
         <div>			
			<br/>
			<div className="imgLeftDiv">
				<img src={this.props.img1}></img>
			</div>
			<div className="imgRightDiv">
				<img src={this.props.img2}></img>
			</div>
			<div className="descriptionDiv">
				{this.props.description}
			</div>
         </div>
      );
   }
}

export default Product;