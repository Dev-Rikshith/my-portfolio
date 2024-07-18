import React from 'react';
import './HomeComponent.css'; 
import cosmos from "./space.mp4"

function HomeComponent() {

  const handleContact = () => {
    window.open('https://nezrtp85i76.typeform.com/to/f55xP8S5', '_blank');
  }

  const handleGithub = () => {
    window.open('https://github.com/Dev-Rikshith', '_blank');
  }

  const handleBlog = () => {
    window.open('https://rikpb.blogspot.com/', '_blank');
  }

  return (
    <>
    <navbar></navbar>
    <div className="video-background-container">
      <video autoPlay loop muted className="video-background">
        <source src={cosmos} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay-text">
        <h2>Hi, I'm Rikshith Tirumanpuri - a Backend Systems Developer and Machine Learning Engineer</h2>
      </div>
    </div>
    <div className='btn-container'>
      <button onClick={handleBlog} class="btn">Blog</button>
      <button  onClick={handleGithub} class="btn">About Me</button>
      <button onClick={handleContact} class="btn">Contact Me</button>
    </div>
    </>
  );
} 

export default HomeComponent;