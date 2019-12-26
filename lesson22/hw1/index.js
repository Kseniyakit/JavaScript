let tasks =   [
    { text: 'Visit party', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Buy milk', done: false },
    { text: 'Buy meat', done: true },
    { text: 'Visit doctor', done: true}
];
const addElement = document.querySelector(".create-task-btn");

const addTasks = () => {
    const inputText = document.querySelector(".task-input").value;
    const obj =  {
        text: inputText,
        done: false,
    };
    tasks.unshift(obj);
    document.querySelector(".task-input").value= "";
    renderListItems(tasks);
}

addElement.addEventListener('click', addTasks);

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
    const listItemsElems = listItems
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
       tasks.map((elem) => {
            if (elem.text === stringText) {
                elem.done === false ? elem.done = true : elem.done = false;
            }
        }) ;
        renderListItems(tasks);
    }
}); 