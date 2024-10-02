
function App() {
  var numbers = [2, 46, 1, 38, 4];

  //filter
  const oddNumbers=(odd)=>{
    return(
      odd % 2 !== 0
    )
  }

  //reduce
  const addition=(total,num) =>{
    return(
      total + num
    )
  }


  return (
    <>
    {numbers.map((number) => <p>{number}</p>)} 

      <hr/> 

    {numbers.filter(oddNumbers)}

    <hr/>

    {numbers.reduce(addition)}

    <hr/>

    
    </>
  )
}

export default App
