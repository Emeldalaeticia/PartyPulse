import React from 'react'
import user from "../assets/user.jpg"

const UserProfile = ({ toggle }) => {
    return (
      <div className={`flex items-center ${toggle ? "justify-center" : "bg-pink-500 bg-opacity-25 rounded-xl p-2"}`}>
          <div className='min-w-[3.5rem] h-[3.5rem]'>
              <img src={user} 
              alt="User Profile" 
              className='w-full h-full rounded-full object-cover'
              />
          </div>
             
          {!toggle && (
            <div className='w-fit h-fit'>
              <h3 className='text-xl'>Emelda Laeticia</h3>
              <span className='text-[0.75rem] opacity-60'>emeldalaeticia@gmail.com</span>
            </div>
          )}
      </div>
    )
  }
  

export default UserProfile