const inputTodo = document.getElementById("input-todo")
const btnTambah = document.getElementById("btn-tambah-todo")
const listTodo = document.getElementById("list-todo")



let todos= JSON.parse(localStorage.getItem("todos"))|| [];
renderTodo()


function renderTodo(){
 listTodo.innerHTML="";

 todos.forEach((data,index ) => {
    const li=document.createElement("li")
    li.className = `flex items-center justify-between w-full p-3  ${data.done ? "bg-yellow-500" : "bg-gray-500"}`;
    li.innerHTML = `
      <span class="${data.done && "line-through"}" >${data.text}</span>
            <div>
                <button onClick=" togleTodo(${index})"class="p-2 border border-grey-400 rounded-md text-[10px] bg-green-500 hover:bg-green-800">✅</button>
                <button onClick="deletedTodo(${index})" class="p-2 border border-grey-400 rounded-md text-[10px] bg-red-500 hover:bg-red-800">❌</button>
            </div>
    
    ` 
    listTodo.appendChild(li) 
 });
}

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(todos))
}

btnTambah.addEventListener("click" , () => {
    const text = inputTodo.value.trim();

    if(text === "") return alert("input nama barang list tidak boleh kosong !!");
    todos.push({
        text : text ,
        done : false

    });
    inputTodo.value="";
    saveTodo();
    renderTodo();
})

function deletedTodo(index){
    if(confirm("apakah anda ingin menghapus list ini ? ")
  ){  todos.splice(index , 1 );
  saveTodo();
  renderTodo();
  alert("hapus berhasil")
}


}





function togleTodo(index){
 todos[index].done=!todos[index].done;

 saveTodo();
 renderTodo();
}