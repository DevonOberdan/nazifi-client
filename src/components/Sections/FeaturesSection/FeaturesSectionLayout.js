import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {hexToRgb, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  container: {
    marginTop: theme.spacing(14),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    //backgroundColor: theme.palette.common.black,
    //backgroundColor: `linear-gradient(45deg, ${theme.palette.secondary.light} 5%, ${theme.palette.secondary.dark} 60%)`,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: '30%',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
  arrowDown: {
    // position: 'absolute',
    // bottom: theme.spacing(4),
  },
}));

function FeaturesSectionLayout(props) {
  const { backgroundClassName, children } = props;
  const classes = useStyles()
  return (
      <Container className={classes.container}>
        {children}
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
      </Container>
  );
}

FeaturesSectionLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default FeaturesSectionLayout;
