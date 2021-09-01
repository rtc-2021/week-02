const button = document.querySelector('#test-button');
button.addEventListener('click', function() {
  console.log('OMG someone clicked me! FINALLY!');
});

console.log('One');
setTimeout(function () {
  console.log('Two');
  button.click();
} , 1000);
console.log('Three');
