/* eslint-disable react/prop-types */
import { Box, Button, Text } from '@chakra-ui/react'

export default function ListCategories({ addCategories }) {
  return (
    <>
      <Text fontSize={'xl'} textAlign={'center'} padding={6} color={'#D6D5A8'}>Categorías</Text>
      <Box as='section' padding={2} display={'flex'} justifyContent={'space-between'} flexFlow={'row wrap'} gap={4} >
        {
          addCategories.map((categoria, idx) => (
            <Box width={{ base: '100%', md: '200px' }} height={'100%'} bgColor={'#D6D5A8'} paddingX={6} paddingY={4} borderRadius={'md'} key={idx}>
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                <Text fontSize={'xl'} fontWeight={600}>{categoria.title}</Text>
              </Box>
              <ul>
                {categoria.subcategories.map((sub, idx) => (
                  <li key={idx}>{sub.title}</li>
                ))}
              </ul>
            </Box>
          ))
        }
      </Box>
    </>
  )
}
