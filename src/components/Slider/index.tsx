import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link'

import SwiperCore, { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination ]);



export default function Slider(){
  return(
    <Flex
      w='100%'
      maxW='1240px'
      h={["250px", "450px"]}
      mx='auto'
      mb={['5', '10']}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        autoplay={{
          delay: 4000
        }}
        style={{width: '100%', flex: '1'}}
      >
        <SwiperSlide>
          <Flex
            w='100%'
            h='100%'
            align='center'
            justify='center'
            direction='column'
            bgImage='url(/image/cityImage.jpg)'
            bgRepeat='no-repat'
            bgSize='cover'
            bgPosition='center'
            textAlign='center'
            >
            <Link href='/continent/europe'>
              <a>
                <Heading color='gray.100' fontSize={['3xl', '4xl', '5xl']}  >Europa</Heading>
                <Text color='gray.300' fontWeight='bold' fontSize={['0.8rem', '1xl', '2xl']} mt={['2', '4']}>O continent mais antigo</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w='100%'
            h='100%'
            align='center'
            justify='center'
            direction='column'
            bgImage='url(/image/cityImage.jpg)'
            bgRepeat='no-repat'
            bgSize='cover'
            bgPosition='center'
            textAlign='center'
            >
            <Link href='/continent/europe'>
              <a>
                <Heading color='gray.100' fontSize={['3xl', '4xl', '5xl']}  >Europa</Heading>
                <Text color='gray.300' fontWeight='bold' fontSize={['0.8rem', '1xl', '2xl']} mt={['2', '4']}>O continent mais antigo</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        

      </Swiper>

    </Flex>
  )
}