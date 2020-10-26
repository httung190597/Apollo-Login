import React, { useState } from 'react';
import LoginForm from './LoginForm'
import { Button } from '@material-ui/core';

export default function SignIn(props) {
  var [showLoginForm, setShowLoginForm] = useState(false)

  function OpenLogin (){
    setShowLoginForm(true)
  }
  return (
    <div>
      {
        showLoginForm ? (<LoginForm {...props}/>) : (
          <Button 
            variant="contained"
            color="primary"
            onClick={() => OpenLogin()}
          >
            Login
          </Button>
        )
      }
    </div>

  );
}