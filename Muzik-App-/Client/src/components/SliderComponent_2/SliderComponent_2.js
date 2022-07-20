import React from 'react'
import './SliderComponent_2.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Login from '../../img/login.PNG'

export default function SliderComponent_2() {
  const [SongData, setSongData] = React.useState([]);

  React.useEffect(() => {
    //const apikey='37fa14ba27d26e5cefaed6b5832eb835';
    //let urllastfm=`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apikey}&format=json`
    let myapiurl="http://localhost:8000/api/topArtists"
    fetch(myapiurl)
      .then(res => res.json())
      .then(data => {
        
        setSongData(data?.artists?.artist);
      }

      )
  }, []);



  return (
    <div className='SliderComponent_2'>
        <h2 className='SliderComponentHeading SongComponentHeading'>Top Artists</h2>
      <div className='Sub-SliderComponent'>
        {SongData.map((Song) =>
          <div className="SliderComponent_2_card">
          <Card className='cards-layout'>
          <CardActionArea>
            <CardMedia
            //{`"${Song.image[0]['#text']}"`}
              component={"img"}
              height="140"
              image={Login}
              alt="green iguana"
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                {Song?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Song?.listeners}  
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>)}


      

    </div>
    </div>
  )
}
