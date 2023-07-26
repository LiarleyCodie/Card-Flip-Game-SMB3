import { gameInit } from './ts/canvas'
import { preload } from './ts/preload'

import './style.css'

window.onload = () => {
  gameInit()
  preload()
}
