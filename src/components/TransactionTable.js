import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';
import BarChart from './BarChart';
import Statistics from './Statistics';
import Piechart from './Piechart';
import './transactionTable.css';
import Skeleton from 'react-loading-skeleton';

const TransactionTable = () => {
    const [selectedOption,setSelectedOption] =useState(3);
    const [searchText,setSearchText] =useState("");
    const [page,setPage] =useState(1);
    const [fetcheddata,setFetcheddata] = useState(null);
    const [loading,setLoading] =useState(true);

    let response = async () =>{
        setLoading(true);
        let result =await axios.get('https://roxiler-server.onrender.com/combineddata',{
            params:{
                month: selectedOption,
                search:searchText,
                page:page
            }
        });
        // console.log(result.data);
        setFetcheddata(result.data);
        setLoading(false);
        }

    useEffect(()=>{
        response();
    },[selectedOption,searchText,page]);

    const monthnames =["January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"];

  return (
    <>
    <p className='fw-bold text-center shadow-lg my-3' style={{fontSize:"36px",color:"#404040",backgroundColor:"#ffffff",borderRadius:"50%",width:"20rem",height:"15.5rem", marginLeft:"32rem", paddingTop:"4rem"}}>Transaction Dashboard</p>
    <div className='d-flex justify-content-between align-items-center'>
    <input type='text' value={searchText} onChange={e=>setSearchText(e.target.value)} className=' my-4 searchText shadow col-5 col-lg-3' placeholder='Search transactions table...'/>
    <select value={selectedOption} onChange={e=>setSelectedOption(e.target.value)} className='custom-select shadow my-4 col-5  col-lg-3'>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">Decmeber</option>
    </select>
</div>
     <Table fetcheddata={fetcheddata?.transactions?.transactions} 
     total={fetcheddata?.transactions?.total} 
     perpage={fetcheddata?.transactions?.perPage} 
     page={fetcheddata?.transactions?.page}
     setPage={setPage}
     loading={loading} 
     />
     {loading ? (
                <div className='d-flex flex-column justify-content-center'>
                    <Skeleton count={5} height={20} />
                    <div className='d-flex justify-content-around'>
                    <Skeleton width={400} height={300} />
                    <Skeleton circle width={400} height={300} />
                    </div>
                </div>
            ) : (
                <>
                    <Statistics data={fetcheddata?.statistics} selectedOption={monthnames[selectedOption - 1]} /><br/>
                    <div className='w-75 d-flex justify-content-evenly my-5'>
                    <BarChart data={fetcheddata?.barChart} selectedOption={monthnames[selectedOption - 1]} />
                    <Piechart data={fetcheddata?.pieChart} selectedOption={monthnames[selectedOption - 1]} />
                    </div>
                </>
            )}
    </>
  )
}

export default TransactionTable;
