import React, { useEffect, useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { GiDuck } from 'react-icons/gi'

const Header = () => {
  const [navIsShown, setIsShown] = useState(false)
  const [logoIsShown, setLogoIsShown] = useState(false)

  useEffect(() => {
    var TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate
      this.el = el
      this.loopNum = 0
      this.period = parseInt(period, 10) || 2000
      this.txt = ''
      this.tick()
      this.isDeleting = false
    }

    TxtRotate.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length
      var fullTxt = this.toRotate[i]

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

      var that = this
      var delta = 300 - Math.random() * 100

      if (this.isDeleting) {
        delta /= 2
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
      }

      setTimeout(function () {
        that.tick()
      }, delta)
    }

    var elements = document.getElementsByClassName('txt-rotate')
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate')
      var period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period)
      }
    }
  }, [])

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
            <h1>
              This pen is
              <span
                className='txt-rotate'
                data-period='2000'
                data-rotate='[ "nerdy.", "simple.", "pure JS.", "pretty.", "fun!" ]'
              ></span>
            </h1>
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
