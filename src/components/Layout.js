import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import { format } from 'date-fns';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: '#a1867f',
            width: '100%',
            padding: theme.spacing(3)

        },

        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: "flex",

        },
        active: {
            backgroundColor: "#f4f4f4"

        },
        title: {
            padding: theme.spacing(3)
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(1)

        }

    }

})


const menuItems = [
    {
        text: 'My Notes',
        icon: <SubjectOutlined color="primary" />,
        path: "/"
    },
    {
        text: 'Create Notes',
        icon: <AddCircleOutlined color="primary" />,
        path: "/create"
    }
]

const Layout = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    return (
        <div className={classes.root}>
            <AppBar
                className={classes.appBar}
                elevation={0}

            >
                <Toolbar>
                    <Typography className={classes.date}>
                        { format(new Date(), 'do MMM, Y')}
                    </Typography>
                    <Typography>Rafi</Typography>
                    <Avatar src="/avatar.jpg" className={classes.avatar}/>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>Notes</Typography>
                </div>

                <List>
                    {
                        menuItems.map(item => (
                            <ListItem
                                key={item.text}
                                button
                                onClick={() => history.push(item.path)}
                                className={location.pathname == item.path ? classes.active : null}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>

                        ))
                    }

                </List>
            </Drawer>


            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    );
};

export default Layout;