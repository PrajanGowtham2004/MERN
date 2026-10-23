import withAction from './hoc/WithAction'
import MyButton from './components/MyButton'


const AlertButton = withAction(MyButton,"alert")
const TextButton = withAction(MyButton,"")

const App = () => {


  return (
    <>
    
    
    </>
  )
}

export default App