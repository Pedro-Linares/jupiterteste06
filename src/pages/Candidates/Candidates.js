import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'
import ModalNewCandidate from './ModalNewCandidate/ModalNewCandidate'
import NewCandidateForm from './NewCandidateForm/NewCandidateForm'
import styles from './style.module.css'

const Candidates = () => {
  
  const [isModalNewCandidateVisible, setIsModalNewCandidateVisible] = useState(false);

  const [candidates, setCandidates] = useState([
    {id: 25485,
    name: 'Maria Aparecida',
    email: 'mariaaparecida@gmail.com',
    status: 'Approved - Shared With Client'},
    {id: 25482,
    name: 'Carolina Souza',
    email: 'carolinasouza@gmail.com',
    status: 'Not approved'},
    {id: 25481,
    name: 'Leonardo Ferreira',
    email: 'leonardo@gmail.com',
    status: 'Approved - in hiring process'},
    {id: 25483,
    name: 'Laura Alves',
    email: 'luara@gmail.com',
    status: 'Declined'},
    {id: 25484,
    name: 'Joao Victor',
    email: 'joaovictor@gmail.com',
    status: 'Not Approved'},
  ])

  return (
     <div className={styles.mainCandidates}>
          <div>
          <Navigation></Navigation>
          </div>
        <div className={styles.subContainer}>
        <Header title='Candidates'></Header>
          <div>
          <label htmlFor="" className={styles.searchBox}>
            <h4>Search Candidate</h4>
            <input type="text" placeholder='Name, ID'></input>
          </label>
          </div>
          <div className={styles.table}>
          <section class={styles.containerTable}>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>E-mail</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.id}>
                  <td>{candidate.name}</td>
                  <td>{candidate.status}</td>
                  <td>{candidate.email}</td>
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
          <button onClick={() => setIsModalNewCandidateVisible(true) }className='btn'>New Candidate</button>
          {isModalNewCandidateVisible ? <ModalNewCandidate onClose={() => setIsModalNewCandidateVisible(false)}><NewCandidateForm></NewCandidateForm></ModalNewCandidate> : null}
        </div>
     </div>
 
  )
}

export default Candidates