
function App() {
  var numbers = [2, 46, 1, 38, 4];
  const oddNumbers=(odd)=>{
    return(
      odd % 2 !== 0
    )
  }
  return (
    <>
    {numbers.map((number) => <p>{number}</p>)} 

      <hr/> 

    {numbers.filter(oddNumbers)}

    <hr/>

    
    </>
  )
}

export default App
