import React, { useEffect } from 'react'
import { GiSharpSmile } from 'react-icons/gi'

const Body = () => {
  const text = [
    'Good morning/evening',
    'Just trying my best',
    'A curious programmer',
    'Thanks for visiting',
  ]
  useEffect(() => {
    const app = document.querySelector('.App')
    let lastScrollPos = app.scrollTop

    const header = document.querySelector('header')

    app.onscroll = () => {
      let currentScrollPost = app.scrollTop
      if (currentScrollPost > lastScrollPos) {
        header.style.top = '-8rem'
      } else {
        header.style.top = '1rem'
      }
      lastScrollPos = currentScrollPost
    }
  }, [])

  return (
    <>
      <main>
        <div className='hero'>
          <div>
            <div className='header-leftSide'>
              <div className='logo'>
                <div className='letter shown'>DAVID</div>
              </div>
              <div className={`subheading shown`}>
                <h1
                  className='typewriter-text'
                  onAnimationIteration={(e) => {
                    if (e.animationName === 'typewriter') {
                      console.log(e)
                      console.log(Math.random() * 3)
                      e.target.innerText = text[Math.floor(Math.random() * 3)]
                    }
                  }}
                >
                  Good morning/evening
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className='about'>
          <h2>Briefly about me 👨‍💻</h2>
          <h3>
            #Time is money, and I don't want to waste your. So let's start right
            away
          </h3>
          <p>
            My name is David. I am a student (at the moment of creating this
            website) at the Georgian College, my major is - Computer
            Programming. I'm a type of programmer who is always learning
            something new, even in my leisure, I spend the time creating
            different projects using different programming languages. In my
            career I was working with a whole list of technologies and
            platforms: OO programming languages -{'  '}
            <span>Python </span>(Scripting)<span>,C# and Java 🧡 </span>&& Web
            development -{' '}
            <span>
              JS, HTML, CSS, JavaScript frameworks such as ReactJS 😍{' '}
            </span>{' '}
            (P.S this website was built using React JS and React Icons only)
            <span>, JQuery, ThreeJS, and Django 🐍</span> (have some projects on
            my GitHub account)&& I have also challenged myself in learning more
            about mobile development -{' '}
            <span>React Native, Android Studio (Java, not Kotlin)</span> &&
            Recently, put some effort to learn more about Cloud systems ☁️,
            particularly{' '}
            <span>AWS (EC2, Lambda functions, S3 bucket, API Gateway) </span>and
            <span> Google Cloud Platform </span>. && I have spent most of the
            spring 2022 on learning{' '}
            <span>Python scripting (Windows and Linux)</span>. And many more,
            but as I said time is money
          </p>
        </div>
        <div className='projects'>
          <h2>Projects behind 💼</h2>
          <p>
            As I have already said, I am a project guy and I have some projects
            uploaded on my github account (not all of them are there, but recent
            only). I'm always trying to learn something new and grow as the
            developer, and almost all my projects were created by me and me only
            this is why some day I wish to try myself as a part of the team of
            developers. Nowadays, I'm learning new JS framework ThreeJS and
            there is no way I could miss an opportunity to create one more
            project. Here it is by the way....
          </p>
          <div className='project-duckMarket'>
            <div className='project-leftSide'>
              <h2>Duck Market 🦆</h2>
              <div className='card'>
                <div className='card-side front'>Duck Market</div>
                <div className='card-side back'>
                  <img
                    src='https://media4.giphy.com/media/rtRflhLVzbNWU/giphy.gif'
                    onClick={() => {
                      window.location.href = 'google.com'
                    }}
                  />
                </div>
              </div>
              <p>
                Yeah, I know how it sounds, but here it is - Duck market. As I
                have already mentioned before, right now I'm learning more about
                a new JS framework called ThreeJS and this project is the way I
                learn more about the implementation of the 3D into the web. The
                website is still in the stage of production (I'm sorry but you
                can't really buy a duck), but it has almost all the front-end
                features. The website is based on the ReactJS (states are
                managed by Context API and useReducer hook), ReactJS Bootstrap,
                and as I said ThreeJS.
                <br /> I also have a few more projects, but they are all
                collecting dust on the shelves of the GitHub
              </p>
            </div>
          </div>
        </div>
        <div className='conclusion'>
          <h2>Conclusion 🏁</h2>
          <h3>Finally, we are here. </h3>
          <p>
            Congratulations, you made it all the way through and here is a
            little conclusion. I know this website may look a bit like it was
            made only in a few days (in fact it was), but I need to focus more
            on classes at the college, this is why I don't have much time, but I
            promise I will make it better 🙏.
            <br />
            <span>
              #Thank you for the time you have spent, you can also check some
              links in the footer below
            </span>
          </p>
        </div>
      </main>
    </>
  )
}

export default Body
