import { Text, View } from '@react-pdf/renderer'
import styles from '../../../../styles'
import Divider from './Divider'

const About = ({ text }) => (
  <View>
    <Text
      style={{
        color: '#000',
        fontSize: '15',
      }}
    >
      Objective
    </Text>
    <Divider />
    <Text style={styles.main__text}>{text}</Text>
  </View>
)
export default About
