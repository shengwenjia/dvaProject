import React, { Component } from 'react'
import { connect } from 'dva'
import { browserHistory } from 'dva/router'

import { Card, Tag } from 'antd'
import styles from './NewsList.css'

class NewsList extends Component{
	render(){
		const data = this.props.item
		const newsDetail = () => {
			browserHistory.push('/detail?' + data.id)
		}
		return (
			<div>
				<div className={styles.maincontenttime}>
					{data.modifydate}
				</div>
				<div className={styles.maincontent}>
					<a style={{color:"inherit"}} onClick={newsDetail}>
						<Card title={<span><Tag color="green">【{data.type}】</Tag><span>{data.title}</span></span>} >
							{data.zhaiyao}
						</Card>
					</a>
				</div>
			</div>
		)
	}
}

NewsList.propTypes = {};

export default connect(({blackboardpage}) => ({blackboardpage}))(NewsList);