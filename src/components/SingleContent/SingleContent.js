import React from 'react'
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css';
import { Badge } from '@material-ui/core';
import ContentModal from '../ContentModel/ContentModal';

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
  return (

    <ContentModal media_type={media_type} id={id}>
        <Badge badgeContent={vote_average} 
        color={vote_average>6? 'primary':'secondary'}></Badge>
        <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      /> 
      <b className='title'>{title}</b>
      <span className='subtitle'>
          {media_type=== "tv" ? "TV Series" : "Movies"}
          <span className='subtitle'>{date}</span>
      </span>
    </ContentModal>
    
  )
}

export default SingleContent