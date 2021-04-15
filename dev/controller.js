const project = 'React Todo'
const copyrightYear = new Date().getFullYear();


const init = () => {
  $('#project').innerText = project;
  $('#copyright-year').innerText = copyrightYear;

  ReactDOM.render(
    <ToDoList />,
    document.getElementById('root')
  );
};

$('document').ready(() => {
  init();
});