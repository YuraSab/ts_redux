import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creator/user";
import {useAction} from "../hooks/useAction";

const UserList: FC = () => {

    // ctrl + space = show available variants of list
    const {users, loading, error} = useTypedSelector(state => state.user);

    // const dispatch = useDispatch();
    const {fetchUsers} = useAction();

    useEffect(  () => {
        // dispatch(fetchUsers() as any)
        fetchUsers()
    }, []);


    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};

export default UserList;