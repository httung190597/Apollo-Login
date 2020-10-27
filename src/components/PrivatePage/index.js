import React,{useEffect} from 'react';
import auth from './../auth';
import Button from '@material-ui/core/Button';
import {
    useMutation,
    gql,
    useQuery
  } from "@apollo/client";
const LOG_OUT = gql`
    mutation {
        logout{
            isSuccess
            message
        }
    }
`;
const USER = gql`
    query {
        me {
            email
        }
    }
`;

function PrivatePage(props) {
    const [logOut] = useMutation(LOG_OUT);
    const [user] = useQuery(USER)
    useEffect(()=>{
        user().then(res=>{
            console.log(res)
        })
    },[])
    function handleLogOut(event){
        event.preventDefault();
        logOut().then(res =>{
            console.log(res)
            auth.logout(()=>{
                props.history.push("/")
            })
        }).catch(err =>{
            console.log(err)
        })
        
    }
    return (
        <div>
            <h2>Private Page</h2>
            <Button
                    variant="contained"
                    color="primary"
                    onClick={(event) => handleLogOut(event)}
                >
                    Log Out
            </Button>
        </div>
    );
}

export default PrivatePage;