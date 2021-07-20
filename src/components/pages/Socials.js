import React from 'react';
import '../../App.css';
import Feed from './SocialPageComp/Feed';
//import Post from './SocialPageComp/Post';
import Topbar from './SocialPageComp/Topbar';
//import Share from './SocialPageComp/Share';

export default function Socials() {
  return (
    <>
      <Topbar />
      <Feed />
    </>
  );
}