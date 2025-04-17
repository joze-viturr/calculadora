body {
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

#display {
  width: 100%;
  height: 40px;
  font-size: 1.5em;
  margin-bottom: 10px;
  text-align: right;
  padding: 5px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 60px);
  grid-gap: 10px;
}

button {
  height: 60px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  background-color: #e0e0e0;
  cursor: pointer;
}

button:hover {
  background-color: #d5d5d5;
}