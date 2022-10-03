import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './styles.module.css'



/*Validação do formulario*/
const validationCandidate = yup.object().shape({
  /*candidate_name : yup.string().typeError("the field Candidate Name is mandatory").required(),
  english_level_id : yup.number().typeError("the field English Level is mandatory").required(),
  spanish_level_id : yup.number().typeError("the field Spanish Level is mandatory").required(),
  shared_with_cust_date : yup.string().required(),
  seniority_level_id : yup.number().typeError("the field Seniority Level is mandatory").required(),
  candidate_contact_number : yup.string().typeError("the field Contact Number is mandatory").required(),
  rolel_id : yup.number().typeError("the field Role is mandatory").required(),
  description : yup.string().required(),
  resolution_comments : yup.string().typeError("the field Resolution Comments is mandatory").required(),
  profile_skill : yup.string().required(),
  candidate_email : yup.string().typeError("the E-mail is mandatory").required(),
  profile_source : yup.string().typeError("the field Profile Source is mandatory").required(),
  cv_link : yup.string().required(),
  candidate_screening_resolution: yup.string().typeError("the field Screening Resolution is mandatory").required(),
  current_employer : yup.string().typeError("the field Current Employer is mandatory").required(),
  id_tcs : yup.string().required(),
  work_location:yup.string().required(),
  salary_intention: yup.string().required(),
  hr_spoc_id: yup.number().required()*/
})


/*Adicionar um novo usuario*/


const NewCandidateForm = () => {
  
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validationCandidate)
  });

  const addNewCandidate = data =>{axios.post("http://localhost:3000/profiles", data)
  .then(()=> {
    console.log("deu certo")
    
  })
  .catch(() => {
    console.log("deu errado")
  })
  console.log(data)
}

  
  
  return (
        <main className={styles.containerMain}>
          <div >
            <form className={styles.form} onSubmit={handleSubmit(addNewCandidate)}>
              <h3>Add New Candidate</h3>
              <div className={styles.formContainer}>
              <div className={styles.boxLeftForm} >
              <div className={styles.fields}>
                  <label htmlFor="">
                    <p>Approved Candidate Name</p>
                    <input 
                    type='text'
                    {...register("candidate_name")}  placeholder='Enter Candidate Name' />
                    <p>{errors.candidate_name?.message}</p>
                  </label>
                </div>

                  <div className={styles.fields}>
                    <label htmlFor="">
                    <p>E-mail</p>
                    <input 
                    type='email'
                    {...register("candidate_email")}  placeholder='Enter E-mail' />
                    <p>{errors.candidate_email?.message}</p>
                    </label>
                  </div>

                  <div  className={styles.fields}>
                   <label htmlFor="">
                    <p>Candidate Contact Number</p>
                    <input 
                    type='tel'
                    {... register ("candidate_contact_number")}
                    placeholder='Enter Contact Number' />
                    <p>{errors.candidate_contact_number?.message}</p> 
                   </label>
                  </div>
                  <div className={styles.fields}>
                <label htmlFor="">
                  <p>Description</p>
                  <textarea 
                  {... register ("description")}
                  type="text" placeholder='Enter Description' />
                  <p>{errors.description?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Resolution Comments</p>
                  <textarea className={styles.buttonSwitch}
                  type="text"
                  {... register ("resolution_comments")} 
                  placeholder='Enter Resolution Comments'/>
                  <p>{errors.resolution_comments?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label htmlFor="">
                    <p>Skill</p>
                    <textarea 
                    {... register ("profile_skill")}
                    type="" placeholder='Enter Skill'></textarea>
                    <p>{errors.profile_skill?.message}</p>
                  </label>
              </div>
              

                <div  className={styles.fields}>
                  <label htmlFor="">
                    <p>CV Link</p>
                    <input 
                    {... register ("cv_link")}
                    type="text" placeholder='Enter CV Link' />
                    <p>{errors.cv_link?.message}</p>
                   </label>
                 </div>

              <div className={styles.fields}>
                <label htmlFor="">
                  <p>ID TCS</p>
                  <input 
                  {... register ("id_tcs")}
                  type="text">
                  </input>
                  <p className={styles.errors}>{errors.id_tcs?.message}</p>
                </label>
              </div>

            </div>
            <div className={styles.boxRightForm}>

            <div className={styles.fields}>
                <label htmlFor="">
                  <p>Role</p>
                  <select
                  type="text"
                  {... register ("role_id")}>
                    <option value="planilha">ANALISTA DE NEGÓCIOS</option>
                  </select>
                  <p>{errors.role_id?.message}</p>
                </label>
              </div>
            <div  className={styles.fields}>
                  <label htmlFor="">
                    <p>English</p>
                    <select 
                    {... register ("english_level_id")}
                    type="text">
                    <option value="basic">Basic</option>
                    <option value="intermediary">Intermediary</option>
                    <option value="advanced">Advanced</option>
                  </select>
                    <p>{errors.english_level_id?.message}</p>
                  </label>
                </div>

                <div  className={styles.fields}>
                <label htmlFor="">
                    <p>Spanish</p>
                    <select 
                    {... register ("spanish_level_id")}
                    type="number">
                    <option value="basic">Basic</option>
                    <option value="intermediary">Intermediary</option>
                    <option value="advanced">Advanced</option>
                  </select>
                    <p>{errors.spanish_level_id?.message}</p>
                  </label>
                </div>

              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Current Employer</p>
                  <input
                  type="text"
                  {... register ("current_employer")} 
                  placeholder='Enter Current Employer'/>
                  <p>{errors.current_employer?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Shared With Cust Date</p>
                  <input
                  type="date"
                  {... register ("shared_with_cust_date")} />
                  <p>{errors.shared_with_cust_date?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Salary Intention</p>
                  <input
                  type="text"
                  {... register ("salary_intention")} 
                  placeholder='Enter Salary Intention'/>
                  <p>{errors.salary_intention?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Seniority</p>
                  <select
                  type="number"
                  {... register ("seniority_level_id")}>
                    <option value="planilha">SR (4 - 6 EXP. YEARS)</option>
                  </select>
                  <p>{errors.seniority_level_id?.message}</p>
                </label>
              </div>


              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Profile Source</p>
                  <input
                  type="text"
                  {... register ("profile_source")} 
                  placeholder='Enter Profile Source'/>
                  <p>{errors.profile_source?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Candidate Screening Resolution</p>
                  <input
                  type="text"
                  {... register ("candidate_screening_resolution")} 
                  placeholder='Enter Screening Resolution'/>
                  <p>{errors.candidate_screening_resolution?.message}</p>
                </label>
              </div>
            
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Hr Spoc ID</p>
                  <select
                  type="text"
                  {... register ("hr_spoc_id")} 
                  placeholder='Enter HR Spoc'>
                    <option value="pending_tbd">ANANDA DANTAS</option>
                  </select>
                  <p>{errors.hr_spoc_id?.message}</p>
                </label>
              </div>

              <div  className={styles.fields}>
                  <label htmlFor="">
                    <p>Work Location</p>
                    <input 
                    {... register ("work_location")}
                    type="text" placeholder='Enter Work Location' />
                    <p>{errors.work_location?.message}</p>
                  </label>
                </div>
                <button type='submit' className={styles.btnNewCandidate}>Submit</button>
              </div>
              </div>
                  
            </form>
          </div>
        </main>
  )
}


export default NewCandidateForm;