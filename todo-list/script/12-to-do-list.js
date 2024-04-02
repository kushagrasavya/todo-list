const Todolist =[{
   Name: 'make dinner', 
   duedate: '2023-12-22' 
}, {Name: 'watch youtube',
    duedate: '2023-12-22'}];

   rendertodolist();
    function rendertodolist(){
         
                let TodolistHTML ='';

               Todolist.forEach((todoObject, index)=>{               
                   const { Name, duedate } = todoObject;
                   const HTML = `
                   <div>${Name}</div>
                   <div>${duedate}</div>
                   <button class="delete-todo-button js-delete-todo-button">Delete</button>
                   `;
                   TodolistHTML += HTML;
   
               });
                document.querySelector('.js-todo-list').innerHTML= TodolistHTML;

                document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index)=>{
                  deleteButton.addEventListener('click',()=>{
                    Todolist.splice(index, 1);
                    rendertodolist();
                  })     
                });
    }

    document.querySelector('.js-add-todo-button ').addEventListener('click', ()=>{
        addtodo();
    })





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