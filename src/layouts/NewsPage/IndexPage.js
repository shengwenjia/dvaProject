import React, { Component } from 'react'
import { connect } from 'dva'
import { browerHistory } from 'dva/router'

import NewsList from '../../components/NewsList/NewsList'
import { Layout, Select } from 'antd'
import styles from './IndexPage.css'

const { Header, Content } = Layout
const Option = Select.Option

class IndexPage extends Component {
	constructor(){
		super()
		this.state = {
			st: Date.parse(new Date())/1000 - 3600*24*30,
			et: Date.parse(new Date())/1000,
			_type: '所有'
		}
	}
	componentDidMount(){
		const {dispatch} = this.props
		dispatch({
			type: 'blackboardpage/queryspecies'
		})
		// dispatch({
		// 	type: 'blackboardpage/querynewslist',
		// })
		this.queryNewsList()
	}

	queryNewsList(){
		const {dispatch} = this.props
		dispatch({	
			type: 'blackboardpage/querynewslist',
			startTime: this.state.st,
			endTime: this.state.et,
			_type: this.state._type
		})
	}

	render(){
		const {specieslist, newslist} = this.props.blackboardpage
		const all = {
			name: '所有',
			number: 'all',
		}
		let flag = false
		specieslist.map((item,key) => {
			if(item.number == 'all'){
				flag = true
			}
		})
		if(!flag){
			specieslist.push(all)
		}
		
		// console.log(specieslist)为什么会render()3次？？？
		const dropmenu = specieslist.map((item,key) => {
			return <Option value={item.name} key={key}>{item.name}</Option>
		})
		
		const newsList = newslist.map((item,key) => {
			return <NewsList key={key} item={item} />
		})

		const selectSpecies = (value) =>{
			this.setState({
				_type: value
			})
			this.queryNewsList.bind(this)
		}
		const selectPeriods = (value) =>{
			if(value == "week"){
				this.setState({
					st: Date.parse(new Date())/1000 - 3600*24*7
				})
			}
			if(value == "3month"){
				this.setState({
					st: Date.parse(new Date())/1000 - 3600*24*30*3
				})
			}
			if(value == "month"){
				this.setState({
					st: Date.parse(new Date())/1000 - 3600*24*30
				})
			}
			this.queryNewsList.bind(this)
		}

		return(
			<Layout>
				<Header className={styles.headTitle}>监控黑板报</Header>
				<Content>
					<div className={styles.selectMenu}>
						<Select className={styles.dropdownmenu} defaultValue="所有" placeHolder="通告类型" onChange={selectSpecies}>
							{dropmenu}
						</Select>
						<Select className={styles.dropdownmenu} defaultValue="month" placeHolder="时间范围" onChange={selectPeriods}>
							<Option value="week">最近7天</Option>
							<Option value="month">最近30天</Option>
							<Option value="3month">最近3个月</Option>
						</Select>
					</div>
					<div className={styles.maincontent}>
						{newsList}
					</div>
				</Content>
			</Layout>
		)
	}

}

IndexPage.propTypes = {}

export default connect(({blackboardpage}) => ({blackboardpage}))(IndexPage)