import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { TfiMoney } from "react-icons/tfi";

import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

import "./Coupon.css"

const card = (
  <React.Fragment >
    <CardContent className='card-body' >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        username
      </Typography>
      <Typography variant="body2">
        <strong>  Istanbul&nbsp; <FaLocationCrosshairs color='blue'/>&nbsp;<FaArrowRight /> <FaMapLocationDot color='blue'/> &nbsp; Ankara</strong>
      </Typography>
      <Button className='coupon-button'>
          <Button style={{color:"blue", margin:"0px"}}>
            <TfiMoney />50  kullan
          </Button>
      </Button>
    </CardContent>
  </React.Fragment>
);

export default function Coupon() {

  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    if (clicked) {
        const timer = setTimeout(() => {
            setClicked(false);
        }, 1000);

        return () => clearTimeout(timer);
    }
  }, [clicked]);


  function useCoupon(){
    setClicked(true)
  }

  return (
    <>  
      {
        clicked && (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" className='alertt'>
             Kupon <strong>başarılı bir şekilde</strong> kullanılmıştır. Bir sonraki alışverişiniz <strong>indirimden</strong> yararlanacaktır!
          </Alert>
        )
      }

      <h4 className='text-center mb-3 font'>Kuponların</h4>
      <p className='text-center mb-5 mt-3 font'>Takip ettiğiniz taşıyıcıların kuponlarını, harfiyat <br></br> masraflarını azaltmak için kullanabilirsiniz!</p>
      <Box className="cards-container" sx={{ minWidth: 100 }}>
        <Card onClick={useCoupon} variant="outlined">{card}</Card>
        <Card onClick={useCoupon} variant="outlined">{card}</Card>
        <Card onClick={useCoupon} variant="outlined">{card}</Card>
      </Box>
    </>
  );
}