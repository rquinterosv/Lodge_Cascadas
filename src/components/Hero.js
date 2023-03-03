import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function HeroSection() {
  const videoId = 'VIDEO_ID_HERE';
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Paper>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">
            Your Title Here
          </Typography>
          <Typography variant="body1">
            Your subtitle or description here
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <iframe 
            width="100%" 
            height="315" 
            src={videoUrl} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default HeroSection;