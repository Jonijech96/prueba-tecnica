import './App.css'
import { Navbar } from './components/navbar/Navbar';
import { Main } from './components/main/Main';
import { Tendencies } from './components/main/Tendencies';
import { Blog } from './components/main/Blog';
import { Footer } from './components/footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Main />
      <Tendencies />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
