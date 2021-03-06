import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card,
         CardActionArea,
         CardContent,
         CardMedia,
         Typography } from '@material-ui/core'
import CodeIcon from '@material-ui/icons/Code'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    // background: "#86DEB7"
    background: "#f44336",
    color: 'white'
  },
  media: {
    height: 345,

  },
})

const DevCard = props => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Developers"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle2">
            <CodeIcon fontSize="small"/> {props.role}
          </Typography>
          <br/>
          <Typography variant="subtitle2">
            <FitnessCenterIcon fontSize="small"/> Favorite Workout: {props.favorite}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default DevCard