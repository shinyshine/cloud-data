import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { splitUrlSearch } from "../../config/config"

import {fetchNews} from '../../redux/action/index'

class Header extends React.Component {
    constructor(props) {
        super(props);

        // 获取地址栏的搜索项
        var arr = splitUrlSearch();

        this.state = {
            search: decodeURI(arr['s'] ? arr['s'] : "")
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
                            window.location.href = "http://" + window.location.host + "?s=" + this.state.search;

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
	actions: bindActionCreators({fetchNews}, dispatch),

})

export default connect(null, mapDispatchToProps)(Header);
