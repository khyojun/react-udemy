import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListComponent() {

    const today = new Date();

    const [todos, setTodos] = useState([])
    
    const [message, setMessage] = useState(null)


    const authContext = useAuth()

    const username = authContext.username


    const navigate = useNavigate()

    //useEffect 뭔가 너의 컴포넌트가 랜더링 후에 해야할 필요가 있을 때를 말해줘라.

    useEffect(
        () => refreshTodos(), []
    )

    function refreshTodos(){
        retrieveAllTodosForUsernameApi(username)
        .then(response => 
                setTodos(response.data)
            )
        .catch(error => console.log(error))
    }


    function deleteTodo(id){
        console.log("clicked " + id)
        deleteTodoApi(username, id)
            .then(
                () =>{

                    setMessage(`Delete of todo with ${id} successful`)
                    refreshTodos()
                }
                //화면 보여주기
                //투두 업뎃
            )
            .catch((error) => console.log(error))
    }

    function updateTodo(id){

        console.log("click " + id)
        navigate(`/todo/${id}`)


    }

    return (
        <div className="container">
            <h1> Things You Want To Do! </h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo =>(
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate}</td>
                                    <td> <button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>delete</button> </td>
                                    <td> <button className="btn btn-success" onClick={() => updateTodo(todo.id)}>update</button> </td>

                                </tr>
                                )
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}



export default ListComponent