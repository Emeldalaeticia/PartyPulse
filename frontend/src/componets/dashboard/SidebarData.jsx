/* eslint-disable react/jsx-key */
import React from 'react'
import { datas } from './Data'
const SidebarData = ({ toggle }) => {
  return (
    <>
        <div className=''>
            {datas.map(data=> {
                return(
                    <div className=''>
                        <div className=''>{data.icon}</div>
                        <div className=''>{data.text}</div>
                    </div>
                )
        })}
        </div>
    </>
  )
}

export default SidebarData