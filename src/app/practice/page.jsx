import Counter from "@/components/practice/Counter"
import Toggle from "@/components/practice/Toggle"
import Form from "@/components/practice/Form"
import TodoList from "@/components/practice/ToDoList"
import SimpleUserList from "@/components/practice/DataFetch"
import FetchData from "@/components/practice/DataFetch"

export default function PracticePage() {
 return (
    <div>
        <h1>Practice Counter</h1>
        <Counter />
        {/* <Toggle />
        <Form />
        <TodoList/>

        <SimpleUserList/> */}
        <FetchData />

    </div>
 )
}