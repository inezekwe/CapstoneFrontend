import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Card, CardActions, 
    CardContent, Paper, Grid, 
    TextField, Button } from '@material-ui/core';

export default function SavedQuotes() {
    const [quotes, setQuotes] = useState([]);
    
    useEffect(() => {
        axios.get('/api/quotes')
            .then(res => {
                console.log(res.data);
                setQuotes(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div></div>
    );
}