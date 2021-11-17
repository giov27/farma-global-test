import './Login.css'
import { Button, Card, CardBody, CardSubtitle, CardTitle, Container, Form, FormGroup, Input, Label, Spinner } from 'reactstrap'
import { useState } from 'react'
import { authLogin } from '../api/api.js'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  const [values, setValues] = useState({
    username: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [loginError, setLoginError] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  // API
  const postAuthLogin = async (e)=>{
    e.preventDefault()
    setIsLoading(true)
    setLoginError('')
    const res= await authLogin(values)
    setTimeout(() => {
      if(res.data.metaData.code === 200){
        const token = res.data.response.token
        localStorage.setItem('token', token)
        // redirect
        navigate('/patient')
      }else {
        setLoginError(res.data.metaData.message[0])
      }
      setIsLoading(false)
    }, 800);
  }

  return (
    <Container fluid className='d-flex align-items-center justify-content-center login__section'>
       <Card className='d-flex flex-row login__card align-items-center justify-content-around'>
         <div className='align-self-center'>
            <img src='https://cdn.dribbble.com/users/5920881/screenshots/14088635/media/da11146df7c3cb056c8d8aa60333b935.gif' alt='' className='login__gif'/>
         </div>
         <div>
            <CardBody className='login__cardbody'>
              <CardTitle tag="h2" className='text-center'>
                Login <span><img src="https://farmagitechs.co.id/wp-content/uploads/2021/06/cropped-Logo-PT.-FG.jpeg" alt="" className='login__logo'/></span>
              </CardTitle>
              <CardSubtitle
                className="mb-4 text-muted text-center"
                tag="h6"
              >
                Farma Global Teknologi
              </CardSubtitle>
              <Form inline onSubmit={postAuthLogin}>
                  <FormGroup floating>
                    <Input
                      id="username"
                      name="username"
                      placeholder="Username"
                      type="text"
                      onChange={handleChange}
                    />
                    <Label for="username">
                      Username
                    </Label>
                  </FormGroup>
                  {' '}
                  <FormGroup floating>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={handleChange}
                    />
                    <Label for="examplePassword">
                      Password
                    </Label>
                  </FormGroup>
                  {' '}
                  {loginError && 
                    <p>{loginError}</p>
                  }
                  <Button block size='lg' className='login__button mt-4' type='submit'>
                    {isLoading ? <Spinner size='sm'/> : 'Login'}
                  </Button>
                </Form>
            </CardBody>
         </div>
      </Card>
    </Container>
  )
}

export default Login
