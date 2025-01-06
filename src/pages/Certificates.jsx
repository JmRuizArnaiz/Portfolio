import AdaptechImage from '../assets/Certificates/Adaptech.png';
import DictImage from '../assets/Certificates/Dict-Blockchain.jpg';
import InforImage from '../assets/Certificates/Infor-Ojt.jpg';
import ZuittImage from '../assets/Certificates/Zuitt-Webinar.jpg';
import { useNavigate } from 'react-router-dom';

import '../styles/certificates.css';

function Certificates() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/'); // This will go back one step in the history stack
  };

  const goHome = () => {
    navigate('/')
  };

  return (
    <main className='certPage'>
     
    <div className="certificatesContainer">
      <div className="certificatesHeader">
        <h1 onClick={goHome} className="certificates">Certificates</h1>
        <a className="certBack" onClick={goBack}><h1>&lt;&lt;&lt;</h1>
      </a>
      </div>
    </div>

    <div className="cardContainer">
    <div className="card-grid">
        <div className="card">
          <img src={AdaptechImage} alt="Adaptech Certificate" />
          <div className="card-body">
            <h3 className="card-title">Adaptech Certificate</h3>
            <p className="card-text">This certificate showcases skills acquired in software development and technology.</p>
            <a href="https://drive.google.com/file/d/1dAoyxRS5uNamvt34nibC0fy4fWciILW1/view?usp=sharing" target='_blank' className="card-link" rel="noreferrer">View</a>
          </div>
        </div>
        <div className="card">
          <img src={DictImage} alt="DICT Blockchain Certificate" />
          <div className="card-body">
            <h3 className="card-title">DICT Blockchain Certificate</h3>
            <p className="card-text">Demonstrates knowledge and training in blockchain technology by DICT.</p>
            <a href="https://drive.google.com/file/d/1jyzIuODWWxjeuF_RU9X9OeF43L2QEOOy/view?usp=sharing" target='_blank' className="card-link" rel="noreferrer">View</a>
          </div>
        </div>
        <div className="card">
          <img src={InforImage} alt="Infor OJT Certificate" />
          <div className="card-body">
            <h3 className="card-title">Infor OJT Certificate</h3>
            <p className="card-text">Certification received upon completion of an On-the-Job Training program with Infor.</p>
            <a href="https://drive.google.com/file/d/1PmD4R7Lr9xRFztXeLr8vbx_KeBPPRIwv/view?usp=sharing" target='_blank' className="card-link" rel="noreferrer">View</a>
          </div>
        </div>
        <div className="card">
          <img src={ZuittImage} alt="Zuitt Webinar Certificate" />
          <div className="card-body">
            <h3 className="card-title">Zuitt Webinar Certificate</h3>
            <p className="card-text">Certification for attending a professional webinar on web development.</p>
            <a href="https://drive.google.com/file/d/1eNstIuHdHu3ZasfVyddwMtCnC4uwmvLZ/view?usp=sharing" target='_blank' className="card-link" rel="noreferrer">View</a>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default Certificates;
