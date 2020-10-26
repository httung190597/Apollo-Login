import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import auth from './../auth'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
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
        // setLogin({variables:{data:{email:email,password:passWord}}}).then(res =>{
            auth.login(()=>{
                // console.log(res)
                props.history.push("/private")
            })
        // }).catch(err =>{
        //     console.log(err)
        // })

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
            <form className={classes.form}>
                <TextField
                    value={email}
                    onChange={(event) => handleChange(event)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    // autoComplete="email"
                    autoFocus
                />
                <TextField
                    value={passWord}
                    onChange={(event) => handleChange(event)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    // autoComplete="current-password"
                />
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={(event) => handleSubmit(event)}
                    className={classes.submit}
                >
                    Sign In
                </Button>
            </form>
        </div>
        </Container>
    );
}