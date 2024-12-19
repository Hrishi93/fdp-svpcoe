import React from 'react'

export default function UserForm() {
  return (
    <div>
        <form>
                <label>Name:</label>
                <input type="text" name="name" />
                <br/>
                <label>Mail ID</label>
                <input type="email" name="email" />
                <br/>
                <label>Age :</label>
                <input type="number" name="age" />
                <br/>
                <button type='submit'>Submit</button>
        </form> 
        <div>
            <h2>Registration Details</h2>
            <p>Student Name : </p>
            <p>Student Mail ID : </p>
            <p>Student Age : </p>
        </div>
    </div>
  )
}
