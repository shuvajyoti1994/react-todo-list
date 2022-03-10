import React,{useState} from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("")

    const submit = (e)=>{
        e.preventDefault();
        if(!title||!des){
            alert("title or description can't be blank")
        }else{
            props.addTodo(title,des);
            setTitle("");
            setDes("")
        }
       
    }
    return (
        <div className='container mt-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"> <strong>Todo Title</strong></label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />                </div>
                <div className="mb-3">
                    <label htmlFor="des" className="form-label"><strong>Todo Description</strong></label>
                    <input type="text" value={des} onChange={(e)=>setDes(e.target.value)} className="form-control" id="des" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}
