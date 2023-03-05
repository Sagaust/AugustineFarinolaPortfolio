import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div>
      <a href="https://twitter.com/yourusername">
        <FaTwitter /> Twitter
      </a>
      <br />
      <a href="https://github.com/yourusername">
        <FaGithub /> GitHub
      </a>
      <br />
      <a href="https://www.linkedin.com/in/yourusername/">
        <FaLinkedin /> LinkedIn
      </a>
    </div>
  );
};

export default SocialMediaLinks;
