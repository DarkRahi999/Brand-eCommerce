import { useState } from 'react'
import Button from "./Button";
const InputEmail = () => {
    const [Email, SetEmail] = useState('');
    let ChangeHandel = (e) =>{
        SetEmail (e.target.value)
    }
  return (
    <form action="">
        {/* -------------{ Email text filed  }---------------- */}
        <div>
            <input onChange={ChangeHandel} value={Email} type="Email" name="Email" id="Email" placeholder="Enter Your Email ..." className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none mb-3 focus:ring-2 placeholder:italic focus:ring-blue-500 rounded-tr-2xl rounded-br-2xl" required/>
        </div>
            <hr className="pb-1 text-neutral-400 border-r-2"/>

        {/* -------------{ button section  }---------------- */}
        <div className="flex md:justify-end mt-6">
          <Button input="Send" className='px-4 py-1 border bg-slate-500 text-white rounded'/>
        </div>
    </form>
  )
}
export default InputEmail;