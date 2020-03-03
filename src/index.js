import _ from 'lodash'
import { nijou, NAME } from './utilities'
import Lion from './utilities'

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