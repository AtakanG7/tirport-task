import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { CiHeart } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

import "./Follows.css"
export default function Follows() {
  const [checked, setChecked] = React.useState([-1]);
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    if (clicked) {
        const timer = setTimeout(() => {
            setClicked(false);
        }, 1000);

        return () => clearTimeout(timer);
    }
  }, [clicked]);


  function followTheCarrier(){
    setClicked(true)
  }

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  return (
    <div>
      {
        clicked && (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" className='alertt'>
             <strong>Tamamdır!</strong> Taşıyıcı artık <strong>favorin!</strong>.
          </Alert>
        )
      }
      
      <h4 className="font text-center mb-4">Taşıyıcılar</h4>
      <p className='row text-center mb-5 mt-3 font'>Size en yakın taşıyıcılar listelenmektedir. Dilediğiniz taşıyıcıyı favoriniz <br></br> olarak ekleyip kendisinin sunduğu kuponlardan faydalanabilrisiniz!</p>
      <List  className='p-4' sx={{ width: '100%', maxWidth: "500px",  bgcolor: 'background.paper', padding:"1rem"}}>
        {[0, 1, 2, 3].map((index ,value) => {
          const labelId = `checkbox-list-label-${index}`;
          return (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  {checked.indexOf(index) !== -1 ? <CiHeart color='red'/> :  <CiHeart color='black'/>}
                </IconButton>
              }
              disablePadding
              className='list-item'
              onClick={() => {handleToggle(index); followTheCarrier()}}
            >
              <ListItemButton role={undefined} dense>
                <ListItemText id={labelId} primary={`Line item ${index + 1}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

    </div>
  )
}
