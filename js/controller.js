var project = 'React Todo';
var copyrightYear = new Date().getFullYear();

var init = function init() {
  $('#project').innerText = project;
  $('#copyright-year').innerText = copyrightYear;

  ReactDOM.render(React.createElement(ToDoList, null), document.getElementById('root'));
};

$('document').ready(function () {
  init();
});