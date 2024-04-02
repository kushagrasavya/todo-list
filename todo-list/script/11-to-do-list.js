const Todolist =[{
   Name: 'make dinner', 
   duedate: '2023-12-22' 
}, {Name: 'watch youtube',
    duedate: '2023-12-22'}];

   rendertodolist();
    function rendertodolist(){
         
                let TodolistHTML ='';
                for(let i=0; i<Todolist.length; i++){
                const todoObject = Todolist[i];
               // const Name = todoObject.Name;
               //const { Name } = todoObject;
               // const duedate = todoObject.duedate;
                //const { duedate } = todoObject;
                const { Name, duedate } = todoObject;
                const HTML = `
                <div>${Name}</div>
                <div>${duedate}</div>
                <button onclick="
                Todolist.splice(${i}, 1);
                rendertodolist();
                " class="delete-todo-button">Delete</button>
                `;
                TodolistHTML += HTML;

                }

                document.querySelector('.js-todo-list').innerHTML= TodolistHTML;
    }



function addtodo() {
   const inputElement = document.querySelector('.js-name-input');
   const Name  = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date');
   const duedate = dateInputElement.value;

   Todolist.push({
   // Name: Name,
    //duedate: duedate
    Name,
    duedate
});
   

   inputElement.value = '';


   rendertodolist();
}