import React from 'react'
import '../css/currency.css'
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
const API_KEY = 'YOUR-API-KEY';

function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);

    }

    return (
        <div className='currency-div'>

            <div>
                <h2 style={{ fontFamily: 'Times New Roman', fontWeight: '600', color: 'white' }}>DÖVİZ KURU UYGULAMASI</h2>
            </div>

            <div>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount' />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaArrowCircleRight style={{ color: '#fff', fontSize: '25px' }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />
            </div>

            <div>
                <button onClick={exchange} className='exchange-button'>Çevir</button>
            </div>


        </div>
    )
}

export default Currency