import { useState} from 'react';
import { nanoid } from 'nanoid';
import List from './List';

function App() {

  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState({ show: true, msg: 'this is an error', clr: '' });


  //how to add item to the list
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) {
      showAlert(true, 'please add something.', 'danger');
    } else {
      //create an object as new item 
      //add the item to the list 
      const newItem = {
        id: nanoid(),
        title: item
      };

      setList([...list, newItem]);
      setItem('');
      showAlert(true, 'added successfully.', 'success');
    };
  };


    //create an error object
  const showAlert = (show = false, msg = '', clr='') => {
      setError({ show, msg, clr });
    };


    //delete an item from the list
    const deleteItem = (id) => {
      showAlert(true, 'item deleted.', 'danger');
      const newList = list.filter(el => el.id !== id);
      setList(newList);
    };
  
  return (
    <main className="container">
      <div className="todo-form">
        {error.show &&
          <h1 className='alert danger'>{error.msg}</h1>}
        <form
          className='d-flex'
          onSubmit={handleSubmit}
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
        <List
          list={list}
          deleteItem={deleteItem}
        />
        </div>
      {list.length > 0 && <button
        className='clear-btn'
      >Clear All</button>}
    </main>
  );
};

export default App;
