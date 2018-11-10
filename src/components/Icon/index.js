import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faAd,
  faAddressBook,
  faBook,
  faFilm,
  faTheaterMasks,
  faMusic,
  faPen,
  faScroll,
  faKeyboard,
  faShareSquare,
  faImages,
} from '@fortawesome/free-solid-svg-icons'
import './style.scss'

library.add(
  faAd,
  faAddressBook,
  faBook,
  faFilm,
  faTheaterMasks,
  faMusic,
  faPen,
  faScroll,
  faKeyboard,
  faShareSquare,
  faImages,
)

const Icon = ({ name }) => (
  <div className="icon" title={name}>
    <FontAwesomeIcon icon={['fas', name]} />
  </div>
)

export default Icon
