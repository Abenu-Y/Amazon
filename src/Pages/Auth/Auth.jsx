import React, { useState,useContext } from 'react'
import AuthStyle from './signup.module.css'
import {Link,useNavigate,useLocation} from 'react-router-dom'

import {auth} from '../../Utility/firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'

import {DataContext} from '../../Components/Data/DataProvider'
import {Type} from '../../Utility/action.type'
import {PropagateLoader} from 'react-spinners'
// <HashLoader color="#36d7b7" /> 



function Auth() {

   const [email,setEmail] = useState("")
   const [password,setPassword] =useState("")
   const [error, setError] = useState("")
   const navStateData = useLocation()
   //console.log(navStateData)
   const [loading,setLoading]=useState({
    signUP:false,
    signIn:false
   })
   const [{user},dispatch]=useContext(DataContext)
   const navigate = useNavigate()
  // console.log(user)
   

   const authHandler =(e)=>{

         e.preventDefault();
         //console.log(e.target.name)

         if(e.target.name == 'signin'){
               setLoading({...loading, signIn:true})
               signInWithEmailAndPassword(auth,email,password).
               then((userinfo)=>{
                      // console.log(userinfo)
                      dispatch({
                        type:Type.SET_USER,
                        user:userinfo.user
                      })
               setLoading({...loading, signIn:false})
               navigate(navStateData?.state?.redirect || '/')

               }).
               catch((err)=>{
               // console.log(err)
                setError(err.message)
              })
         }
         else{

                setLoading({...loading, signUP:true})

                createUserWithEmailAndPassword(auth,email,password).
                 then((userinfo)=>{
                    // console.log(userinfo)
                    dispatch({
                      type:Type.SET_USER,
                      user:userinfo.user
                    })

                 setLoading({...loading, signUP:false})
                 navigate(navStateData?.state?.redirect || '/')


                  }
              ).
               catch((err)=>{
                // console.log(err)
                setError(err.message)
                })
         }

   }
   //console.log(email,password)
  return (
      <div className={AuthStyle.cont}>
           
              <Link to="/"> 
                    <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG6.png" alt="amazon-logo" />
              </Link>
            

              <div className={AuthStyle.form_container}>
                     <h1>Sign in</h1>
                     {
                         navStateData.state.msg && (
                               <small style={{
                                    padding:'5px',
                                    textAlign:'center',
                                    color:'red',
                                    fontWeight:'bold'
                               }}>
                                    {navStateData.state.msg}
                               </small>
                         )
                        }

                     <form action="">

                          <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="" id="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                          </div>

                          <div>
                                <label htmlFor="Password">Password</label>
                                <input type="password" name="" id="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
                          </div>

                          <button className={AuthStyle.sign_in_btn} name='signin' onClick={authHandler}>
                            {
                                   loading.signIn ? ( <PropagateLoader color="white" size={10} /> ):"SignIn"
  
                            }
                          </button>

                           <p>
                           By continuing, you agree to <em>Amazon's FAKE CLONE</em> Conditions of Use and Privacy Notice.
                           </p>

                           <button className={AuthStyle.createAccount_btn} name='signup'  onClick={authHandler}>
                                Create your Amazon account
                           </button>

                           {
                            error && <small style={{paddingTop:'5px', color:'red'}}>{error}</small>
                           }
                          
                     </form>

                   
              </div>


            
      </div>
  )
}

export default Auth