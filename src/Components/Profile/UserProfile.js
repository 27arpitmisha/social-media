import { Button } from '@mui/material'
import React from 'react'

export default function UserProfile({ profileDetail, isSelf }) {
  console.log(profileDetail)
  return (
    <div>
      {isSelf ? <h2>This is your profile, Welcome : {profileDetail.name}</h2> : <div> <h2>This is {profileDetail.name} 's profile</h2>
        <Button variant='contained' >Add Friend</Button> </div>}
    </div>
  )
}
