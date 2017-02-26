import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import {search} from '../../redux/action/index'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        };
        
    }

    render() {
    	return (
    		<div id="header">
                <div className="header-container">
        			<h1>云山舆情</h1>
        			<div className="search-bar">
        				<form onSubmit={e => {
        					e.preventDefault();
        					
        					this.props.actions.search(this.state.search);
        					
        				}}>
        					<input 
        						type="text" 
        						value={this.state.search} 
        						onChange={(e) => {
        							this.setState({
        								search: e.target.value
        							})
        						}}/>
        					<button type="submit"></button>
        				</form>
        			</div>
                </div>
    		</div>
    	);
    }
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({search}, dispatch),

})

export default connect(null, mapDispatchToProps)(Header);
