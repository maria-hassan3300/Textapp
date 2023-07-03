import React from 'react'

export default function Alert(props) {
  const firstlettercapital=(letter)=>{
     const lower =  letter.toLowerCase();
     return lower.charAt(0).toUpperCase() + lower.slice(1);

  }
  return (
   props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{firstlettercapital(props.alert.type)}</strong> {props.alert.text}
  
</div>

  )
}
