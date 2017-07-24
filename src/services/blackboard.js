import request from '../utils/request'

// 查询通告类型类别
export async function querySpecies(){
	return request('/api/mnProclamation/findTypes', {
		headers: {
			'Cache-Control': 'no-cache',
			'Content-type': 'application/json',
		},
		method: 'GET'
	})
}

// 查询通告列表
export async function queryNewsList(startTime, endTime, _type){
	let jsonResult = '';

	if (startTime) {
	  jsonResult += `${encodeURIComponent('startTime')}=${encodeURIComponent(startTime)}`;
	}
	if (endTime) {
	  jsonResult += `&${encodeURIComponent('endTime')}=${encodeURIComponent(endTime)}`;
	}
	if (_type && _type !== '所有') {
	  jsonResult += `&${encodeURIComponent('type')}=${encodeURIComponent(_type)}`;
	}

	return request('/api/mnProclamation/list', {
		headers:{
			'Cache-Control': 'no-cache',
			'Content-type': 'application/json'
		},
		method: 'POST',
		body:(jsonResult)
	})
}

//查询通告详情
export async function queryNewsDetail(id){
	return request('/api/mnProclamation/view', {
		headers:{
			'Cache-Control': 'no-cache',
			'Content-type': 'application/json'
		},
		method: 'POST',
		body: (`${encodeURIComponent('id')}=${encodeURIComponent(id)}`)
	})
}