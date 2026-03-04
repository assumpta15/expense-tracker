// import React, { useState } from 'react'
// import AuthLayout from '../../components/layouts/AuthLayout';
// import { Link, useNavigate } from 'react-router-dom';

// import Input from "../../components/Inputs/Input";
// import { validateEmail } from '../../utils/helper';



// const Login = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   //handle login form submit

//   const handleLogin = async (e) =>{
//     e.preventDefault();

//     if(!validateEmail(email)){
//       setError("Please enter a valid email address.")
//     }
//     if(!password){
//       setError("Please enter the password");
//       return;
//     }

//     setError("");


//     //Login API Call

//   }

//   return (
    
//     <div className="p-6 text-xl lg:w-[70%] md:h-full flex flex-col justify-center">
//       <h3 className="font-bold text-xl font-semibold text-black">Welcome back</h3>

//       <p className='text-x5 text-slate-700 mt-[5px] mb-6'>Please enter your details to login</p>
      


//       <form onSubmit={handleLogin} >
//         <Input
//         value={email}
//         onChange={({target}) => setEmail(target.value)}
//         label="Email Address"
//         placeholder="nay@eample.com"
//         type='text'
//         />

//         <Input
//         value={password}
//         onChange={({target}) => setPassword(target.value)}
//         label="Password"
//         placeholder="Min 8 Characters"
//         type='password'
//         />


//           {error && <p className=''>{error}</p>}
//           <button type='submit' className='btn-primary'>
//             LOGIN
//           </button>

//           <p className='text-[13px] text-slate-800 mt-3'>
//             Don't have an account?{''}
//             <Link className='font-medium text-primary underline' to='/signup'>
//             SignUp
//             </Link>
//           </p>
//         </form>
//     </div>
    
    
//   );
// };

// export default Login


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import AuthLayout from "../../components/layouts/AuthLayout";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {updateUser} = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {   
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setError("");

    // Login API CALL
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/dashboard"); // ✅ FIXED TYPO
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="p-6 text-xl lg:w-[70%] md:h-full flex flex-col justify-center">
      <h3 className="font-bold text-xl text-black">Welcome back</h3>

      <p className="text-sm text-slate-700 mt-1 mb-6">
        Please enter your details to login
      </p>

      <form onSubmit={handleLogin}>
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="name@example.com"
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Min 8 Characters"
        />

        {error && (
          <p className="text-red-500 text-sm mt-1 mb-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-lg text-white font-semibold 
          bg-gradient-to-r from-purple-600 to-fuchsia-500 mt-2"
        >
          LOGIN
        </button>

        <p className="text-[13px] text-slate-800 mt-3">
          Don't have an account?{" "}
          <Link className="font-medium text-purple-700 underline" to="/signup">
            SignUp
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
