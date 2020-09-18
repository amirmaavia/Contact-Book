import  {useState} from 'react'

const Inputhooks = (val) => {
    const [state, setState] = useState(val)
    const Changehandler = (e) =>{
e.preventDefault()

setState(e.target.value)
    }
    const clear = () => {
setState('')
    }
    return [state, Changehandler, clear ]
}

export default Inputhooks
