import TableComponent from './components/tableComponent/TableComponent';
import './app.css';

function App() {
  return (
    <div className="App">
      <div className='appContainer'>
        <div className='appTitle'>
          <h1 className='appTitleH1'>Simple CRUD App</h1>
        </div>
        <div className='appData'>
          <TableComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
