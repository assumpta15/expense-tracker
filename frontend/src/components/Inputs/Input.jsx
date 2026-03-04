//import e from "cors";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"

const Input = ({ label, type = "text", value, onChange, placeholder }) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () =>{
        setPassword(!showPassword);
    };





  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="text-sm mb-1 text-gray-700 font-medium">{label}</label>
      )}


      <div className="input-box">
      <input
        type={type == "password" ? showPassword ? 'text' : 'password' : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border rounded-lg border-gray-300 outline-none 
                   focus:ring-2 focus:ring-purple-600"
      />

     {type === "password" && (
        <>
        {showPassword ? (
            <FaRegEye
            size={22}
            className="text-primary cursor-pointer"
            onClick={()=> toggleShowPassword()}
            />
        ): (
        <FaRegEyeSlash
            size={22}
            className="text-slate-400 cursor-pointer"
            onClick={()=>toggleShowPassword()}
            />
        )}
        </>
     )} 
    </div>
</div>
  
  );
  
  
};

export default Input;
