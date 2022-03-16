import insta from './Assetts/instagram.png';
import bg from './Assetts/hills.jpg';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='color-overlay'>
        <img src={bg} alt='hills'/>
      </div>
        <div className='info-div'>
            <h2 className='title'>JC  Removal</h2>
            <h1  className='under-c'>Under Construction</h1>
            <h2 className='contact'>Contact Us</h2>
            <p>661-505-5297</p>
            <a href='mailto:jcremoval.contact@gmail.com' target='_blank'>jcremoval.contact@gmail.com</a>
            <a href='https://www.instagram.com/jc_removal/'><img className='insta' src={insta} alt='instagram'/></a>
        </div>
    </div>
  );
}

export default App;
