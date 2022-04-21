import React, { useContext } from 'react'
import { View, Text } from '@react-pdf/renderer'

import styles from '../../../styles'
import { SkillItem } from './left/SkillItem'
import { BuilderContext } from '../../../App'
import Divider from './right/Divider'

export const Left = () => {
  const ctx = useContext(BuilderContext)

  const skills = ctx.getComponentData('Skills')
  const languages = ctx.getComponentData('Languages')
  const specialization = ctx.getComponentData('Specialization')

  return (
    <View style={styles.section__left}>

      <View style={{ marginTop: '10', marginLeft: '10', marginRight: '20', marginBottom: '10' }}>
        <Text
          style={{
            color: '#000',
            fontSize: '15',
          }}
        >
          Skills
        </Text>
        <Divider />
        {skills.items.map((item, index) => (
          <SkillItem key={index} name={item.text} fillSkill={item.level} />
        ))}

      </View>
      <View style={{ marginTop: '10', marginLeft: '10', marginRight: '20', marginBottom: '10' }}>
        <Text
          style={{
            color: '#000',
            fontSize: '15',
          }}
        >
          Languages
        </Text>
        <Divider />
        {languages.items.map((item, index) => (
          <SkillItem key={index} name={item.text} fillSkill={item.level} />
        ))}


      </View>
      <View style={{ marginTop: '10', marginLeft: '10', marginRight: '20', marginBottom: '10' }}>
        <Text
          style={{
            color: '#000',
            fontSize: '15',
          }}
        >
          Specialization
        </Text>
        <Divider />
        {
          specialization.items.map((item, index) => (<>
            <Text key={index} style={{color: '#000', fontSize: '11'}}>{item}</Text>
          </>))
        }
        
      </View>
    </View>
  )
}
