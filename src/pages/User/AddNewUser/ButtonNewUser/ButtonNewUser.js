import ModalNewUser from '../ModalNewUser/ModalNewUser';
import { useState } from 'react'
import NewUser from '../../NewUser/NewUser';

function ButtonNewUser () {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div >
     <button className="btn" onClick={() => setIsModalVisible(true)}>
      New User
     </button>
     {isModalVisible ? ( <ModalNewUser onClose={ () => setIsModalVisible(false)}>
      <NewUser></NewUser>
       </ModalNewUser>
       ) : null}
    </div> 
  )

}

export default ButtonNewUser