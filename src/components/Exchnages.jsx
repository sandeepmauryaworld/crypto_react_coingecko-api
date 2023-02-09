import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './ErrorComponent'
import ErrorComponent from './ErrorComponent'
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
            <ExchangeCard key={i.id} name={i.name} rank={i.trust_score_rank} url={i.url} img={i.image}  />
        ))
    }
  
</HStack>

</>}
  </Container>
  )
}
export default Exchnages



const ExchangeCard = ({name, img, rank, url })=>(
    <a href={url} target={'blank'}>

        <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3 '} m={'4'}
        css={{
            '&:hover':{
                transform:'scale(1.1)'
            }
        }}
        >
            <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt={'Exchange'}  />

            <Heading size={'md'} noOfLines={1}>{rank} </Heading>
            <Text noOfLines={1}>{name} </Text>
        </VStack>

    </a>
)