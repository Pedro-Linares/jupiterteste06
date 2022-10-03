import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './style.module.css'

const validationUser = yup.object().shape({
    id_tcs_user: yup.number().typeError("Id is mandatory and needs to be a number").required("Id is required"),
    user_name_domain: yup.string().required("Name is required"),
    user_level_id: yup.string().required("Type User is required"),
    user_email: yup.string().required("E-mail is required"),
    user_password: yup.string().required("Password is required"),
    user_status: yup.boolean().required()
})

const NewUser = () => {
  
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validationUser)
  });

  const addNewUser = data =>{axios.post("http://localhost:3000/users", data)
  .then(()=> {
    console.log("deu certo")
    
  })
  .catch(() => {
    console.log("deu errado")
  })   
  console.log(data)
}

  
  
  return (
        <main>
          <div>
            <form className={styles.form} onSubmit={handleSubmit(addNewUser)}>
              <h4>Add New User</h4>
              <div className={styles.fields}>
                <label>
                  <p>ID TCS</p>
                  <input 
                  type='number'
                  {...register("id_tcs_user")}  placeholder='Enter ID' />
                  <p className={styles.errors}>{errors.id_tcs_user?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label>
                  <p>Full Name</p>
                  <input 
                  {... register ("user_name_domain")}
                  type="text" placeholder='Enter Name' />
                  <p className={styles.errors}>{errors.user_name_domain?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label >
                  <p>Type User</p>
                  <select 
                  {... register ("user_level_id")}
                  type="text">
                    <option value="Owner">Owner</option>
                    <option value="HR">HR</option>
                  </select>
                  <p className={styles.errors}>{errors.user_level_id?.message}</p>
                </label>
              </div>
              
              <div className={styles.fields}>
                <label>
                  <p>Email</p>
                  <input 
                  {... register ("user_email")}
                  type="text" placeholder='Enter email' />
                  <p className={styles.errors}>{errors.user_email?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label>
                  <p>Password</p>
                  <input 
                  {... register ("user_password")}
                  type="password"  />
                  <p className={styles.errors}>{errors.user_password?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label>
                  <p>Is active?</p>
                  <input className={styles.buttonSwitch}
                  type="checkbox"
                  {... register ("user_status")} />
                  <p lassName={styles.errors}>{errors.user_status?.message}</p>
                </label>
              </div>
              
                <button className={styles.btnNewUser} type='submit'>Submit</button>
              
            </form>
          </div>
        </main>
  )
}

export default NewUser