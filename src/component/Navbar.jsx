import { NavbarBrand } from "reactstrap"

export const Navbar = () => {
  return (
    <>
      <Navbar
        color="light"
        expand="md"
        fixed=""
        light
      >
        <NavbarBrand href="/">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffarmagitechs.co.id%2F&psig=AOvVaw3d-PPyM1ygIN-l3Jn1cfpm&ust=1637166751797000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPji3smnnfQCFQAAAAAdAAAAABAO" 
          alt="Logo" />
        </NavbarBrand>
      </Navbar>      
    </>
  )
}
