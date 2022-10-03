//import axios from 'axios'
import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'
import Card from './Card/Card'
import ModalNewPosition from './ModalNewPosition/ModalNewPosition'
import NewPosition from './NewPosition/NewPosition'
import styles from './style.module.css'

const Dashboard = () => {

/*Modal Add New Position*/
const [isModalNewPositionVisible, setIsModalNewPositionVisible] = useState(false);



/*dados temporarios para renderização*/
  const [positions, setPositions] = useState([
    {
      id_key_open_position: "WI1617",
      title: "ANALISTA JUNIOR",
      priority: "Urgent",
      open_position_status: 'open_positions'
    },
    {
      id_key_open_position: "WI7716",
      title: "ANALISTA DE SISTEMAS ",
      priority: "standart",
      open_position_status: 'open_positions'
    },
    {
      id_key_open_position: "WI1444",
      title: "ANALISTA DE SUPORTE",
      priority: "Urgent",
      open_position_status: 'open_positions'
    },
    {
      id_key_open_position: "WI1478",
      title: "ANALISTA DE SUPORTE",
      priority: "Urgent",
      open_position_status: 'profile_shared'
    },
    {
      id_key_open_position: "JS95858",
      title: "DEV ANDROID",
      priority: "Urgent",
      open_position_status: 'evaluating_candidates'
    },
    {
      id_key_open_position: "JS9577",
      title: "CONSULTOR DE SISTEMAS",
      priority: "Urgent",
      open_position_status: 'evaluating_candidates'
    },
    {
      id_key_open_position: "JS9515",
      title: "COORDENADOR DE BPO",
      priority: "standart",
      open_position_status: 'evaluating_candidates'
    },
    {
      id_key_open_position: "JS9525",
      title: "ESPECIALISTA DE BPO",
      priority: "Urgent",
      open_position_status: 'evaluating_candidates'
    },
    {
      id_key_open_position: "WD92515",
      title: "DEV FRONT END",
      priority: "Standart",
      open_position_status: 'on_hold'
    },
    {
      id_key_open_position: "WAA252",
      title: "DEV API",
      priority: "Standart",
      open_position_status: 'open_positions'
    },
  ]);

 /*
const url = "http://localhost:3000/open_position"

  useEffect(() => {
    axios.get(url)
    .then((response) => {
      console.log(response.data)
    }).catch(() => {
      console.log("error")
    })
  },[] )*/
  

  const filterPositionStatus =  positions.filter(position =>
      (position.open_position_status.toLowerCase() === 'open_positions'));

  const filterProfileShared =  positions.filter(position =>
      (position.open_position_status.toLowerCase() === 'profile_shared'));

  const filterEvaluatingCandidates =  positions.filter(position =>
      (position.open_position_status.toLowerCase() === 'evaluating_candidates'));

  const filterOnHold =  positions.filter(position =>
      (position.open_position_status.toLowerCase() === 'on_hold'));

  const filterNoActionsAndOther =  positions.filter(position =>
      (position.open_position_status.toLowerCase() === 'interview_done'
       && position.open_position_status.toLowerCase() === 'hr_direct_to_hr'));
  


  return (
    <div className={styles.containerMain}>
      <Navigation></Navigation>
    <div>
    <div className={styles.subContainer}>
      <div className={styles.header}>
      <Header title='Open Positions'></Header>
      </div>
       <main className={styles.dashboard}>
          <div className={styles.columnPositions}>
            <h3>Open Position</h3>
            <div className={styles.cardColumns}>
              {filterPositionStatus.map((position) => (
              <Card key={position.id_key_open_position}
              id={position.id_key_open_position}
              titlePosition={position.title}
              priority={position.priority}></Card>
              ))}
            </div>
          </div >
          <div className={styles.columnPositions}>
            <h3>Profile Shared</h3>
            <div className={styles.cardColumns}>
            {filterProfileShared.map((position) => (
                <Card 
                key={position.id_key_open_position}
                id={position.id_key_open_position}
                titlePosition={position.title}
                priority={position.priority}></Card>
                ))}    
            </div>
          </div>
          <div className={styles.columnEvaluatingCandidates}>
            <h3>Evaluating Candidates</h3>
            <div className={styles.subHeaderEvaluatingCandidates}>
              <h4>Tech Interview</h4>
              <h4>Customer Interview</h4>
            </div>

            <div className={styles.subColumnEvaluatingCandidates}>
              <div className={styles.techInterview}>
                <div className={styles.cardColumns}>
                {filterEvaluatingCandidates.map((position) => (
                <Card 
                key={position.id_key_open_position}
                id={position.id_key_open_position}
                titlePosition={position.title}
                priority={position.priority}></Card>
                ))}
                </div>
              </div>
              <div className={styles.customerInterview}>
                <div className={styles.cardColumns}>
                {filterEvaluatingCandidates.map((position) => (
                <Card 
                key={position.id_key_open_position}
                id={position.id_key_open_position}
                titlePosition={position.title}
                priority={position.priority}></Card>
                ))}

                </div>
              </div>
            </div>
          </div>
          <div className={styles.columnPositions}>
            <h3>On Hold</h3>
            <div className={styles.cardColumns}>
            {filterOnHold.map((position) => (
              <Card 
              key={position.id_key_open_position}
              id={position.id_key_open_position}
              titlePosition={position.title}
              priority={position.priority}></Card>
              ))}
            </div>
          </div>
          <div className={styles.columnPositions}>
            <h3>No Actions - EAS and Others</h3>
            <div className={styles.cardColumns}>
            {filterNoActionsAndOther.map((position) => (
              <Card 
              key={position.id_key_open_position}
              id={position.id_key_open_position}
              titlePosition={position.title}
              priority={position.priority}></Card>
              ))}
            </div>
          </div>
  </main>
  </div> 
    <button onClick={() => setIsModalNewPositionVisible(true)}
            className={styles.btnNewPosition}
            >
            +
    </button>

    {/*Modal new position*/}

    {isModalNewPositionVisible ? <ModalNewPosition onClose={() => setIsModalNewPositionVisible(false)}><NewPosition></NewPosition></ModalNewPosition> : null}


    </div>
</div>
  )
}

export default Dashboard