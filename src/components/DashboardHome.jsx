import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Card, CardActions, 
         CardContent, Paper, Grid, 
         TextField, Button } from '@material-ui/core';

export default function DashboardHome() {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
  
  
    useEffect(() => {
  
      axios.get('api/random')
      .then(res => {
          console.log(res.data);
          setQuote(res.data[0].q);
          setAuthor(res.data[0].a);
      })
      .catch(err => {
          console.log(err);
      })
  
    }, []);

    const handleClick = () => {
        alert("Button clicked");
      }
    

    return (
        <Grid   
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>
            <Grid item lg={8} xs={10}>
                <Card elevation={5}>
                    <CardContent>
                        <Typography variant='h5'><blockquote>&ldquo;{quote}&rdquo; &mdash;<footer>{author}</footer></blockquote></Typography>
                    </CardContent>
                    <CardActions>
                        <Button color="primary" size="small" onClick={handleClick}>
                        Save
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item lg={6} xs={8}>
                <Paper elevation={5}>
                    <form noValidate autoComplete="off">
                        <TextField multiline rows={5} placeholder="Write your gratitudes here" variant='outlined' label="Gratitudes" />
                        <input type="file" accept="image/*" id="uploadBtn" style={{display: 'none'}}/>
                        <label htmlFor="uploadBtn">
                        <Button variant="contained" color="primary" component="span">
                            Upload
                        </Button>
                    </label>
                    <input type="submit" id="submitBtn" style={{display: 'none'}}/>
                    <label htmlFor="submitBtn">
                        <Button variant="contained" color="primary" component="span">
                            Save
                        </Button>
                    </label>
                    </form>
                </Paper>
        </Grid>
      </Grid>
    );
}