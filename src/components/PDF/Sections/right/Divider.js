import { View } from '@react-pdf/renderer'

const Divider = ({top}) => (
  <View
    style={{
      height: '1.5px',
      marginTop: '8px',
      marginBottom: '5px',
      marginLeft: top? '4px': '0px',
      marginRight: top? '8px': '0px',
      width: '100%',
      backgroundColor: '#A13D2D',
    }}
  ></View>
)

export default Divider
