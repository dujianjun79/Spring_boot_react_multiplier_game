import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../css/components.css';
import DataService from '../services/DataService';
import Board from './Board';

export default function Calculator (){
  const {username} = useParams();
  const [num, setNum] = useState(Math.floor(Math.random()*20));
  const [num2, setnum2] = useState(Math.floor(Math.random()*30));
  const [name, setName] = useState(username);
  const [answer, setAnswer] = useState("");
  const [data, setData] = useState(null)

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    DataService.getChallengebyName(name.toString()).then(response => setData(response.data));
  },[data]);

  const handleClick = (event) => {
    
    if (!isNaN(answer) && answer !=="" && name !=="") {
      DataService.postChallenge({username: name, leftCalculator: num, rightCalculator:num2, result:answer});
      setNum(randomNumberInRange(1, 50));
      setnum2(randomNumberInRange(1, 50));
      setAnswer("");
      event.preventDefault();
    }
    
  };
  
  const nameInput = (event) => {
    var value = event.target.value;
    setName(value)
    
    
  }

  const answerInput = (event) => {
    setAnswer(event.target.value)
  }

  return (
    <div className='app'>
      <div >
        <label className='lay1'>{num}</label>
        <label className='lay1'>&times;</label>                             
        <label className='lay1'>{num2}</label>
      </div>      
        <div className='lay2  row'>
          <div className="col-xs-2">
              <input type="text" placeholder={name} value={name} name="name" id="name" className='form-control' 
                        onChange={nameInput} disabled/>
              <p>
                  <label htmlFor="guess">Your guess</label>
                  <input type="text" value={answer} name="guess" id="guess" className='form-control' 
                    onChange={answerInput} />
              </p>
            </div>
        </div>
        <p>
        <button onClick={handleClick}>submit</button>
        </p>
        <Board name={name} data={data} />
                     
    </div>
  );
};
