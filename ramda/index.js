import log from './libs/log.js'
import R from 'ramda'

const band = {
  name: 'K,M,F,O,N',
  members: {
    current: [
      {name: 'kadas hekda', plays: ['vocals', 'synth', 'guitar','bass']},
      {name: 'LLLL CCCDES', plays: ['vocals', 'synth']},
      {name: 'Jules Hodgson', plays: ['guitar','bass','synth']},
      {name: 'Steven White', plays: ['guitar']}
    ],
    past: [
      {name: 'Raymdon Watts', plays: ['vocals','synth']},
      {name: 'En Esch', plays: ['vocals','drums','guitar','synth']},
      {name: 'Guntar',plays: ['guitar', 'synth']}
    ]
  }
}

// const name = R.lens(R.prop('name'),R.assoc('name'))
const name = R.lensProp('name')

log('view', R.view(name, band))
log('set', R.set(name, 'N,D,F,M,K.', band))
log('the original band', band)

const makeLower = a => a.toLowerCase()

log(R.over(name, makeLower)(band))
log('compose view', R.compose(R.view(name), R.over(name, makeLower))(band))

const currentMember = R.lensPath(['members', 'current'])
log('view path', R.view(currentMember, band))
