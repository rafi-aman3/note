import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import { Delete, DeleteOutlined } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => {
    return {
        test: {
            border: (note) => {
                if(note.category == "sports") {
                    return '1px solid #66c3ff'
                }
            }
        },
        avatar: {
            backgroundColor: (note) => {
                if(note.category === "sports") {
                    return '#a5d8ff'
                }

                if(note.category === "art") {
                    return '#c49799'
                }
            }
        }

    }
})

const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyles(note);


    return (
        <div>
            <Card elevation={2} className={classes.test}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>

                </CardContent>
            </Card>
        </div>
    );
};

export default NoteCard;