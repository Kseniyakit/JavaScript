let tasks =   [
    { text: 'Visit party', done: false, date: new Date(2019,11,31), },
    { text: 'Pick up Tom from airport', done: false, date: new Date(2019,11,26), },
    { text: 'Buy milk', done: false, date: new Date(2020,8,9), },
    { text: 'Buy meat', done: true, date: new Date(2019,6,16), },
    { text: 'Visit doctor', done: true, date: new Date(2019,9,5), }
];
const addElement = document.querySelector(".create-task-btn");

const addTasks = () => {
    const inputText = document.querySelector(".task-input").value;
    const obj =  {
        text: inputText,
        done: false,
        date: new Date(),
    };
    tasks.unshift(obj);
    document.querySelector(".task-input").value= "";
    renderListItems(tasks);
}

addElement.addEventListener('click', addTasks);

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
    const listItemsElems = listItems
    .sort((a,b) => b.date - a.date)
    .sort((a,b) => a.done - b.done)
    .map(({text, done}) =>{
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        if(done) {
            listItemElem.classList.add('list__item_done');
        }
        const checkboxElem = document.createElement('input');
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.checked = done;
       
        checkboxElem.classList.add('list__item-checkbox');
        listItemElem.append(checkboxElem, text);
        return listItemElem;
    });
    listElem.innerHTML = "";
   listElem.append(...listItemsElems);
}
renderListItems(tasks);

const checkBoxToggle = document.querySelector('.list').addEventListener('click',function (event) {
    if (event.target.className === 'list__item-checkbox') {
        event.target.parentElement.classList.toggle('list__item_done');

    const stringText = event.target.parentElement.textContent;
      const taskCheck = tasks.map((elem) => {
            if (elem.text === stringText) {
                elem.done === false ? elem.done = true : elem.done = false;
            }
        }) ;
        Object.assign(taskCheck, {date: new Date()});
        renderListItems(tasks);
    }
}); 