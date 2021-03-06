import React from 'react';
//import ReactGA from 'react-ga';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../UI/ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '../Link';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url('/assets/background.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url('/assets/mobileBackground.jpg')`,
      backgroundAttachment: 'inherit',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: 0,
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      alignItems='center'
      justify={matchesSM ? 'center' : 'space-between'}
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction='column'>
          <Grid item>
            <Typography
              variant='h2'
              style={{ lineHeight: matchesSM ? 1.1 : null }}
              gutterBottom
            >
              Simple Software.
              <br />
              {matchesSM && <br />}Revolutionary Results
            </Typography>
            <Typography
              variant='subtitle2'
              style={{ fontSize: matchesSM ? '1.25rem' : '1.5rem' }}
            >
              Take advantage of the 21st Century.
            </Typography>
            <Grid container item justify={matchesSM ? 'center' : undefined}>
              <Button
                component={Link}
                href='/revolution'
                variant='outlined'
                className={classes.learnButton}
                onClick={() => props.setValue(4)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          href='/estimate'
          component={Link}
          className={classes.estimateButton}
          onClick={() => {
            props.setValue(5);
            //ReactGA.event({
            //  category: 'Estimate',
            //  action: 'Call To Action Pressed',
            //});
          }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
