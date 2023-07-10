import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="containerLeft">
          <Row>
            <Col>
              <div className='cardRed'>1</div>
            </Col>
            <Col>
              <div className='cardRed'>2</div>
            </Col>
            <Col>
              <div className='cardRed'>3</div>
            </Col>
            <Col>
              <div className='cardRed'>4</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='cardRed'>1</div>
            </Col>
            <Col>
              <div className='cardRed'>2</div>
            </Col>
            <Col>
              <div className='cardRed'>3</div>
            </Col>
            <Col>
              <div className='cardRed'>4</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='cardRed'>1</div>
            </Col>
            <Col>
              <div className='cardRed'>2</div>
            </Col>
            <Col>
              <div className='cardRed'>3</div>
            </Col>
            <Col>
              <div className='cardRed'>4</div>
            </Col>
          </Row>
      </div>
      <div className="containerMid">
        <div className="headContent">
          <div className="HeadLeft">
            <div className="headRed">RED</div>
            <div className="head">TO DEVELOPER</div>
          </div>
          <div className="HeadRight">
            <div className="headBlue">BLUE</div>
            <div className="head">TO DEVELOPER</div>
          </div>
        </div>
        
        <div className="contentMid">
          <div className="headYellow">COUNCIL</div>
          <div className="head">TO DEVELOPER</div>
          <div className="Form">
            <div className='containerForm'>
              <div className="display">
                <div className="Question">
                  <h1>คำถามที่ 1</h1>
                  <p>จำนวนเงินที่ผ่ายที่แพ้สตอรี่จะต้องเสียให้ผู้ชนะ</p>
                </div>
              </div>
              <div className="Choice">
                <a>A</a>
                <div className="name">$10,000,000</div>
                <div className="ref">TO DEVELOPER</div>
              </div>
              <div className="Choice">
                <a>B</a>
                <div className="name">$50,000,000</div>
                <div className="ref">TO DEVELOPER</div>
              </div>
            </div>
          </div>
          <div className="contentMidBottom">
            <div className="arrow">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="entersend">
              <div className="Input">
                <input placeholder="Aa"></input>
              </div>
              <div className="Button">
                <button>SEND</button>
              </div>
            </div>
            <div className="arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className="function">
            <div className="selection">Restart</div>
            <div className="selection">Conclusion</div>
          </div>
        </div>
      </div>
      <div className="containerRight">
        <Row>
          <Col>
            <div className='cardBlue'>1</div>
          </Col>
          <Col>
            <div className='cardBlue'>2</div>
          </Col>
          <Col>
            <div className='cardBlue'>3</div>
          </Col>
          <Col>
            <div className='cardBlue'>4</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='cardBlue'>1</div>
          </Col>
          <Col>
            <div className='cardBlue'>2</div>
          </Col>
          <Col>
            <div className='cardBlue'>3</div>
          </Col>
          <Col>
            <div className='cardBlue'>4</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='cardBlue'>1</div>
          </Col>
          <Col>
            <div className='cardBlue'>2</div>
          </Col>
          <Col>
            <div className='cardBlue'>3</div>
          </Col>
          <Col>
            <div className='cardBlue'>4</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
