import { RiCloseFill } from 'react-icons/ri'
import {
	Modal,
	ModalBody,
	Button,
	ModalHeader,
	Spinner,
} from 'reactstrap'

const ModalInfo = ({
	modal,
	toggle,
	children,
	isSpinner,
}) => {
  return (
	  <>
			<Modal isOpen={modal} toggle={toggle} centered>
				<ModalHeader className='justify-content-end pt-1 pb-0'>
					<Button color='none' size='32' onClick={toggle}>
						<RiCloseFill size='32' color='#CCD3DF' />
					</Button>
				</ModalHeader>
				<ModalBody className='px-5 pt-0 pb-5 mx-4'>
					<p className='b-600 fs-24 text-center text-capitalize'>{children}</p>
					{/* <p className='b-500 fs-18 text-center'>Thanks for your transaction</p> */}
					<Button className='mt-3 py-3' color='primary' type='submit' onClick={toggle}>
						{isSpinner ? <Spinner children='' size='sm' /> : 'Done'}
					</Button>
				</ModalBody>
			</Modal>
		</>
  )
}

export default ModalInfo