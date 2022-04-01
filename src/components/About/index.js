import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut
            consequat semper viverra nam. Gravida in fermentum et sollicitudin.
            Massa sapien faucibus et molestie ac. Neque egestas congue quisque
            egestas diam in arcu cursus. Duis at tellus at urna condimentum
            mattis pellentesque id. Interdum varius sit amet mattis vulputate
          </p>
          <p align="LEFT">
            Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.
            Quam viverra orci sagittis eu. Eu ultrices vitae auctor eu augue ut
            lectus arcu. Sagittis purus sit amet volutpat consequat mauris nunc
            congue. Ipsum consequat nisl vel pretium lectus. Elit eget gravida
            cum sociis natoque penatibus et magnis dis. Erat nam at lectus urna
            duis. Convallis aenean et tortor at risus viverra adipiscing at.
            Duis convallis convallis tellus id interdum velit laoreet id.
          </p>
          <p>
            Non tellus orci ac auctor augue mauris. Vel elit scelerisque mauris
            pellentesque. Et netus et malesuada fames ac turpis egestas maecenas
            pharetra. Donec et odio pellentesque diam volutpat commodo sed.
            Fames ac turpis egestas sed. Tincidunt ornare massa eget egestas
            purus. Duis at consectetur lorem donec massa sapien faucibus et. Sit
            amet venenatis urna cursus eget.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
