import { Heading, Grid } from "@chakra-ui/react";
import City from "./City";




export default function Cities() {
  return (
    <>
      <Heading
        fontWeight='500'
        fontSize={['2xl', '4xl']}
        mb='10'>
        Cidades + 100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3,1fr)', 'repeat(4,1fr)']}
        gap={['20px', '45px']}
        alignItems='center'
        justifyContent='center'
        px={['30px', '0']}>
        <City img={'/image/londonbridge.jpg'} city='Londres' country='Reino Unido' flag='/image/gbflag.png' />
        <City img={'/image/paris.jpg'} city='Paris' country='França' flag='/image/franceflag.png' />
        <City img={'/image/rome.jpg'} city='Roma' country='Itália' flag='/image/italy-flag.jpg' />

      </Grid>

    </>
  )
}