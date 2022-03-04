import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  title: yup.string().required('Tarefa inválida'),
});

interface AddTodoForm {
  title: string;
}

const AddTodo = () => {
  const { addTodo } = useContext<TodoContextType>(TodoContext);
  const { register, formState: { errors }, handleSubmit, reset } = useForm<AddTodoForm>({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();

  const onSubmit = (data: AddTodoForm) => {
    addTodo(data.title);
    reset({});
    navigate("/", { replace: true });
  }

  return (
    <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
      <h4>Nova tarefa</h4>
      <div className="uk-margin uk-width-1-1">
        <input type="text" id="title" placeholder="Nova tarefa..." className="uk-input" {...register('title')} />
        <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
      </div>
      <div className="uk-width-1-1">
        <button type="submit" className="uk-button uk-button-primary">Salvar</button>
      </div>
    </form>
  );
}

export default AddTodo;