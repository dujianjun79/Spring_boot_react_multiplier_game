import {useState} from 'react';
import '../css/components.css';
import DataService from '../services/DataService';
import Board from './Board';

const Calculator = () => {
  const [num, setNum] = useState(5);
  const [num2, setnum2] = useState(6);
  const [name, setName] = useState('');
  const [answer, setAnswer] = useState(0);
  const [data, setData] = useState(null)
  const [record, setRecord] = useState(null)

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = (event) => {
    
  
    setRecord({username: name, leftCalculator: num, rightCalculator:num2, result:answer})
    DataService.postChallenge(record)
    DataService.getChallengebyName(name.toString()).then((res)=>{
      setData(res.data)
    }); 

    setNum(randomNumberInRange(1, 20));
    setnum2(randomNumberInRange(1, 20));

    event.preventDefault();
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
        <lable className='lay1'>{num2}</lable>
      </div>      
        <div className='lay2  row'>
          <div className="col-xs-2">
              <label for="name">Your alias</label>
              <input type="text" value={name} name="name" id="name" className='form-control' 
                        onChange={nameInput} />
              <p>
                  <label for="guess">Your guess</label>
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

export default Calculator;