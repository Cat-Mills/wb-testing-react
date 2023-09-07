import axios from 'axios'
import {useState} from 'react'

export default function Fetch({requestURL}) {
  const [data, setData] = useState(null)

  const fetchData = async () => { 
    const res = await axios.get(requestURL)
    setData(res.data)
  }

  return (
    <div>
      <button onClick={fetchData}>Get Data</button>
      <pre>{data ? JSON.stringify(data, null, 2) : 'No data'}</pre>
    </div>
  )
}























// import axios from 'axios';
// import { useState } from 'react';

// export default function Fetch({ requestURL }) {
//   const [data, setData] = useState(null);

//   const fetchData = async () => {
//     const res = await axios.get(requestURL);
//     setData(res.data);
//   };

//   return (
//     <div>
//       <button onClick={fetchData}>Get data</button>
//       <pre>{data ? JSON.stringify(data, null, 2) : 'No data'}</pre>
//     </div>
//   );
// }
