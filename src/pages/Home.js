import { Link } from 'react-router-dom'
import styled from 'styled-components'
import main from '../assets/main.svg'
import { useGlobalContext } from '../context/appContext'
import { Redirect } from 'react-router-dom'
function Home() {
  const { user } = useGlobalContext()

  return (
    <>
      {user && <Redirect to='/dashboard' />}
      <Wrapper className='page'>
        <div className='info'>
          <h1>
            jobs<span>App</span>Test
          </h1>
          <p>
           Test from back-end:{" "}
           <a className="ext-link" href="https://jobs-api-paolo.herokuapp.com/">jobs-api-paolo.herokuapp.com
</a>
          </p>
          <p>
            <strong>DOCUMENTATION</strong>: <a className="ext-link" href="https://jobs-api-paolo.herokuapp.com/api-docs/">jobs-api-paolo.herokuapp.com/api-docs</a>
          </p>

          <Link to='/register' className='btn'>
            Login
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  h1 span {
    color: var(--primary-500);
    font-weight: 700;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    .main-img {
      display: block;
    }
  }
`

export default Home
