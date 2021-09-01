const my_ready_event = new Event('__ready');
const button = document.querySelector('#test-button');
button.addEventListener('__ready', function() {
  console.log('OMG I am so READY! FINALLY!');
});

console.log('One');
setTimeout(function () {
  console.log('Two');
  button.dispatchEvent(my_ready_event);
} , 1000);
console.log('Three');
