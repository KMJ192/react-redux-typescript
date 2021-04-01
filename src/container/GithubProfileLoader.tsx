import React from 'react';
import GithubUsernameForm from '../components/GithubUsernameForm';
import GithubProfileInfo from '../components/GithubProfileInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getUserProfileThunk } from '../modules/github';

function GithubProfileLoader() {
    const { data, loading, error } = useSelector((state: RootState) => state.github.userProfile);
    const dispatch = useDispatch();
    
    const onSubmitUsername = (username: string)=>{
        console.log(username);
        dispatch(getUserProfileThunk(username));
        console.log(username);
    }

    return (
        <>
            <GithubUsernameForm onSubmitUsername={onSubmitUsername}/>
            {loading && <p style={{ textAlign: 'center'}}>로딩중</p>}
            {error && <p style={{ textAlign: 'center'}}>Erro발생</p>}
            {data && <GithubProfileInfo
                bio={data.bio}
                blog={data.blog}
                name={data.name}
                thumbnail={data.avatar_url}
            />}
        </>
    )
}

export default GithubProfileLoader