/* const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};

const ship = {
    __proto__: vehicle,
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`);
        this.stop();
    },
    name: 'petya',
};
 */
export const getOwnProps = (obj) => {
    let arr = [];
    for(let prop in obj) {
        if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function')
        arr.push(prop);
    
    }
    return  arr;
};
getOwnProps(ship);
