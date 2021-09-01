const button = document.querySelector('#test-button');
const body = document.querySelector('body');
body.addEventListener('click', function(event) {
  const el = event.target;
  console.log('Someone clicked something!');
  console.log('Clicked Element:', el.tagName);
  console.log('Clicked ID:', el.id);
  if (event.target.id === 'test-button') {
    console.log('Also Clicked Class:', el.className);
  }
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
