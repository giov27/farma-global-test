import './Login.css'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import { useState } from 'react'
import { authLogin } from '../api/api.js'

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

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
    const res= await authLogin(values)
    console.log(res);
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
                Login
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
                  <Button block size='lg' className='login__button mt-4' type='submit'>
                    Login
                  </Button>
                </Form>
            </CardBody>
         </div>
      </Card>
    </Container>
  )
}

export default Login
