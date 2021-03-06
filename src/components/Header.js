import React, { useEffect, useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { GiDuck, GiSharpSmile } from 'react-icons/gi'

const Header = () => {
  const [navIsShown, setIsShown] = useState(false)
  const [logoIsShown, setLogoIsShown] = useState(false)

  return (
    <>
      <header>
        <GiSharpSmile color={'#3f3'} size={35} />
        <nav className='header-rightSide'>
          <div
            className={`header-background ${navIsShown ? 'shown' : 'hidden'}`}
          ></div>
          <ul>
            <li className={`nav-gitHub ${navIsShown ? 'shown' : 'hidden'}`}>
              <a
                href='https://github.com/VidWantsToDevelop?tab=repositories'
                target='_blank'
                rel='noreferrer'
              >
                <SiGithub />
              </a>
            </li>
            <li className={`nav-linkedIn ${navIsShown ? 'shown' : 'hidden'}`}>
              <a
                href='https://www.linkedin.com/in/david-boldyrev-925a70206/'
                target='_blank'
                rel='noreferrer'
              >
                <BsLinkedin />
              </a>
            </li>
            <li className={`nav-duck ${navIsShown ? 'shown' : 'hidden'}`}>
              <a
                href='https://duck-market.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                <GiDuck />
              </a>
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
