
//const { name } = require("ejs");
let myName=JSON.parse(localStorage.getItem("name"))||'';
let MyDiv=document.querySelector(".tasks");
let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
const setName=()=>{
    let mame=document.querySelector(".Name").value;
    if(mame.trim()!==''){
        localStorage.setItem("name",JSON.stringify(mame));
        window.location.href='/todo';
    }
    console.log(myName)
}
const skip=()=>{
    window.location.href='/todo';
}
const addName=()=>{
    document.querySelector(".display_name").innerHTML=`${myName}`;
}
 const addToArr=()=>{
    const task=document.querySelector(".inputBox").value;
    if(task.trim()!==''){
        tasks.push(task);
        document.querySelector(".inputBox").value='';
    }
    else{};
    //console.log(tasks)
    localStorage.setItem("tasks",JSON.stringify(tasks));
    MyDiv.innerHTML='';
    show();
    
 }
 window.onload = show();
function show(){
    if(window.location.pathname==='/todo')
    {
        addName();
        for(i=0;i<tasks.length;i++){
            MyDiv.innerHTML+=`
                <div class="task_">
                    <p> &#8594; ${tasks[i]} </p>
                    <button onclick="remove(i)" class="remove">Remove</button>
                </div>
            `;
            localStorage.setItem("tasks",JSON.stringify(tasks));
            //console.log(i);
        }
    }
 }
 const remove=(n)=>{
    tasks.pop(n);
    MyDiv.innerHTML='';
    localStorage.setItem("tasks",JSON.stringify(tasks));
    show();
 }