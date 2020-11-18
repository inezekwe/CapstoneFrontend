import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Card, CardActions, 
    CardContent, Grid, Button } from '@material-ui/core';

//Will load all saved motivational quotes and display on page
//Right now using zenquotes API to show 5 quotes but will connect to backend

export default function SavedQuotes() {
    const [quotes, setQuotes] = useState([]);
    
    useEffect(() => {
        axios.get('/api/quotes')
            .then(res => {
                setQuotes(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const q = [];
    for(var i = 0; i < 5; i++) {
        q.push(
            <Grid item lg={8} xs={10}>
            <Card elevation={5} key={i}>
            <CardContent>
                <Typography variant='h5'><blockquote>&ldquo;{quotes[i].q}&rdquo; &mdash;<footer>{quotes[i].a}</footer></blockquote></Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" size="small">
                Remove
                </Button>
            </CardActions>
        </Card>
        </Grid>)
    }

    return (
        <div>
            <Grid   container spacing={4} direction="column" alignItems="center" justify="center" style={{ minHeight: '10vh' }}>
                {q}
            </Grid>
        </div>
    );
}