import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const json = await res.json();
            setData(json.products);
            setLoading(false);
        } catch (error) {
            console.error("Error Fetching data", error);
            setLoading(false);
        }

    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <div className='min-h-screen bg-gray p-6'>
                <h1 className='text-3xl font-bold mb-6 text-center'>Product</h1>
                {loading && (
                    <h2 className='text-xl text-center text-gray-600'>Loading..</h2>
                )}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {data.map((item) => (
                        <div key={item.id} className='bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition'>
                            <img src={item.thumbnail} alt={item.title} className='h-40 w-full object-contain mb-3' />
                            <h3 className='font-semibold text-lg'>{item.title}</h3>
                            <p className='text-gray text-sm mt-1'>{item.description.slice(0,60)}--</p>
                            <p className='text-yellow-600 font-medium'>{item.rating}</p>
                            <div className='mt-3  flex justify-between items-center'>
                                <span className='text-lg font-bold'>{item.price}</span>
                                <Link to={`/product/${item.id}`}>
                                    <button className='px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Veiw</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home
