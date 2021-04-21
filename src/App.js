import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import './App.css'
import Feed from './Feed'
import Header from './Header'
import Sidebar from './Sidebar'
import {selectUser} from './features/userSlice';
import Login from './Login'
import { auth } from './firebase';
import Logout from './features/userSlice'



function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if(userAuth){
               dispatch(Login({
                   email:userAuth.email,
                   uid:userAuth.uid,
                   displayName: userAuth.displayName,
                   photoURL: userAuth.picture,
               }))
            }else{
               dispatch(Logout());
            }
        })
    }, [])

    return (
        <div className="app">
            <Header />

            {!user ? <Login /> : (
                <div class="app__body">
                  <Sidebar />
                  <Feed />
                </div>
            )}

        </div>
    )
}

export default App;
