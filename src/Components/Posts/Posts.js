import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, TextField } from '@mui/material';

export default function Posts({ props }) {
    const [showComments, setShowComments] = useState(false)

    return (
        <Card sx={{ maxWidth: 2045 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={props.image}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.caption}
                </Typography>
            </CardContent>
            <br></br>
            <CardActions>
                <Button size="small">{props.likesCount} Like</Button>
                <Button size="small" onClick={() => { setShowComments(!showComments) }}>Comment</Button>
                <Typography variant="body2" color="text.secondary">

                </Typography>
            </CardActions>
            {showComments ? <CardContent>
                <TextField styles={{ margin: '20px' }} id="standard-basic" label="Add comments" variant="standard" />
                <button>Comment</button>
                {props.comments.map((comment) => {
                    return <Typography variant="body2" color="text.secondary">
                        {comment}
                    </Typography>
                })}
            </CardContent> : ''}

        </Card>
    );
}

