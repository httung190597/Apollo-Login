import React from 'react';
import auth from './../auth';
import Button from '@material-ui/core/Button';



function PrivatePage(props) {
    function logOut(event){
        event.preventDefault();
        auth.logout(()=>{
            props.history.push("/")
        })
    }
    return (
        <div>
            <h2>Private Page</h2>
            <Button
                    type="submit"
                    
                    variant="contained"
                    color="primary"
                    onClick={(event) => logOut(event)}
                >
                    Log Out
            </Button>
        </div>
    );
}

export default PrivatePage;