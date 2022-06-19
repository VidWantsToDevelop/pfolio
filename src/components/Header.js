import React, { useEffect, useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { GiDuck } from 'react-icons/gi'

const Header = () => {
  const [navIsShown, setIsShown] = useState(false)
  const [logoIsShown, setLogoIsShown] = useState(false)

  return (
    <>
      <header>
        <div className='header-leftSide'>
          <div className='logo'>
            <div
              className={`letter initial ${logoIsShown ? 'shown' : 'hidden'}`}
              onClick={() => {
                setLogoIsShown(!logoIsShown)
              }}
            >
              D
            </div>
            <div
              className={`letter second ${logoIsShown ? 'shown' : 'hidden'}`}
            >
              A
            </div>
            <div className={`letter third ${logoIsShown ? 'shown' : 'hidden'}`}>
              V
            </div>
            <div
              className={`letter fourth ${logoIsShown ? 'shown' : 'hidden'}`}
            >
              I
            </div>
            <div className={`letter fifth ${logoIsShown ? 'shown' : 'hidden'}`}>
              D
            </div>
          </div>
          <div className={`subheading ${logoIsShown ? 'shown' : 'hidden'}`}>
            <div className='container py-5'>
              <div className='output' id='output'>
                <h1 className='cursor'></h1>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <nav className='header-rightSide'>
          <div
            className={`header-background ${navIsShown ? 'shown' : 'hidden'}`}
          ></div>
          <ul>
            <li className={`nav-gitHub ${navIsShown ? 'shown' : 'hidden'}`}>
              <SiGithub />
            </li>
            <li className={`nav-linkedIn ${navIsShown ? 'shown' : 'hidden'}`}>
              <BsLinkedin />
            </li>
            <li className={`nav-duck ${navIsShown ? 'shown' : 'hidden'}`}>
              <GiDuck />
            </li>
          </ul>
          <div
            className={`nav-control ${navIsShown ? 'shown' : 'hidden'}`}
            onClick={(e) => setIsShown(!navIsShown)}
          >
            <span
              className={`left-line ${navIsShown ? 'shown' : 'hidden'}`}
            ></span>
            <span
              className={`right-line ${navIsShown ? 'shown' : 'hidden'}`}
            ></span>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
