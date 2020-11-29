import { call, put,all,takeLatest } from 'redux-saga/effects'
import {receiveData} from './action'
import {GET_NEWS } from './actionType';




const fetchDataSaga = function*(){
      yield takeLatest(GET_NEWS, products);
}
function* products() {
		 try {
			  const url="http://jsonplaceholder.typicode.com/users";
		 const data = yield call(()=>{
				return fetch(url).then(res => res.json())
				});
			yield put(receiveData(data))
		 } catch (e){
			console.log(e)
		 }
}

export default function* rootSaga() {
   yield all([
   fetchDataSaga()
   ]);
}
