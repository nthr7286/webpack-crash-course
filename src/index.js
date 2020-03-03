import _ from 'lodash'
import { nijou, NAME } from './utilities'
import Lion from './utilities'
import './styles.css'
import neko from '../2400b26f95d0a4326165639f8dafc685_s.jpg'

console.log(Lion.say())

console.log(nijou(3))
console.log(NAME)

const component = () => {
  const div = document.createElement('div')
  const array = ['Hello', 'webpack', '!']
  div.innerHTML = _.join(array, ' ')
  return div
}

document.body.appendChild(component())
document.body.classList.add('bg')

const image = new Image()
image.src = neko
document.body.appendChild(image)