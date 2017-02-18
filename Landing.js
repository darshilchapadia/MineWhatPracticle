import React,{Component} from 'react';
import Product from './Product.js';

class Landing extends Component {
	constructor(props) {
      super(props);
		
      this.state = {
         currentCount :5,
		 manageMargin : {	
			right: '999em'		
		 }
      }
   }
	
	componentDidMount(){
		var x = setTimeout(function(){
				this.setState({manageMargin : {	right: '1em'}});
					}.bind(this),200);		
	}
	
   render() {
      return (
         <div>
			<div style={this.state.manageMargin} className="animationDiv">
				<p className="closeButton">X</p><br/>
				<div className="innerDiv">
					<p> Are you looking for <b>'White dresses'</b>?</p>
					<div className="leftImg">
						<Product img1="images/r1.jpg" img2="images/r2.jpg" description="Simple Description text"/>
					</div>
					
					<div className="rightImg">
						<Product img1="images/n2.jpg" img2="images/n3.jpg" description="Simple Description text"/>
					</div>
				</div>				
			</div>
         </div>
      );
   }
}

export default Landing;