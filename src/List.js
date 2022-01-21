import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({list,deleteItem,getEditID}) => {


    const listElement = list.map(el => {
        return (
            <div key={el.id} className="todo-item d-flex">
                <p>{ el.title}</p>
            <div className="todo-control d-flex">
                <button
                    type='button'
                        className='edit-btn'
                        onClick={() => getEditID(el.id)}
                >
                <FaEdit />
                </button>
                <button
                    type='button'
                    className='delete-btn'
                    onClick={() => deleteItem(el.id)}
                >
                <FaTrash />
                </button>
            </div>
        </div>
        )
    })
    return (
        <div className="todo-list">
            {listElement}
    </div>
    );
}
 
export default List;