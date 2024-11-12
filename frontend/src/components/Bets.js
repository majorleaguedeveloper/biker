import React from 'react'

const Bets = () => {
  return (
    <div style={{color: 'white'}}>

      <div style={{display: 'flex', justifyContent: 'center', border: 'solid', borderWidth: '1px', borderColor: 'grey'}}>
        <span style={{border: 'solid',borderRadius: '4px', borderWidth: '1px', borderColor: 'white', padding: '3px 10px', margin: '5px', backgroundColor: 'gold'}}>My Bets</span>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between', border: 'solid', borderWidth: '1px', borderColor: 'grey', margin:'5px 0px' }}>
        <span style={{marginLeft: '5px'}}>Amount</span>
        <span>X</span>
        <span>Winning</span>
        <span style={{marginRight: '5px'}}>Won</span>
      </div>
      <div style={{height:'200px', backgroundColor: 'white', marginBottom: '10px',display: 'flex', justifyContent: 'center'}}>
        <h3 style={{color:"black"}}>No Placed Bets</h3>
      </div>
    </div>
  )
}

export default Bets;
