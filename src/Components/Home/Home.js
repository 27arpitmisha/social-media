import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Navigate, useNavigate } from 'react-router';
import { useAuth } from '../../Context/UserAuthenticationContext'
import Posts from '../Posts/Posts';
import { TextField } from '@mui/material';
import UserProfile from '../Profile/UserProfile';
const drawerWidth = 240;
export default function Home() {
    const { user, signOutUser } = useAuth();
    const [userName, setUserName] = useState('');
    const [serachSuggestion, setSerachSuggestion] = useState([])
    const [toDisplay, setToDisplay] = useState('Home');
    const posts = [{ id: 1, image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', caption: 'Lizards are a widespread group of squamate reptiles, with over species, ranging across all continents except Antarctica', likesCount: 12, comments: ["Nice", "Good"] },
    { id: 1, image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80', caption: 'image (from Latin: imago) is an artifact that depicts visual perception, such as a photograph or other two-dimensional · picture, that resembles a subject—', likesCount: 17, comments: ["Nice", "Good", "wow"] },]
    const navigate = useNavigate();
    const friends = ['Arpit', 'Ankit', 'Arjun', 'Arun', 'Mohan', 'Manish', 'Raju']
    useEffect(() => {
        if (user?.displayName) {
            setUserName(user?.displayName)
        } else {
            setUserName(user?.email.split("@")[0]);
        }
    }, [])

    const signoutHandler = async () => {
        try {
            await signOutUser();
            navigate('/login');
        } catch (e) {

        }
    }
    const fetchDisplayPanel = () => {
        if (toDisplay === 'Home') {
            return posts.map((post) => {
                return <Posts props={post} />
            })
        } else if (toDisplay === 'Profile') {
            return <UserProfile userName={userName} />
        }
    }

    const onChangeHandler = (event) => {
        if (event.target.value !== '') {
            const newList = friends.filter((el) => {
                return el.startsWith(event.target.value)
            })

            setSerachSuggestion([...newList]);
        } else {
            setSerachSuggestion([]);
        }
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Welcome, {userName}
                    </Typography>
                    <TextField styles={{ margin: '20px' }} id="standard-basic" onChange={onChangeHandler} label="Search a friend" variant="standard" />
                    <button onClick={signoutHandler}>Signout</button>
                </Toolbar>
                {
                    serachSuggestion.map(el => {
                        return <li>
                            {el}
                        </li>
                    })
                }
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Home', 'Profile', 'Friends', 'My Posts', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding onClick={() => { setToDisplay(text) }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />

                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {
                    fetchDisplayPanel()
                }
            </Box>

        </Box>

    )
}



