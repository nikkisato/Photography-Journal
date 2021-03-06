import React from 'react';
import Head from 'next/head';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Lottie from 'react-lottie';
import Hidden from '@material-ui/core/Hidden';
import integrationAnimation from '../src/animations/integrationAnimation/data';
import CallToAction from '../src/UI/CallToAction';

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>
          iOS/Android App Design and Development | Arc Development
        </title>
        <meta
          name='description'
          key='description'
          content='Mobile Apps Made Easy | Our cutting-edge mobile app development process lets us build beautifully designed, carefully crafted apps for both iOS and Android.'
        />
        <meta
          property='og:title'
          content='Bringing West Coast Technology to the Midwest | iOS/Android Apps Development'
          key='og:title'
        />
        <meta property='og:url' content='arc.com/mobileapps' key='og:url' />
        <link rel='canonical' key='canonical' href='arc.com/mobileapps' />
      </Head>
      <Grid
        item
        container
        direction='row'
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              href='/customsoftware'
              onClick={() => {
                props.setSelectedIndex(1);
              }}
            >
              <img
                src='/assets/backArrow.svg'
                alt='back to custom software page'
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography
              variant='h2'
              align={matchesMD ? 'center' : undefined}
              style={{
                lineHeight: matchesXS ? 1.1 : null,
                marginBottom: matchesXS ? '0.5' : null,
                fontSize: '2.25em',
              }}
            >
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Whether you want an app for you customers, employees, or yourself,
              we can build cross-platform native solutions for any part of your
              business process. This opens you up to a whole new world of
              possibilities by taking advantage of phone features like the
              camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Convenience. Connection
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              href='/websites'
              onClick={() => {
                props.setSelectedIndex(3);
              }}
            >
              <img
                src='/assets/forwardArrow.svg'
                alt='Forward to Websites Development'
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item container direction='column' md>
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              align={matchesSM ? 'center' : undefined}
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              paragraph
              align={matchesSM ? 'center' : undefined}
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesSM ? 'center' : undefined}
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            style={{
              maxWidth: matchesMD ? '15em' : '20em',
              height: matchesMD ? '20em' : undefined,
            }}
          />
        </Grid>
        <Grid item container direction='column' md>
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              align={matchesSM ? 'center' : 'right'}
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets - all at the same time.
            </Typography>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              expereince across all devices
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{
          marginBottom: '15em',
          display: matchesMD ? 'grid' : undefined,
        }}
      >
        <Grid item container md alignItems='center' direction='column'>
          <Grid item>
            <Typography align-='center' variant='h4' gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src='/assets/swissKnife.svg' alt='swiss army knife' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          md
          alignItems='center'
          style={{
            marginTop: matchesMD ? '10em' : 0,
            marginBottom: matchesMD ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography variant='h4' gutterBottom align-='center'>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src='/assets/extendAccess.svg'
              alt='tear-one-off sign'
              style={{ maxWidth: matchesXS ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>
        <Grid item container direction='column' md alignItems='center'>
          <Grid item>
            <Typography variant='h4' gutterBottom align-='center'>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img
              src='/assets/increaseEngagement.svg'
              alt='app with notifications'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
