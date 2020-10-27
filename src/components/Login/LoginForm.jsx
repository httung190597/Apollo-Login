import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import auth from './../auth';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {
    // ApolloClient,
    // InMemoryCache,
    // ApolloProvider,
    // useQuery,
    useMutation,
    gql
  } from "@apollo/client";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const SET_LOGIN = gql`
    mutation LogIn($email: String!, $password: String!){
        logIn(data: { email: $email, password: $password }) {
            isSuccess
            jwt
            message
        }
    }
`
export default function SignIn(props) {
    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [passWord,setPassWord] = useState('');
    const [setLogin] = useMutation(SET_LOGIN);

    function handleSubmit(event){
        event.preventDefault();
        // var data = {};
        // data.email = email;
        // data.passWord = passWord
        // setLogin({variables:{data:data}}).then(res =>{
        setLogin({variables:{email:email,password:passWord}}).then(res =>{
            auth.login(()=>{
                console.log(res)
                props.history.push("/private")
            })
        }).catch(err =>{
            console.log(err)
        })

    }

    function handleChange(event){
        if(event.target.name === "email"){
            setEmail(event.target.value)
        }
        if(event.target.name === "password"){
            setPassWord(event.target.value)
        }

    }
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <ValidatorForm className={classes.form} onSubmit={(event) => handleSubmit(event)}>
                <TextValidator
                    value={email}
                    onChange={(event) => handleChange(event)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    autoFocus
                    type="email"
                    label="Email"
                    name="email"
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'Email is not valid']}
                />
                <TextValidator
                    value={passWord}
                    onChange={(event) => handleChange(event)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    type="password"
                    label="Password"
                    name="password"
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    // onClick={(event) => handleSubmit(event)}
                    className={classes.submit}
                >
                    Sign In
                </Button>
            </ValidatorForm>
        </div>
        </Container>
    );
}