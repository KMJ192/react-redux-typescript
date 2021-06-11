import { getUserProfileAsync, GET_USER_PROFILE } from "./actions";
import { call, put, takeEvery } from 'redux-saga/effects';
import { getUserProfile, GithubProfile } from "../../api/github";

function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>){
    console.log(action);
    try{
        //call -> first param => 실행할 함수, 함수의 param
        const userProfile: GithubProfile = yield call(getUserProfile, action.payload);
        //put -> 특정 action dispatch -> store에 dispatch
        yield put(getUserProfileAsync.success(userProfile));
    }catch(e: any){
        yield put(getUserProfileAsync.failure(e));
    }
}

export function* githubSaga(){
    yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}