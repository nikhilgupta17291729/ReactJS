import React from 'react'
import { useLoaderData } from 'react-router-dom';
const Github = () => {


  const data = useLoaderData();
  
  // const [data, setData] = useState([]);

  // useEffect(() => { 
  //   fetch('https://api.github.com/users/nikhilgupta17291729')
  //     .then(res => res.json())
  //     .then(data => setData(data));
  // })

  return (
    <div className="bg-gray-600 text-white p-4 m-4  text-3xl rounded-lg text-center">
      Github followers: {data?.followers}
      <img src={data?.avatar_url} alt="GitHub Avatar" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/nikhilgupta17291729');
  return res.json();
}