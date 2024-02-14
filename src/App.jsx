import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Button from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'
import Row from './ui/Row'

const StyledApp = styled.div`
  padding: 20px;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Pine Hotel</Heading>
            <div>
              <Heading as="h2">Form</Heading>
              <Button onClick={() => alert('check in now')}>Check in</Button>
              <Button
                variation="secondary"
                onClick={() => alert('check out now')}
              >
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Footer</Heading>
            <form>
              <Input type="number" placeholder="Input" />
              <Input type="number" placeholder="Number" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  )
}

export default App
