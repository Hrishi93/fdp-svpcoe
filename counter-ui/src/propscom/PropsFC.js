import React from 'react'

export default function PropsFC(props) {
  return (
    <div>
      <p>Trainer Name : {props.fname}</p>
      <p>Program : {props.program}</p>
    </div>
  )
}
