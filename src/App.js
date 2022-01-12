import { useState} from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function App() {

  const [item, setItem] = useState('');
  const [error, setError] = useState({ show: true, msg: 'this is an error', clr: '' });


  return (
    <main className="container">
      <div className="todo-form">
        {error.show &&
          <h1 className='alert danger'>{error.msg}</h1>}
        <form
          className='d-flex'
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="btn">
            add
          </button>
        </form>
        <div className="todo-list">
          <div className="todo-item d-flex">
            <p>list item #1</p>
            <div className="todo-control d-flex">
            <button
                type='button'
                className='edit-btn'
            >
            <FaEdit />
            </button>
            <button
                type='button'
                className='delete-btn'
            >
            <FaTrash />
            </button>
          </div>
          </div>
        </div>
        <button
          className='clear-btn'
        >Clear All</button>
        </div>
    </main>
  );
};

export default App;
