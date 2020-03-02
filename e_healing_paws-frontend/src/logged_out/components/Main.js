import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";
import NavBar from "./navigation/NavBar";
import DialogSelector from "./register_login/DialogSelector";

AOS.init({ once: true });

const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.common.white
  }
});

class Main extends PureComponent {
  state = {
    selectedTab: null,
    mobileDrawerOpen: false,
    blogPosts: [],
    dialogOpen: null,
    cookieRulesDialogOpen: false
  };

  openRegisterDialog = () => {
    this.setState({
      dialogOpen: "register",
      mobileDrawerOpen: false
    });
  };

  render() {
    const { classes } = this.props;
    const {
      selectedTab,
      mobileDrawerOpen,
      blogPosts,
      dialogOpen,
      cookieRulesDialogOpen
    } = this.state;

    return (
      <div className={classes.wrapper}>
        <DialogSelector
          openLoginDialog={this.openLoginDialog}
          dialogOpen={dialogOpen}
          onClose={this.closeDialog}
          openTermsDialog={this.openTermsDialog}
          openRegisterDialog={this.openRegisterDialog}
          openChangePasswordDialog={this.openChangePasswordDialog}
        />
        <NavBar
          selectedTab={selectedTab}
          selectTab={this.selectTab}
          openLoginDialog={this.openLoginDialog}
          openRegisterDialog={this.openRegisterDialog}
          mobileDrawerOpen={mobileDrawerOpen}
          handleMobileDrawerOpen={this.handleMobileDrawerOpen}
          handleMobileDrawerClose={this.handleMobileDrawerClose}
        />
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
