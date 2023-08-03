const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input"); -> 밑의 코드와 동일
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  // JSON.stringify() -> JS object나 array 또는 어떤 JS 코드건 간에 string으로 만들어줌 + 중복도 가능
  // JSON.parse() -> string을 array로 만들어줌
  localStorage.setItem("todos", JSON.stringify(toDos));
}

// 버튼을 누르면 해당 todo list가 삭제되도록
function deleteToDo(event){
  // target : 클릭된 HTML element
  // parentElement : HTML element가 가진 property로 클릭된 element의 부모
  // todo list를 삭제하기 위해서는 li 전체를 삭제헤야함
  const li = event.target.parentElement;
  li.remove(); //화면 상에서 요소 제거
  
  // [1,2,3,4].filter(함수명) -> array의 원소 1,2,3,4에 대해 각각 filter 내에 있는 함수를 실행시킴
// 만약 실행시킨 함수의 결과값이 true라면 새로운 배열에 포함시키고
// false라면 새로운 배열에 포함시키지 않음
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //string과 숫자의 비교는 불가능하기에 숫자로 만들어줌
  saveToDos();
}

function paintToDo(newToDo){
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value; //input의 현재 value를 newToDo라는 새로운 변수에 복사
  toDoInput.value = ""; //todoInput의 value를 비워준다.
  const newTodoObj = {
    text: newToDo,
    id: Date.now(), //각각의 li item을 구별하기 위한 것
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);  

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //toDos가 시작할 대 항상 빈 상태로 시작하는 것을 막기 위해
  //forEach : array/objec 각각의 요소에 대해 하나의 function을 기본적으로 수행
  parsedToDos.forEach(paintToDo);
}

