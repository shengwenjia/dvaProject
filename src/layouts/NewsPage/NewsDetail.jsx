import React, { Component } from 'react'
import { connect } from 'dva'
import { browerHistory } from 'dva/router'

import {Layout, Icon, Button, Card, Tag, Spin } from 'antd'
import styles from './IndexPage.css'
const {Header, Footer, Sider, Content } = Layout

class NewsDetail extends Component{
	componentDidMount(){
		const {dispatch} = this.props
		dispatch({
			type: 'blackboardpage/querynewsdetail',
			id: this.props.location.search.split("?")[1]
			// 或者这样取参： window.location.href.split("?")[1]
		})
	}
	backToList(){
		window.history.back()
	}
	render(){
		const { newsdetail } = this.props.blackboardpage
		return(
			<Layout>
				<Header className={styles.headTitle}>
					<span className={styles.titleSpan}>详情</span>
					<Button onClick={this.backToList} className={styles.backbtn}>
						<Icon className={styles.backicon} type="left" />
					</Button>
				</Header>
				<Content>
					<Card className={styles.detailcard} 
						  title={<div><Tag color="green">【{newsdetail.type}】</Tag><p>{newsdetail.title}</p></div>}
						  extra={newsdetail.createdate}>
						<div style={{marginTop: "20px"}} >
							{newsdetail.content}
						</div>
						<br />
						<a onClick={this.backToList} ><div className={styles.bottombackbtn}><Icon className={styles.bottombackicon} type="left"/>快报列表</div></a>
					</Card>
				</Content>
			</Layout>
		)
	}
}

export default connect(({blackboardpage}) => ({blackboardpage}))(NewsDetail)