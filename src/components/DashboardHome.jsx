import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Card, CardHeader, CardActions, 
         CardContent, Grid, 
         TextField, Button, Input,
         InputLabel } from '@material-ui/core';

//DashboardHome shows the motivational quote of the day and
//you can also write and save your gratitudes

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
                        <Typography variant='h5' color='textSecondary'>Quote of the Day</Typography>
                        <Typography variant='h6'><blockquote>&ldquo;{quote}&rdquo; &mdash;<footer>{author}</footer></blockquote></Typography>
                    </CardContent>
                    <CardActions>
                        <Button color="primary" size="small" onClick={handleClick}>
                        Save
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item lg={6} xs={8}>
                <Card  elevation={5}>
                    <CardHeader title="Give Gratitudes" subheader="Write what you're thankful for today" />
                    <CardContent>
                    <form noValidate autoComplete="off">
                        <TextField fullWidth multiline rows={8} placeholder="Write your gratitudes here" variant='outlined' label="Gratitudes" />
                        <Input type="file" accept="image/*" id="uploadBtn" style={{display: 'none'}}/>
                        <InputLabel htmlFor="uploadBtn">
                        <Button size="small" color="primary" component="span">
                            Upload Image
                        </Button>
                    </InputLabel>
                    <Input type="submit" id="submitBtn" style={{display: 'none'}}/>
                    <InputLabel htmlFor="submitBtn">
                        <Button size="small" color="primary" component="span">
                            Save
                        </Button>
                    </InputLabel>
                    </form>
                    </CardContent>

                </Card>
        </Grid>
      </Grid>
    );
}