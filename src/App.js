import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Todolist from './Todolist';
import TodolistNew from './TodolistNew';

function App() {
  return (
    <div className="maindiv_style d-flex align-items-center">
    <div className='container '>
 <div className='row'>
<div className='col-md-6  d-flex justify-content-center mb-4 '>
<Todolist/>
</div>
<div className='col-md-6 text-center d-flex justify-content-center mb-4'>
<TodolistNew/>
</div>
</div>

    </div>
     </div>
  );
}

export default App;
