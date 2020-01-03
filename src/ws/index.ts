import io from 'socket.io'
import { httpApp } from '../globals/web'

const socket = io(httpApp)

socket.on('connect', socket => {
  console.log(socket.id, 'has been connected')
})
