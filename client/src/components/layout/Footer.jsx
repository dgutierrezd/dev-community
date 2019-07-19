import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-secondary text-dark mt-5 p-1 text-center">
          DEV.community {new Date().getFullYear()} - By Daniel Gutierrez
        </footer>
    </div>
  )
}

export default Footer;