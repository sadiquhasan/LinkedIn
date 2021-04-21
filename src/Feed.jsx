import React, { useState , useEffect } from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/Event';
import CalendarViewIcon from '@material-ui/icons/CalendarToday';
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase'

function Feed() {

    const [input , setInput] = useState("");
    const [posts, setPosts] = useState([]);
 
    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        })
    }, []) 

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'sadiqu hasan',
            description: 'this is a test',
            message: input,
            photo : '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("");
    }

    return ( 
        <div class="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} color="#70B5F9" title="Photo" />
                    <InputOption Icon={SubscriptionsIcon} color="#E7A33E" title="Video" />
                    <InputOption Icon={EventNoteIcon} color="#C0CBCD" title="Event" />
                    <InputOption Icon={CalendarViewIcon} color="#7FC15E" title="Write article" />
                </div>
            </div>

            {posts.map(({id, data:{ name , description , message , photoUrl }})=>(
               <Post 
                 key={id}
                 name={name}
                 description={description}
                 message={message}
                 photoUrl={photoUrl}
               />
            ))}

        </div>
    )
}

export default Feed
