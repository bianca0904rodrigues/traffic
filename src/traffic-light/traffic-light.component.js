import styled from '@emotion/styled'
import { Container, GreenLamp, YellowLamp, RedLamp } from './traffic-light.style'
import { useState, useEffect } from 'react'

export const TrafficLight = () => {
  const [currentColor, setCurrentColor] = useState('green')
  const byCurrentColor = color => color === currentColor

  const changeColor = () => {
    const colors = [ 
      'green', 
      'yellow', 
      'red', 
    ]
    
    const currentIndex = colors.findIndex(byCurrentColor)
    setCurrentColor(currentIndex < (colors.length - 1) 
      ? colors[currentIndex + 1] 
      : colors[0]
    )
  }

  useEffect(() => {
    setInterval(changeColor, 3000)
  }, [])

  return ( 
    <Container onClick={changeColor} >
      <GreenLamp on={currentColor === 'green'}/>
      <YellowLamp on={currentColor === 'yellow'}/>
      <RedLamp on={currentColor === 'red'}/>
    </Container>
  )
}
