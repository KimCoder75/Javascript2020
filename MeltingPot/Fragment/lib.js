/*jshint -W030,-W033,-W119,-W104*/
/*jshint expr:true*/
/* Chrome, Firefox version */
let
  element = document.getElementById('ul'), // assuming ul exists
  fragment = document.createDocumentFragment(),
  browsers = ['Firefox', 'Chrome', 'Opera', 'Safari', 'Internet Explorer'];

// browsers.forEach(function(browser) {
//     let li = document.createElement('li');
//     li.textContent = browser;
//     fragment.appendChild(li);
// });
browsers.forEach((browser) => {
  let li = document.createElement('li');
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
