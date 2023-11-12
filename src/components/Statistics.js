import React from 'react'

const Statistics = ({data,selectedOption}) => {
 
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <p className='fw-bold text-center pt-3' style={{fontSize:"26px",color:"#070707", cursor:"pointer"}}>Statistics - {selectedOption}</p>
    <div className='text-center p-5' style={{backgroundColor:"#f8df8c",borderRadius:"20px", cursor:"pointer"}}>
     <p style={{fontWeight:'bold',color:"#675c3a"}}>{`Total Sale: ${Math.round(data?.totalSaleAmount)}`}</p>
     <p style={{fontWeight:'bold',color:"#675c3a"}}>{`Total sold item: ${data?.soldItemsCount}`}</p>
     <p style={{fontWeight:'bold',color:"#675c3a"}}>{`Total not sold item: ${data?.unsoldItemsCount}`}</p>
    </div>
    </div>
  )
}

export default Statistics;