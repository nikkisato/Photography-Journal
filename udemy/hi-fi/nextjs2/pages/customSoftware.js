import React from 'react';
import Head from 'next/head';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Lottie from 'react-lottie';

import documentAnimation from '../src/animations/documentsAnimation/data';
import scaleAnimation from '../src/animations/scaleAnimation/data';
import automationAnimation from '../src/animations/automationAnimation/data';
import uxAnimation from '../src/animations/uxAnimation/data';

import Hidden from '@material-ui/core/Hidden';
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
  itemContainer: {
    maxWidth: '30em',
  },
}));

export default function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentAnimation,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>
          Custom Software Development and Design - Free Estimate
        </title>
        <meta
          name='description'
          key='description'
          content='Cutting-edge custom software development with gorgeous design from scratch - let us optimize your business, solving problems instead of creating new ones.'
        />
        <meta
          property='og:title'
          content='Bringing West Coast Technology to the Midwest | Custom Software Development'
          key='og:title'
        />
        <meta property='og:url' content='arc.com/customSoftware' key='og:url' />
        <link rel='canonical' key='canonical' href='arc.com/customSoftware' />
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
              href='/services'
              onClick={() => {
                props.setSelectedIndex(0);
              }}
            >
              <img src='/assets/backArrow.svg' alt='back to services page' />
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
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaboration process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              href='/mobileapps'
              onClick={() => {
                props.setSelectedIndex(2);
              }}
            >
              <img
                src='/assets/forwardArrow.svg'
                alt='Forward to iOS/Android App Development'
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction='row'
        justify='center'
        style={{ marginTop: '15em', marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction='column'
          md
          style={{ maxWidth: '40em' }}
          alignItems='center'
        >
          <Grid item>
            <Typography variant='h4'>Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src='/assets/bulb.svg' alt='lightbulb' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          md
          style={{
            maxWidth: '40em',
            marginBottom: matchesSM ? '10em' : 0,
            marginTop: matchesSM ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography variant='h4'>Save Time</Typography>
          </Grid>
          <Grid item>
            <img src='/assets/stopwatch.svg' alt='stopwatch' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          md
          alignItems='center'
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant='h4'>Save Money</Typography>
          </Grid>
          <Grid item>
            <img src='/assets/cash.svg' alt='cash' />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justify={matchesMD ? 'center' : 'space-between'}
        style={{ display: matchesMD ? 'grid' : undefined }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Reduce Errors. Reduce Waste. Reduce Costs
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environment impact
                this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item md style={{ marginBottom: matchesSM ? '2em' : null }}>
            <Lottie
              options={scaleOptions}
              isStopped={true}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : 'right'}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='row'
        style={{ marginTop: '20em', marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction='column' alignItems='center'>
          <Grid item>
            <img
              src='/assets/root.svg'
              alt='tree with roots extending out'
              height={matchesSM ? '300em' : '450em'}
              width={matchesSM ? '300em' : '450em'}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant='h4' gutterBottom align='center'>
              Root-Cause Analysis
            </Typography>
            <Typography variant='body1' paragraph align='center'>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant='body1' paragraph align='center'>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify={matchesMD ? 'center' : 'space-between'}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ display: matchesMD ? 'grid' : undefined }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Why waste time when you don't have to?
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginTop: matchesSM ? '2em' : null }}>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item md style={{ marginBottom: matchesSM ? '2em' : null }}>
            <Lottie
              options={uxOptions}
              isStopped={true}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : 'right'}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: '20em' }}>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
