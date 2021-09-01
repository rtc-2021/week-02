const button = document.querySelector('#test-button');
button.addEventListener('__ready', function() {
  console.log('OMG I am so READY! FINALLY! YAY!');
});

console.log('One');
setTimeout(function () {
  console.log('Two');
  button.dispatchEvent(generateCustomEvent('__ready'));
} , 1000);
console.log('Three');

function generateCustomEvent(event_name) {
  return new Event(event_name);
}
