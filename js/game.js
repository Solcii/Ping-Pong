import Pong from './pong.js';
import Ball from './ball.js';


const ESCENARIO = document.querySelector('.escenario');
const MENSAJE = document.querySelector('.mensaje-ganador');
const JUGADOR_GANADOR = document.querySelector('.jugador-ganador');
const BOTON_INICIO = document.querySelector('.iniciar-juego')

const PONG1 = new Pong('pong', ESCENARIO, 1, 81, 65)
const PONG2 = new Pong('pong', ESCENARIO, 2, 38, 40)
const BALL = new Ball(ESCENARIO, PONG1, PONG2, MENSAJE, JUGADOR_GANADOR, BOTON_INICIO);