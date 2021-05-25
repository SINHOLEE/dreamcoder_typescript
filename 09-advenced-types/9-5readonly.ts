{
  type Todo = {
    title:string;
    description: string

  }
  // utility types 쓰자
  function display(todo:Readonly<Todo>){
    //todo.title = 'jaja' // 가능 -> 불변성을 유지하는 것이 좋다.
  }
}