import Button from './components/ts-learn/Button'
 
function App() {
  const handleClick = () => {
    console.log('Click is running')
  }
  return (
    <div>
     <Button label="Click Me" onClick={handleClick} isDisabled={false}/>
    </div>
  );
}

export default App;
