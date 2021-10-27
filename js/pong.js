export default class Pong {
    constructor(pClase, pEscenario, pNum, pT1, pT2) {
        this.className = pClase;
        this.escenario = pEscenario;
        this.t1 = pT1;
        this.t2 = pT2;
        this.velocity = 40;
        this.positionY = 0;


        //Crear el elemento
        this.div = document.createElement('div');
        this.div.classList.add(this.className);
        this.div.id = 'pong' + pNum;
        this.escenario.appendChild(this.div);
        this.movePong();
    }

    movePong() {
        const self = this;
        document.addEventListener('keydown', (event) => {
            if (self.t1 === event.keyCode && self.positionY > 0) {
                //arriba
                self.positionY -= self.velocity
            } else if (self.t2 === event.keyCode && self.positionY < 400) {
                //abajo
                self.positionY += self.velocity
            }
            self.div.style.top = self.positionY + 'px';
        })
    }




}