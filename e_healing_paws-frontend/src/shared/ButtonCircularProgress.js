import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Box, withStyles } from "@material-ui/core";

const styles = theme => ({
  circularProgress: {
    color: theme.palette.secondary.main
  }
});

function ButtonCircularPrgress(props) {
  const { size, classes } = props;
  return (
    <Box color="secondary.mian" pl={1.5} display="flex">
      <CircularProgress
        size={size ? size : 24}
        thickness={size ? (size / 5) * 24 : 5}
        className={classes.circularProgress}
      />
    </Box>
  );
}

ButtonCircularPrgress.propTypes = {
  size: PropTypes.number,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ButtonCircularPrgress);
