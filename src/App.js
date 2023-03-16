/* eslint-disable jsx-a11y/img-redundant-alt */
import './App.css';
// import profileImage from './assets/profile-pic.png';
import profileImage1 from './assets/Group 93.png';
import github from './assets/github.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import telegram from './assets/telegram.png';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
    <Helmet>
        <title>Ansab</title>
        <meta property="og:image" content="https://example.com/your-image.jpg" />
      </Helmet>
    <div className="App">
      <img src={profileImage1} className="profile_image" alt="profile Image" />
      <h1 className='name'>Ansab V</h1>
      <p className='proffection'>FULLSTACK DEVELOPER | DESIGNER</p>
      <div className='about_div'>
        <p className='about'>I'm a self taught developer always willing to
          learn new concepts. I have a strong mind to
          commit myself into some task and responsibly
          track and review my progress until the
          commited task is completed.
        </p>
      </div>
      <div className='social_icons'>
        <img src={github} onClick={() => window.open(`https://github.com/Ansab369`, '_blank')} className="github" alt="github" />
        <img src={instagram} onClick={() => window.open(`https://instagram.com/ansab_av?igshid=Mzc0YWU1OWY=`, '_blank')} className="instagram" alt="instagram" />
        <img src={linkedin} onClick={() => window.open(`https://www.linkedin.com/in/ansab-v-536653215`, '_blank')} className="linkedin" alt="linkedin" />
        <img src={telegram} onClick={() => window.open(`http://t.me/Ansab_av`, '_blank')} className="telegram" alt="telegram" />
      </div>
    </div>
    </>
  );
}

export default App;
