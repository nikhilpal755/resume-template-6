import React,{useContext} from 'react'
import ProfileName from './ProfileName.js'


import { BuilderContext } from '../../../../App'
import Divider from '../right/Divider.js'
import {Text} from '@react-pdf/renderer'

export default function Top() {
    const ctx = useContext(BuilderContext)
    const profile = ctx.getComponentData('Profile')
    const contact = ctx.getComponentData('Contact')

  return (
    <>

        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row'}}>
            <ProfileName 
             name={profile.name}
             profession={profile.profession}
             />
             <div style={{marginTop: '20px', marginRight: '10'}}>

                {contact.items.map((item, index) => (
                <Text
                    key={index}
                    style={{ fontSize: '12', marginBottom: '8px' }}
                >
                    {item.text}
                </Text>
            ))}
             </div>
        </div>
             <Divider top={true}/>
        
    </>
  )
}
