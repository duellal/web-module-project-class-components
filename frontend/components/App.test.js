import React from 'react'
import server from '../../backend/mock-server'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import App from './App'
jest.mock('./App')

const mockTodos = [{
   name: 'Do dishes',
   id: 0,
   completed: false
 }, 
 {
   name: 'Clean room',
   id: 1, 
   completed: false
 }]


beforeAll(() => { server.listen() })
afterAll(() => { server.close() })
afterEach(() => {
  server.resetHandlers()
  document.body.innerHTML = ''
})

 test('Renders App w/o errors', () => {
   render(<App/>)
 })

 test('Renders Todo App header on load', () => {
   render(<App/>)

   const appHeader = screen.getByRole('heading', {name: /todo/i})

   expect(appHeader).toBeInTheDocument()
 })

 test('Renders Todos header (h2) on load', () => {
   render(<App/>)

   const todoHeader = screen.getByRole('heading', {name: /todos:/i, hidden: true})

   expect(todoHeader).toBeInTheDocument()
 })

// test('Renders list of todos', () => {
//    render(<App todos={mockTodos}/>)

//    const mockDishes = screen.getByText(/do dishes/i)
//    const mockClean = screen.getByText(/clean room/i)

//    expect(mockDishes).toBeInTheDocument()
//    expect(mockClean).toBeInTheDocument()
// })

