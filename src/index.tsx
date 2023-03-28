import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import styled from 'styled-components'
import './style.scss'
const imgPath = require('./assets/srcImage.png')

const H1 = styled.h1`
  color: blue;
  text-align: center;
`
const Image = styled.img`
  border: 1px solid pink;
`

const App = () => (
  <>
    <H1>Hello World</H1>
    <Image src={imgPath} alt='srcImage' />
  </>
)

let container = null
document.addEventListener('DOMContentLoaded', (e) => {
  if (!container) {
    container = document.getElementById('root')
    const root = createRoot(container)
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  }
})
