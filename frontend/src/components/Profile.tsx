import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function Profile() {
  const [checked, setChecked] = React.useState([0]);
  const [clicked, setClicked] = React.useState(false);
  const [myInfo, setMyInfo] = React.useState({
    user_id:"",
    username:""
  });
  const [myFavorites, setMyFavorites] = React.useState([]);

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

  React.useEffect(() => {
    if (clicked) {
        const timer = setTimeout(() => {
            setClicked(false);
        }, 1000);

        return () => clearTimeout(timer);
    }
  }, [clicked]);

  // Fetch user information
  React.useEffect(() => {
    if (myInfo.username=="") {
      fetch('http://localhost:5000/users/:id', {
        method: 'GET',
        credentials: 'include' // Include cookies in the request
      })
      .then(response => {
        console.log("response")
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('User data:', data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }
  }, [myInfo]);

  // Fetch the ones user follows
  React.useEffect(() => {
    if (clicked) {
        const timer = setTimeout(() => {
            setClicked(false);
        }, 1000);

        return () => clearTimeout(timer);
    }
  }, [clicked]);

  function removeTheCarrier(){
    setClicked(true)
  }

  return (
    <div style={{width:"15rem"}}>
      {
        clicked && (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" className='alertt'>
             <strong>Tamamdır!</strong> Taşıyıcı artık <strong>favorin değil!</strong>.
          </Alert>
        )
      }

      <Stack direction="row" className='mb-3' spacing={2}>
        <Avatar className="avatar" sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <p className='font'>{myInfo.hasOwnProperty("username") && myInfo.username}</p>
      </Stack>
      <h5 className="font text-center small">Takip ettiğiniz taşıyıcılar</h5>
      <hr className='font'/>
      <List sx={{ width: '100%',  bgcolor: 'background.paper', padding:"1rem"}}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
              <ListItem
                  key={value}
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <FaXmark onClick={removeTheCarrier}/>
                    </IconButton>
                  }
                  disablePadding
                  className='list-item'
                >
                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItemButton>
              </ListItem>
            );
        })}
      </List>
    </div>
  )
}
