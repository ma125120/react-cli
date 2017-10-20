import React, { Component } from 'react';
import classnames from 'classnames';
import {
  Link
} from 'react-router-dom';
var SubLi=({links})=>{
	return (
		<ul className='sub-ul'>
			{links.map((child,index)=>{ return (<li className='sepia' key={index}><Link to={child.url}>{child.name}</Link></li>)})}
		</ul>
	);
}

class NavLink extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let {links,...others}=this.props;
		let classes=classnames({
			ui:true,
			btn:true
		});
		return (
			<ul className="flex navLink">
				{links.map((v,i)=>{
					return (
						<li className='sepia' key={i}>
							{v.child?
								<div><p>{v.name}</p><SubLi links={v.child} /></div>:
								<Link to={v.url}>{v.name}</Link>}
						</li>
					)
				})}
			</ul>
		);
	}
}
NavLink.defaultProps={

}
export default NavLink