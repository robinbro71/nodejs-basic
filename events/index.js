// TODO 1
const { EventEmitter } = require('events');
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   
  // TODO 2
const myEmiter = new EventEmitter();
  // TODO 3
myEmiter.on('birthday', birthdayEventListener);
  // TODO 4
myEmiter.emit('birthday', 'Bima');