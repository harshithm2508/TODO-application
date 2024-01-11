export function CreateToDo(){
    return(
        <>
            <input style={{padding:10 , margin:10, borderRadius:"10px"}} type="text" placeholder="Enter title"/>  <br /><br />
            <input style={{padding:10 , margin:10, borderRadius:"10px"}} type="text" placeholder="Enter description" />   <br />  <br />

            <button>Add To Do</button>
        </>
    )
}