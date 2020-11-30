import React, { useState } from "react"
import "./todo.css"
import shortid from "shortid"
import { gql, useMutation, useQuery } from "@apollo/client"
const getTodos = gql`
  query getTodos {
    getTodos {
      title
      id
    }
  }
`
const createTodoItem = gql`
  mutation create($todo: todoInput!) {
    createTodo(todo: $todo) {
      title
      id
    }
  }
`
const deleteTodoItem = gql`
  mutation deleteTodo($id: String!) {
    deleteTodo(Id: $id)
  }
`

export const Todo = () => {
  const [text, setText] = useState<string>("")
  const { data, loading, error, refetch } = useQuery(getTodos, {
    notifyOnNetworkStatusChange: true,
  })
  const [createTodo] = useMutation(createTodoItem)
  const [deleteTodo] = useMutation(deleteTodoItem)

  const handleSubmit = async e => {
    e.preventDefault()
    await createTodo({
      variables: { todo: { title: text , id:shortid.generate()} },
    })
    setText("")
    refetch()
  }

  const handleClick = async id => {
   await deleteTodo({variables :{id : id}})
   refetch()
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div className="title">Remember Things</div>
        <form onSubmit={handleSubmit} className="form">
          <input
            required
            type="text"
            value={text}
            placeholder="Enter Text"
            onChange={e => {
              setText(e.target.value)
            }}
          />
          <button>Add Todo</button>
        </form>
      </div>
      {loading && <p className="description">loading data ...</p>}
      {error && <p className="description">error ...</p>}
      {data &&
        data?.getTodos?.map((todo, index:number) => {
          return (
            <div key={index} className="box">
              <p className="description">{todo.title}</p>
              <button
                onClick={() => {
                  handleClick(todo.id)
                }}
              >
                Delete
              </button>
            </div>
          )
        })}
    </div>
  )
}
