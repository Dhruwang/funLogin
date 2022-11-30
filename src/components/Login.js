import React,{useState} from 'react'
import "./login.css"
import eyes_open from "../Images/eyes_open.jpg"
import eyes_close from "../Images/eyes_close.jpg"


export default function Login() {
    const [password, setpassword] = useState('')
    const [img, setimg] = useState(eyes_open)
    let btn1 = document.getElementById('btn1')
    let btn2 = document.getElementById('btn2')
    const handleOnChange =(event)=>{
        setpassword(event.target.value)
    }
    const handleOnClick=()=>{
        setimg(eyes_close)
    }
    const handleOnMouseOver1=()=>{
        if(password.length<9){
            if(btn2.classList.contains('hide')){
                btn1.classList.add('hide')
                btn2.classList.remove('hide')
            }
        }
        
        
    }
    const handleOnMouseOver2=()=>{
        if(password.length<9){
            if(btn1.classList.contains('hide')){
                btn2.classList.add('hide')
                btn1.classList.remove('hide')
            }
        }
        
    }
    return (
        <>
            <div className='container '>
                <div className='wrapper d-flex justify-content-center align-items-center'>
                    <form className='w-25 '>
                        <h2 className='mx-auto'>LOGIN</h2>
                        <div className='text-center'>
                        <img src={img} height='100px' width="100px"></img>
                        </div>
                        
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" onChange={handleOnChange} onClick={handleOnClick} id="exampleInputPassword1" />
                        </div>
                        <button type="submit" id='btn1' onMouseOver={handleOnMouseOver1} class="btn btn-primary ">Submit</button>
                        <button type="submit" id='btn2' onMouseOver={handleOnMouseOver2} class="btn btn-primary mx-2 hide">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
