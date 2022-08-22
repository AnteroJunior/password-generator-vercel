import React, { useState } from "react";
import './Main.css';

export default function Main(){

    const [password, setPassword] = useState('');
    
    const [lowerLetter, setLowerLetter] = useState({
        on: true,
        alphabet: 'abcdefghijklmnopqrstuvwxyz',
    });

    const [upperLetter, setUpperLetter] = useState({
        on: false,
        alphabet: lowerLetter.alphabet.toUpperCase(),
    })

    const [numbers, setNumbers] = useState({
        on: false,
        alphabet: '1234567890'
    })

    const [symbols, setSymbols] = useState({
        on: false,
        alphabet: `'!@#$%&*()-=+_{}[];,.<>\\|/?"`
    })

    const handleUpperChange = () => {
        setUpperLetter(prevState => ({
            ...prevState,
            on: !prevState.on
        }));
    }

    const handleLowerChange = () => {
        setLowerLetter(prevState => ({
            ...prevState,
            on: !prevState.on
        }));
    }

    const handleNumberChange = () => {
        setNumbers(prevState => ({
            ...prevState,
            on: !prevState.on
        }));
    }

    const handleSymbolChange = () => {
        setSymbols(prevState => ({
            ...prevState,
            on: !prevState.on
        }));
    }

    const [size, setSize] = useState(25);

    const startProcessingPassword = () => {

        let characters = '';
        
        if(lowerLetter.on){
            characters += lowerLetter.alphabet;
        }
        
        if(upperLetter.on){
            characters += upperLetter.alphabet;
        }

        if(numbers.on){
            characters += numbers.alphabet;
        }

        if(symbols.on){
            characters += symbols.alphabet;
        }

        if(!characters.length){
            alert('Select an alphabet to create your password!');
            return;
        }
        setPassword(createPassword(characters.split(""), size));
    }

    const createPassword = (arr, passwordSize) => {
        let password = '';
        for(let i = 0; i < passwordSize; i++){
            const random = Math.floor(Math.random() * arr.length);
            password += arr[random];
        }
        return password;
    }

    return (
        <div className="password-container">
            <div className="action-div">
                <input readOnly type="text" value={password} />
            </div>
            <div className="password-options">
                <div className="option-item">
                    <label>Password length: </label>
                    <input type="number" value={size} onChange={(e) => setSize(e.target.value)} />
                </div>
                <div className="option-item">
                    <input type="checkbox" checked={lowerLetter.on} onChange={handleLowerChange}/> a-z
                </div>
                <div className="option-item">
                    <input type="checkbox" checked={upperLetter.on} onChange={handleUpperChange} /> A-Z
                </div>
                <div className="option-item">
                    <input type="checkbox" checked={numbers.on} onChange={handleNumberChange}/> 0-9
                </div>
                <div className="option-item">
                    <input type="checkbox" checked={symbols.on} onChange={handleSymbolChange}/> Symbols (!@#$...)
                </div>
            </div>
            <button onClick={startProcessingPassword}>Create password</button>
        </div>
    )
}