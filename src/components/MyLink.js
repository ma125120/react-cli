import React, { Component } from 'react';
import classnames from 'classnames';
import {
  Link
} from 'react-router-dom';

class MyLink extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let {to,...others}=this.props;
		return (
			<span><Link to={to} ...others></Link></span>
		);
	}
}
MyLink.defaultProps={

}
export default MyLink