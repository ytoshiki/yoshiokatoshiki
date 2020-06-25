const buttons = document.querySelector('.categories').children;

const project = document.querySelector('.projects').children;

const projectWrapper = document.querySelector('.projects');


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e)=> {

    const x = e.target.getAttribute('data-target');

    for (let k = 0; k < project.length; k++) {

      project[k].style.display = "none";

      if (project[k].getAttribute('data-id') === x) {

        project[k].style.display = '';

      }

      if (x == 'all') project[k].style.display = '';
    }
  })
    
}