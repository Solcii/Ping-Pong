import Pong from './pong.js';
import Ball from './ball.js';


const ESCENARIO = document.querySelector('.escenario');
const PONG1 = new Pong('pong', ESCENARIO, 1, 81, 65)
const PONG2 = new Pong('pong', ESCENARIO, 2, 38, 40)
const BALL = new Ball(ESCENARIO, PONG1, PONG2);