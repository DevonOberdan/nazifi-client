import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import introStyles from 'components/Sections/IntroSection/introStyles'


const useStyles = makeStyles(introStyles)

function IntroSectionLayout(props) {
  const { backgroundClassName, children } = props;
  const classes = useStyles()
  
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {children}
        <div className={classes.backdrop} />
        <div className={backgroundClassName} />
      </Container>
    </section>
  );
}

IntroSectionLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default IntroSectionLayout;
