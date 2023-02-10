import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './ErrorComponent'
import ErrorComponent from './ErrorComponent'
import CoinCard from './CoinCard'
const Exchnages = () => {

    const [exchanges, setExchanges]= useState([])
    const [loading, setLoading]= useState()
    const [error,setError]= useState(false)

    useEffect(()=>{

        const fetchExchanges= async()=>{

            try{
                const {data}= await axios.get(`${server}/exchanges`)

                setExchanges(data)
                setLoading(false)

            }
            catch(error){
                setError(true)
                setLoading(false)

            }
           
        }
        fetchExchanges();
    },[])
    if(error) return <ErrorComponent message={'Error While Fetching Exchanges'} />
  return(<Container maxW={'container.xl'}>
{loading?<Loader/>:<>

<HStack wrap={'wrap'}>
    {
        exchanges.map((i)=>(
            <CoinCard key={i.id} name={i.name} rank={i.trust_score_rank} url={i.url} img={i.image}  />
        ))
    }
  
</HStack>

</>}
  </Container>
  )
}
export default Exchnages



