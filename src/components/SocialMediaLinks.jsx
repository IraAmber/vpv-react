import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import '../components/styles/SocialMedia.css'

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <h3>Ми в соцмережах</h3>
      <ul>
        <li>
          <a href="https://www.facebook.com/yourpage">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/yourpage">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/yourpage">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/yourpage">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMediaLinks
