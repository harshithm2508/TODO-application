export function Todos({todos}){
    return(
        <>
            {todos.map((todo)=>{
                return (
                    <>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed == true ? "Completed" : "Mark as Done"}</button>
                    </>
                )
            })}
        </>
    )
}