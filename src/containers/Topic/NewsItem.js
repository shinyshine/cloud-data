import React from "react"
// import { connect } from "react-redux"
// import {bindActionCreators} from 'redux'
import { showAllText, hideAllText } from "../../redux/action/topic"
class NewsItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			btnText: "详细内容",
			showAll: false,
		}

		this.toggleText = () => {
			if(!this.state.showAll) {
				this.setState({
					btnText: "收起全文",
					showAll: !this.state.showAll,
				})
			} else {
				this.setState({
					btnText: "详细内容",
					showAll: !this.state.showAll
				})
			}

			console.log(this.state);

		}
	}

	render() {

		return (
			<div className="news-item">
				
				<div className="news-detail">
					<div className="img-container">
						<date className="date">2017/2/28</date>
						<img src={require('../../images/made.jpg')} />
					</div>
					<article>
						<h1>新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</h1>
						<div className="content">
							<p className={"content-wrap" + (!this.state.showAll ?'':" content-wrap-auto")}>React Native 是由Facebook发布的开源框架，它的宣传语是“Learn once，write anywhere”，似乎是在标榜着React Native在手，在编程的世界里走遍天下都不怕，这消息一发出，就在开发人员内部掀起了一阵小高潮，一些人员感激涕零的表示：跨平台呀跨平台，这简直就是开发者的福音啊，另一些人员则表示：任何宣传一技在手，走遍天下的技术都是纸老虎，没有办法走到最后。那么，为什么在开发人员中会出现这两种截然不同的反应呢?</p>
							<p className="detail-btn">
								<span onClick = {() => this.toggleText()}>{this.state.btnText}</span>
							</p>
							
						</div>
					</article>
				</div>
			</div>
		);
	}
}

export default NewsItem;

