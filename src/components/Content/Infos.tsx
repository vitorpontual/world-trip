import { Button, Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function Infos() {
  return (
    <Flex
      align='center'
      justify='space-between'
    >
      <Flex direction='column' justify='center' align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} fontWeight='semibold' color='yellow.400'>
          50
        </Heading>
        <Text fontSize={['md', 'xl']} fontWeight='semibold' color='gray.700' >
          países
        </Text>
      </Flex>
      <Flex direction='column' justify='center' align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} fontWeight='semibold' color='yellow.400'>
          60
        </Heading>
        <Text fontSize={['md', 'xl']} fontWeight='semibold' color='gray.700' >
          línguas
        </Text>
      </Flex>
      <Flex direction='column' justify='center' align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} fontWeight='semibold' color='yellow.400'>
          27
        </Heading>
        <Text fontSize={['md', 'xl']} fontWeight='semibold' color='gray.700' >
          cidade +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon cursor='pointer' as={RiInformationLine} ml='1' color='gray.400' w={['10px', '16px']} h={['10px', '16px']}></Icon>
              </span>
            </PopoverTrigger>
            <PopoverContent bg='gray.700' color='yellow.400' >
              <PopoverArrow bg='gray.700'/>
              <PopoverCloseButton />
              <PopoverBody
                fontWeight='400' fontSize='lg'
              >Londres, Paris, Frankfurt, Madrid, Lisboa, Amsterdan</PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>

    </Flex>
  )
}