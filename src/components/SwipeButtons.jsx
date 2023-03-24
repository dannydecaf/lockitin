import React from 'react'

import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import HeartBrokenTwoToneIcon from '@mui/icons-material/HeartBrokenTwoTone';
import IconButton from "@mui/material/IconButton";


import "../css/SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <HeartBrokenTwoToneIcon className="swipeLeft" fontSize="large" />
      </IconButton>
      <IconButton>
        <FavoriteTwoToneIcon className="swipeRight" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;