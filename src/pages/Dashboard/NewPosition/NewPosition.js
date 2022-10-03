import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
//import {yupResolver} from '@hookform/resolvers/yup';
//import * as yup from 'yup';
import styles from './style.module.css'


/*
const validationPosition = yup.object().shape({
  //id sera gerado no banco
    //id_key_open_position : yup.number()
    //.typeError("the id_key_open_position is mandatory and needs to be a number").required(),

    title:yup.string().required("The title is required field"),

    //verificar esse campo na planilha nao tem em open positions
    role_id: yup.number().required(),
    open_position_status_id : yup.string().required(),

    type_main_skill_id: yup.string().required("Type is required field"),

    senrioty_level_required_id: yup.string().required(),

    minimum_experience_years: yup.string(),

    cluster_id: yup.string().required(),

    customer_id: yup.string().required(),

    won: yup.number().typeError("Value must be a number").required(),

    new_position_or_replacement_id: yup.string().required(),

    rgs: yup.number().typeError("Value must be a number").required(),
    req:  yup.number().typeError("REQ is required field").required("REQ is required field"),
    cp_id: yup.string().required("CP is a required field"),

    need_client_interview_id: yup.string().required(),

    work_model_id: yup.string().required(),

    owner_id: yup.string().required(),

    pending_hr: yup.string().required("Pending HR is required field"),

    hr_spoc_id: yup.string().required("Hr spoc is required field"),

    position_status_id: yup.string(),

    doj: yup.string().required("DOJ is required field"),

    rgs_status_id: yup.string().required(),

    english_required_id: yup.string().required(),

    spanish_required_id: yup.string().required(),

    description: yup.string().required("Description is required field"),

    linkedin_open_position_url: yup.string(),
    customer_info: yup.string(),
    approved_candidate_id: yup.string(),
    dhl_requirement: yup.string(),
    rate_target: yup.string().required("Rate Target is a required field"),
    cancel_reason: yup.string(),
    on_hold: yup.string(),
})
*/

/*Adicionar um novo usuario*/


const NewPosition = () => {
  
  const {register, handleSubmit, formState: {errors}} = useForm();

  const addNewPosition = data =>{axios.post("http://localhost:3000/open_position", data)
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
            <form className={styles.form} onSubmit={handleSubmit(addNewPosition)}>
            <h3>Add New Position</h3>
             <div className={styles.formContainer}>
              <div className={styles.boxLeftForm} >
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Title</p>
                  <input 
                  type='Text'
                  {...register("title")}  placeholder='Enter the title' />
                  <p className={styles.errors}>{errors.title?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Description</p>
                  <textarea 
                  {... register ("description")}
                  type="text" placeholder='Enter Description' ></textarea>
                  <p className={styles.errors}>{errors.description?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Linkedin Open Position URL (Link)</p>
                  <input 
                  {... register ("linkedin_open_position_url")}
                  type="text" placeholder=' Enter LinkedIn Open Position URL' />
                  <p className={styles.errors}>{errors.linkedin_open_position_url?.message}</p>
                </label>
              </div>
              
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Customer Info</p>
                  <textarea 
                  {... register ("customer_info")}
                  type="text" placeholder='Enter Customer Info'></textarea>
                  <p className={styles.errors}>{errors.customer_info?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Cancel Reason</p>
                  <input 
                  {... register ("cancel_reason")}
                  type="text" placeholder='Enter Cancel Reason' />
                  <p className={styles.errors}>{errors.cancel_reason?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Work Model</p>
                  <select 
                  {... register ("work_model_id")}
                  type="text">
                  <option value="home_office">Planilha</option>
                  </select>
                  <p className={styles.errors}>{errors.work_model_id?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Peding HR</p>
                  <input 
                  {... register ("pending_hr")}
                  type="date"  />
                  <p className={styles.errors}>{errors.pending_hr?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>DOJ</p>
                  <input 
                  {... register ("doj")}
                  type="date" />
                  <p className={styles.errors}>{errors.doj?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>HR SPOC</p>
                  <select 
                       {... register ("hr_spoc_id")}
                  type="text">
                  <option value="hr_spoc">Planilha</option>
                  </select>
                  <p className={styles.errors}>{errors.hr_spoc_id?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label>
                  <p>English</p> 
                  <select 
                                {... register ("english_required_id")}
                  type="text">
                  <option value="basic">Basic</option>
                  </select>
                  <p className={styles.errors}>{errors.english_required_id?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Spanish</p>
                  <select 
                                {... register ("spanish_required_id")}
                  type="text">
                  <option value="basic">Basic</option>
                    </select>
                  <p className={styles.errors}>{errors.spanish_required_id?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Rate Target</p>
                  <input 
                        {... register ("rate_target")}
                  type="text" placeholder='Enter Rate Target' />
                  <p className={styles.errors}>{errors.rate_target?.message}</p>
                </label>
              </div>
              
              </div>
              <div className={styles.boxRightForm}>
              
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Type / Main Skill</p>
                  <select 
                               {... register ("type_main_skill_id")}
                  type="text">
                  <option value="aws">AWS</option>
                  </select>
                  <p className={styles.errors}>{errors.type_main_skill_id?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Position Status</p>
                  <select 
                               {... register ("position_status_id")}
                  type="text">
                  <option value="on_hold">On Hold</option>
                  </select>
                  <p className={styles.errors}>{errors.position_status_id?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Owner-Tech Lead /Manager</p>
                  <select 
                     {... register ("owner_id")}
                  type="text">
                    <option value="gilberto">Gilberto Anderson</option>
                    </select>
                  <p className={styles.errors} >{errors.owner_id?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Senrioty Level Required</p>
                  <select 
                  
                  {... register ("senrioty_level_required_id")}
                  type="text">
                    <option value="trainee">Trainee</option>
                    </select>
                  <p className={styles.errors}>{errors.senrioty_level_required_id?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Minimum Experience in Years</p>
                  <input
                  
                  {... register ("minimum_experience_years")}
                  type="number">
                    </input>
                  <p className={styles.errors}>{errors.minimum_experience_years?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Cluster</p>
                  <select 
                       {... register ("cluster_id")}
                  type="text">
                    <option value="bfsi">BFSI</option>  
                    </select>
                  <p className={styles.errors}>{errors.cluster_id?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Customer</p>
                  <select 
                        {... register ("customer_id")}
                  type="text">
                  <option value="bradesco">Bradesco</option>
                  </select>
                  <p className={styles.errors}>{errors.customer_id?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>Won</p>
                  <input
                  {... register ("won")}
                  type="number">
                    </input>
                  <p className={styles.errors}>{errors.won?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>New Position or Replacement</p>
                  <select 
                  {... register ("new_position_or_replacement_id")}
                  type="text">
                    <option value="new_position">New Position</option>  
                    </select>
                  <p className={styles.errors}>{errors.new_position_or_replacement_id?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>RGS</p>
                  <input 
                  {... register ("rgs")}
                  type="number">
                  </input>
                  <p className={styles.errors}>{errors.rgs?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>RGS STATUS</p>
                  <select
                          {... register ("rgs_status_id")}
                  type="text"
                  >
                  <option value="rgs">rgs</option>  
                  </select>
                  <p className={styles.errors}>{errors.rgs_status_id?.message}</p>
                </label>
              </div>
              <div className={styles.fields}>
                <label htmlFor="">
                  <p>REQ</p>
                  <input 
                  {... register ("req")}
                  type="number">
                  </input>
                  <p className={styles.errors}>{errors.req?.message}</p>
                </label>
              </div>

              <div className={styles.fields}>
                <label htmlFor="">
                  <p>CP</p>
                  <select 
                  {... register ("cp_id")}
                  type="text">
                  <option value="cp1">cp1</option>
                  </select>
                  <p className={styles.errors}>{errors.cp_id?.message}</p>
                </label>
              </div>
              <button type="submit" className={styles.btnNewPosition} >Submit</button>
              </div>
              </div>
            </form>
          </div>
        </main>
  )
}

export default NewPosition