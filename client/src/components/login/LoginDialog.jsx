import React, { useState, useContext } from "react";
import { Dialog, Typography, Box, TextField, Button } from "@mui/material";
import { LoginDataContext } from "../../context/loginContext";
import { authenticateLogin, authenticateSignup } from "../service/api";

const useStyles = () => {
  return {
    dialogContainer: {
      height: "70vh",
      width: "30vw",
      justifyContent: "space-between",
    },
    dialogHeader: {
      background: `#2874f0  center `,
      height: "15%",
    },
    headerContentContainer: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      color: "white",
      paddingBottom: 10,
      fontWeight: 600,
    },
    subHeading: { color: "white", fontSize: 12 },
    bodyContainer: { display: "flex", flexDirection: "column", padding: 40 },
    fieldContainer: {
      marginBottom: 20,
    },
    privacyContent: {
      marginBottom: 20,
      fontSize: 12,
      color: "#878787",
    },
    loginButton: {
      textTransform: "none",
      backgroundColor: "#FB641B",
      color: "#ffffff",
      borderRadius: 5,
      marginBottom: 20,
    },
    otpButton: {
      textTransform: "none",
      backgroundColor: "#ffffff",
      color: "#2874f0",
      borderRadius: 5,
      boxShadow: `0 2px 4px 2px rgb(0 0 0/ 10%)`,
      marginBottom: 20,
    },
    signupContent: {
      fontSize: 14,
      textAlign: "center",
      color: "#2874f0",
      fontWeight: 600,
      cursor: "pointer",
    },
    continueButton: {
      textTransform: "none",
      backgroundColor: "#FB641B",
      color: "#ffffff",
      borderRadius: 5,
      marginBottom: 20,
    },
    errorMessage: { color: "red", fontSize: 12, marginTop: -20 },
  };
};
const LoginDialog = ({ open, setOpen }) => {
  const styles = useStyles();
  const { userData, setUserData } = useContext(LoginDataContext);

  const dialogIntialValues = {
    login: {
      view: "login",
      heading: "Login",
      subHeading: "Get Access to your Orders,Wishlist and Recommendations",
    },
    signup: {
      view: "signup",
      heading: "Looks like you are new here!",
      subHeading: "Sing up with your mobile number to get started",
    },
  };

  const initialSignUpValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phone: "",
  };

  const initialLoginValues = {
    userName: "",
    password: "",
  };

  const [loginDialogData, setLoginDialogData] = useState(dialogIntialValues.login);
  const [signUpDetails, setSignUpDetails] = useState(initialSignUpValues);
  const [loginDetails, setloginDetails] = useState(initialLoginValues);
  const [signUpError, setSignUpError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const toggleDialog = () => {
    setLoginDialogData(dialogIntialValues.signup);
  };

  const onCloseDialog = () => {
    setOpen(false);
    setLoginDialogData(dialogIntialValues.login);
    setLoginError(false);
    setSignUpError(false);
  };

  const onInputChange = (e) => {
    setSignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onValueChange = (e) => {
    setloginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  /** call API to sign up an user */
  const singUpUser = async () => {
    const response = await authenticateSignup(signUpDetails);

    if (response?.status === 200) {
      onCloseDialog();
      setUserData(signUpDetails.firstName);
    } else {
      setSignUpError(true);
    }
  };

  /** call API to login an user */
  const loginUser = async () => {
    const response = await authenticateLogin(loginDetails);

    if (response?.status === 200) {
      onCloseDialog();
      setUserData(response.data.data.firstName);
    } else {
      setLoginError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onCloseDialog}
      PaperProps={{ sx: { maxWidth: "unsert" } }}
    >
      <Box style={styles.dialogContainer}>
        <Box style={styles.dialogHeader}>
          <Box style={styles.headerContentContainer}>
            <Typography style={styles.heading}>{loginDialogData.heading}</Typography>
            <Typography style={styles.subHeading}>
              {loginDialogData.subHeading}
            </Typography>
          </Box>
        </Box>

        {loginDialogData.view === "login" ? (
          <Box style={styles.bodyContainer}>
            <TextField
              variant={"standard"}
              label="Enter user name"
              required
              style={styles.fieldContainer}
              onChange={(e) => onValueChange(e)}
              name="userName"
            />
            {loginError && (
              <Typography style={styles.errorMessage}>
                Please enter valid username or password
              </Typography>
            )}
            <TextField
              variant={"standard"}
              label="Enter Password"
              required
              style={styles.fieldContainer}
              name="password"
              onChange={(e) => onValueChange(e)}
            />
            <Typography style={styles.privacyContent}>
              By Continuing you agree to BuyZone's Terms of Use and privacy
              policy
            </Typography>

            <Button style={styles.loginButton} onClick={loginUser}>
              Login
            </Button>
            <Typography style={styles.signupContent} onClick={toggleDialog}>
              New to BuyZone? create an account
            </Typography>
          </Box>
        ) : (
          <Box style={styles.bodyContainer}>
            <TextField
              variant={"standard"}
              label="Enter first name"
              required
              style={styles.fieldContainer}
              name="firstName"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              variant={"standard"}
              label="Enter Last Name"
              required
              style={styles.fieldContainer}
              name="lastName"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              variant={"standard"}
              label="Enter User Name"
              required
              name="userName"
              style={styles.fieldContainer}
              onChange={(e) => onInputChange(e)}
            />
            {signUpError && (
              <Typography style={styles.errorMessage}>
                Please enter unique username
              </Typography>
            )}
            <TextField
              variant={"standard"}
              label="Enter Email"
              required
              name="email"
              style={styles.fieldContainer}
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              variant={"standard"}
              label="Enter Password"
              required
              name="password"
              style={styles.fieldContainer}
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              variant={"standard"}
              label="Enter Phone Number"
              required
              name="phone"
              style={styles.fieldContainer}
              onChange={(e) => onInputChange(e)}
            />

            <Button style={styles.continueButton} onClick={singUpUser}>
              Continue
            </Button>
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

export default LoginDialog;
