import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import RegisterDialog from "./RegisterDialog";
import ModalBackdrop from "../../../shared/ModalBackdrop";
import TermsOfServiceDialog from "./TermsOfServiceDialog";

class DialogSelector extends PureComponent {
  state = {
    loginStatus: null,
    registerStatus: null
  };

  setRegisterStatus = registerStatus => {
    this.setState({ registerStatus });
  };

  setLoginStatus = loginStatus => {
    this.setState({ loginStatus });
  };

  onClose_ = () => {
    const { onClose } = this.props;
    this.setState({ loginStatus: null, registerStatus: null });
    onClose_();
  };

  printDialog = () => {
    const { dialogOpen, openRegisterDialog, openTermsDialog } = this.props;

    const { loginStatus, registerStatus } = this.state;
    switch (dialogOpen) {
      case "register":
        return (
          <RegisterDialog
            onClose={this.onClose}
            openTermsDialog={openTermsDialog}
            status={registerStatus}
            setState={this.setRegisterStatus}
          />
        );
      case "termsOfService":
        return <TermsOfServiceDialog onClose={openRegisterDialog} />;

      default:
    }
  };
  render() {
    const { dialogOpen } = this.props;
    return (
      <Fragment>
        {dialogOpen && <ModalBackdrop open />}
        {this.printDialog()}
      </Fragment>
    );
  }
}

DialogSelector.propTypes = {
  dialogOpen: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired
};

export default DialogSelector;
