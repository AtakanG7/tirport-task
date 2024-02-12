import React, { useState } from 'react';
import "./Login.css"

import { FaTrailer } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BsKeyFill } from "react-icons/bs";

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Specify the content type as JSON
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        redirect("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  function redirect(url: string) {
    console.log("Redirecting to:", url);
    window.location.href = url;
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    event.key === "Enter" && handleLogin()
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div className="screen">
      <div className="row justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <div style={{marginTop:"15%"}}  className="card card-container px-2">
            <div className="card-body">
              <h4 className="card-title text-center font pb-3"><FaTrailer /><br></br><br></br> Merhaba, hoşgeldin!</h4>
              <form className='form-container' onKeyDown={handleKeyDown}>
                <div className="mb-3">
                  <Box sx={{ display: 'flex'}}>
                    <div className='form-field-icon-container d-flex justify-content-center align-items-center pt-3'>
                      <BsFillPersonFill />
                    </div>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                      <InputLabel className='font' htmlFor="standard-adornment">Kullanıcı Adınız</InputLabel>
                      <Input
                        id="standard-adornment"
                        type="text"
                        onChange={(e) => {setUsername(e.target.value)}}
                      />
                    </FormControl>
                  </Box>
                </div>
                <div className="mb-3">
                  <Box sx={{ display: 'flex'}}>
                    <div className='d-flex justify-content-center align-items-center pt-3'>
                      <BsKeyFill />
                    </div>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                      <InputLabel className='font' htmlFor="standard-adornment-password">Password</InputLabel>
                      <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => {setPassword(e.target.value)}}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                </div>
                <div className='mb-3 login-form-button'>
                  <button
                    type="button"
                    className="btn btn-primary font"
                    onClick={handleLogin}
                  >
                    Başla
                  </button>
                </div>
                <div className="mb-3 d-flex w-100 flex-start font">
                  <Link to="/signup" className='font small'>Hesap oluştur</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
