import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaMetros = altura / 100; // Convertendo cm para m
    const imc = peso / (alturaMetros * alturaMetros);
    setResultado(imc.toFixed(2));

    // Classificação do IMC
    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc < 24.9) {
      setClassificacao('Peso normal');
    } else if (imc < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="App">
      <div className="square">
        <h1>Calculadora de IMC</h1>
        <form onSubmit={calcularIMC}>
          <div>
            <label>Altura (cm): </label>
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Peso (kg): </label>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              required
            />
          </div>
          <button type="submit">Calcular IMC</button>
        </form>

        {resultado && (
          <div className="result">
            <h2>Seu IMC é: {resultado}</h2>
            <h3>Classificação: {classificacao}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
