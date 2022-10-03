import React, { useState , useEffect} from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Header from '../../components/Header/Header'
import styles from './style.module.css'
import axios from 'axios'
import ButtonNewUser from './AddNewUser/ButtonNewUser/ButtonNewUser'


const User = () => {
  
  const [users, setUsers] = useState([]);
  const url = "http://localhost:3000/users"

  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setUsers(response.data)
      console.log(response.data)
    }).catch(() => {
      console.log("error")
    })
    
  },[] )
  
  return (
     <div className='containerMain'>
      <div>
      <Navigation></Navigation> 
      </div>
      <div className={styles.subContainer}>
        <Header title='Users'></Header>
        <div>
          <label htmlFor="" className={styles.searchBox}>
            <h4>Search User</h4>
            <input type="text" placeholder='Name, ID'></input>
          </label>
        </div>
        <div className={styles.table}>
        <section class={styles.containerTable}>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Is it active?</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id_tcs_user}>
                  <td >{user.id_tcs_user}</td>
                  <td >
                    <span className={styles.user_level_id}>{user.user_name_domain}</span>
                    <p className={styles.setor}>{user.user_level_id}</p>
                    </td>
                  <td>{user.user_email}</td>
                  <td>{user.user_status ? (<span className={styles.active}>00</span>): (<span className={styles.inative}>00</span>)}</td>
                  <td>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.75 17.6758H0.78125C0.349121 17.6758 0 18.0249 0 18.457V19.3359C0 19.4434 0.0878906 19.5312 0.195312 19.5312H19.3359C19.4434 19.5312 19.5312 19.4434 19.5312 19.3359V18.457C19.5312 18.0249 19.1821 17.6758 18.75 17.6758ZM3.55713 15.625C3.60596 15.625 3.65479 15.6201 3.70361 15.6128L7.81006 14.8926C7.85889 14.8828 7.90527 14.8608 7.93945 14.8242L18.2886 4.4751C18.3112 4.45251 18.3292 4.42568 18.3414 4.39615C18.3537 4.36661 18.36 4.33495 18.36 4.30298C18.36 4.271 18.3537 4.23934 18.3414 4.20981C18.3292 4.18027 18.3112 4.15345 18.2886 4.13086L14.231 0.0708008C14.1846 0.0244141 14.1235 0 14.0576 0C13.9917 0 13.9307 0.0244141 13.8843 0.0708008L3.53516 10.4199C3.49853 10.4565 3.47656 10.5005 3.4668 10.5493L2.74658 14.6558C2.72283 14.7866 2.73132 14.9212 2.77131 15.0479C2.81129 15.1747 2.88158 15.2898 2.97607 15.3833C3.13721 15.5396 3.33984 15.625 3.55713 15.625V15.625Z" fill="black"/>
                      </svg>
                    </td>
                    <td><svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0714 2.6424H11.8182V1.35241C11.8182 0.606685 11.2017 0 10.4439 0H5.55612C4.79833 0 4.18183 0.606685 4.18183 1.35241V2.6424H0.92857C0.416519 2.6424 0 3.05229 0 3.55619V5.23092C0 5.73482 0.416519 6.14471 0.92857 6.14471H1.46788V18.7206C1.46788 19.4261 2.0511 19.9999 2.76788 19.9999H13.232C13.9488 19.9999 14.532 19.4261 14.532 18.7206V6.14478H15.0714C15.5835 6.14478 16 5.73489 16 5.23099V3.55619C16 3.05236 15.5834 2.6424 15.0714 2.6424ZM5.29612 1.35241C5.29612 1.21374 5.4152 1.09655 5.55612 1.09655H10.4439C10.5848 1.09655 10.7039 1.21374 10.7039 1.35241V2.6424H5.29612V1.35241ZM13.4178 18.7207C13.4178 18.8197 13.3327 18.9034 13.232 18.9034H2.76788C2.66722 18.9034 2.58217 18.8197 2.58217 18.7207V6.14478H13.4178V18.7207ZM14.8857 5.04823H1.11428V3.73895H14.8857V5.04823Z" fill="#DB1E1E"/>
                    <path d="M4.7389 17.3534C5.0466 17.3534 5.29605 17.1079 5.29605 16.8051V8.44134C5.29605 8.13855 5.0466 7.89307 4.7389 7.89307C4.43114 7.89307 4.18176 8.13855 4.18176 8.44134V16.8051C4.18176 17.1079 4.43114 17.3534 4.7389 17.3534Z" fill="#DB1E1E"/>
                    <path d="M8.00007 17.3534C8.30784 17.3534 8.55721 17.1079 8.55721 16.8051V8.44134C8.55721 8.13855 8.30784 7.89307 8.00007 7.89307C7.69231 7.89307 7.44293 8.13855 7.44293 8.44134V16.8051C7.44293 17.1079 7.69238 17.3534 8.00007 17.3534Z" fill="#DB1E1E"/>
                    <path d="M11.2612 17.3534C11.5689 17.3534 11.8183 17.1079 11.8183 16.8051V8.44134C11.8183 8.13855 11.5689 7.89307 11.2612 7.89307C10.9534 7.89307 10.704 8.13855 10.704 8.44134V16.8051C10.704 17.1079 10.9534 17.3534 11.2612 17.3534Z" fill="#DB1E1E"/>
                  </svg>
              </td> 
                </tr>
              ))}
                
            </tbody> 
        </table>
        </section>
        </div>

        <ButtonNewUser></ButtonNewUser>
      </div>
     </div>
 
  )
}



export default User