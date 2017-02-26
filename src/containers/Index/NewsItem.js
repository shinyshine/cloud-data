import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NewsItem extends React.Component {
	constructor (props) {
		super(props);

	}

	render() {
		return (
			<article className="news-item">
				<h2>文章标题</h2>
				<div className="news-detail">
					<div className="img-container">
						<a href="#"><img src={require('../../images/made.jpg')} /></a>
					</div>
					<div className="news-caption">
						<p className="news-classify"><span>体育类</span></p>
						<p className="news-date"><span>2017/2/20</span></p>
						<p className="news-abstract">
							离法国总统选举投票还有两个月，一些对本国政坛彻底“死心”的法国人在网上发起请愿，呼吁奥巴马参选。 一个名为obama2017.fr的竞选网站现身网络，请愿者们还将奥巴马的海报贴在巴黎大街小巷。竞选网站上征集签名的请愿书称，法国人已经受够了这五年的“鬼日子”，为避免再选出一个失败的总统，法国人已下定决心做出彻底的改变：选一个外国人来当法国总统。“奥巴马刚从美国总统的岗位上卸任，他拥有全球最完美的履历，我们为什么不聘请他来当法国总统？”
							离法国总统选举投票还有两个月，一些对本国政坛彻底“死心”的法国人在网上发起请愿，呼吁奥巴马参选。
						</p>
					</div>


				</div>
			</article>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		newsList: state.newsList
	}
}

/*const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({})
	}

}*/

export default connect(mapStateToProps, null)(NewsItem);

