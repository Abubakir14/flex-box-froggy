import SideBar from './components/SideBar/SideBar';
import View from './components/View/View';
import './App.css'

function App() {

  const styles = {
    display: 'flex',
    ['justify-content']: 'space-around',
    minWidth: '600px',
    margin: '0',
    backgroundColor: '#43A047',
    color: 'white'  
  }

  return <div style={styles}>
    <SideBar/>
    <View/>
  </div>
}

export default App;
