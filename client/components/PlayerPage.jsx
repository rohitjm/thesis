import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchVideoList } from '../actions/actions.jsx';
import $ from 'jquery';
import video from 'video.js';
//Component Code
export default function PlayerPage({currentVideo}) {
  console.log(currentVideo);

  if(currentVideo){

    return(

      <div id = 'PlayerPage'>
      <div id = 'Playercover'>
        <video width='900' height='auto' controls muted data-setup='{}'>
            <source src={currentVideo.url} type="video/mp4" />
        </video>
        </div>
        <div id = 'description'>
        <h3>Title: {currentVideo.title}</h3>
        <h4>Description: {currentVideo.description}</h4>
        </div>
      </div>  
    );  
  }else{
    return (
      <h2>Player Page</h2>
    );
  }
}

//Container Code
const mapStateToProps = (state) => {
  return {
    currentVideo: state.currentVideo.currentVideo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFeatured: (value) => {
      console.log('Selected video!');
      dispatch(changeCurrentVideo(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerPage);