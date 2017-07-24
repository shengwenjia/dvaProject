import * as service from '../services/blackboard'

export default {
	namespace: 'blackboardpage',

	state: {
		queryspeciesloading: true,
	    querynewslistloading: true,
	    querynewsdetailloading: true,
	    specieslist: [],
	    newslist: [],
	    newsdetail: null,
	    
	},

	subscriptions: {

	},

	effects: {
		*queryspecies({ payload },{call, put}){
			const data = yield call(service.querySpecies)
			yield put({
				type: '_queryspecies',
				payload: data.data
			})
		},

		*querynewslist({ startTime, endTime, _type, payload },{call, put}){
			const data = yield call(service.queryNewsList, startTime, endTime, _type)
			yield put({
				type: '_querynewslist',
				payload: data.data
			})
		},

		*querynewsdetail({ id, payload },{call,put}){
			const data = yield call(service.queryNewsDetail, id)
			yield put({
				type: '_querynewsdetail',
				payload: data.data
			})
		}
	},

	reducers: {
		_queryspecies(state, action){
			return {...state, specieslist: action.payload.data, queryspeciesloading: false}
		},
		_querynewslist(state, action){
			return {...state, newslist: action.payload.data, querynewslistloading: false}
		},
		_querynewsdetail(state, action){
			return {...state, newsdetail: action.payload.data, querynewsdetailloading: false}
		}
	}
}