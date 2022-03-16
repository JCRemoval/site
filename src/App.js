import insta from './Assetts/instagram.png';
import bg from './Assetts/hills.jpg';
import './App.css';

function App() {

  return (
    <div className="App"  onTouchMove={e => e.preventDefault()}>
      <div className='img-color-overlay'>
        <img className='bg-img' src={bg} alt='hills'/>
      </div>
        <div className='info-div'>
            <h2 className='title'>JC  Removal</h2>
            <div className='construction-container'>
              <h1 className='under-c'>Under Construction</h1>
            </div>
            <h2 className='contact'>Contact Us</h2>
            <a className='num' href='tel:661-505-5297'>661-505-5297</a>
            <a className='email' href='mailto:jcremoval.contact@gmail.com' target='_blank' rel='noreferrer'>jcremoval.contact@gmail.com</a>
            <a href='https://www.instagram.com/jc_removal/'><img className='insta' src={insta} alt='instagram'/></a>
        </div>
    </div>
  );
}

export default App;
