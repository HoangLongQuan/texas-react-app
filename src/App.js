import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const name = "Texas";
  const userName = "XYZM";
  return (
    <div className="App">
      <Header UserName = {userName}/>
      <div className='container'> {name} Exercise </div>
      <Footer />
    </div>
  );
}

export default App;
