import Navbar from './components/Navbar';
import AddTodo from 'components/AddTodo';
import TodoList from 'components/TodoList';
import TodoContext from './contexts/TodoContext';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <TodoContext>
      <div className="uk-container">
        <Navbar />
        <br />
          <Routes>
            <Route index element={<Navigate to="/" />} />
            <Route path="/" element={<TodoList />} />
            <Route path="/create" element={<AddTodo />} />
          </Routes>
      </div>
    </TodoContext>
  );
}

export default App;