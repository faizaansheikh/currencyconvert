import style from './my.module.css'
import './App.css';
import { FaDollarSign } from 'react-icons/fa';
import { FormControl, InputLabel, MenuItem, OulinedInput, Select } from '@mui/material'
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { CurrencyConverter } from './store/Action/Action'

function App() {
  const [text1, setText1] = useState()
  const [text2, setText2] = useState()
  const [value1, setValue1] = useState(1)
  const [value2, setValue2] = useState(1)
  const [country1, setCountry1] = useState([])
  const [country2, setCountry2] = useState([])

  const dispatch = useDispatch()

  const { currencyCounter } = useSelector((state) => state.CurrencyReducer)

  const getData = () => {
    dispatch(CurrencyConverter())
  }

  useEffect(() => {
    getData()
  }, [])

  const convert = (e) => {
    e.preventDefault();
    let num = (value2 / value1) * text1;
    setText2(num);

  }


  return (
    <>
      <form onSubmit={convert}>
        <div className={style.main}>
          <h2>Currency Exchange Rate</h2>
          <div className={style.smain}>
            <div className={style.samount}>
              <input type="text" placeholder='Enter amount'
                value={text1 || ""}
                onChange={(e) => setText1(e.target.value)}
              />
            </div>
            <div className={style.samount}>

              <div className={style.dollarz}>
                <FormControl fullWidth className={style.drop}
                  onChange={(e) => setValue1(e.target.value)}>
                  <Select native>
                    {
                      Object.keys(currencyCounter).map((value, index) => (
                        <option key={index} value={currencyCounter[value]}>{value}</option>))
                    }
                  </Select>

                </FormControl>
              </div>

            </div>
          </div>

          <div className={style.smain}>
            <div className={style.samount}>
              <input type="text" placeholder='Enter amount'
                value={text2 || ""}
                onChange={(e) => setText2(e.target.value)}
              />
            </div>
            <div className={style.samount}>

              <div className={style.dollarz}>
                <FormControl fullWidth className={style.drop}
                  onChange={(e) => setValue2(e.target.value)}>
                  <Select native>
                    {
                      Object.keys(currencyCounter).map((value, index) => (
                        <option key={index} value={currencyCounter[value]}>{value}</option>))
                    }
                  </Select>

                </FormControl>
              </div>

            </div>
          </div>



          <div className={style.last}>
            <button onClick={convert}>Convert</button>
          </div>

          <h1>{text2}</h1>
        </div>
      </form>
    </>
  );
}
export default App;
