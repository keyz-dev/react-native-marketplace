import { useState, useEffect } from 'react'
import axios from 'axios'
import {API_URL} from '@env'

const useFetch = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () =>{
        setIsLoading(true)

        try{
            const response = await axios.get('http://192.168.43.152:5000/v2/api/product/all')
            setData(response.data.products)
            setIsLoading(false)
        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const refetch = () =>{
        setIsLoading(true)
        fetchData()
    }

  return {data, isLoading, error, refetch}
}

export default useFetch