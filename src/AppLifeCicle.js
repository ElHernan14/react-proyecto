import logo from './logo.svg';
import './App.css';
import { useState, useEffect, Component } from "react"

/**Manejando Eventos con State */
function AppClassComponent() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const handleEmailChange = ({target: {value}}) => setEmail(value)
    const handlePasswordChange = ({target: {value}}) => setPassword(value)
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      alert("Usuario: "+email+" , Pass: "+password)
    }
  
    return (
      <div className="App">
        <form onSubmit={handleFormSubmit}>
          <h2>Iniciar Sesión</h2>
          <label>
            Correo
            <input type="email" value={email} onChange={handleEmailChange}/>
          </label>
          <label>
            Contraseña
            <input type="password" value={password} onChange={handlePasswordChange}/>
          </label>
          <button type='submit'>Enter</button>
        </form>
      </div>
    );
  }
  
  /**Componente funcional con useEffect */
  const AppFunctionComponent = () =>{
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const jsonData = [
      {
        name: "Carlos",
        lastName: "Perez" 
      },
      {
        name: "Milian",
        lastName: "Caceres" 
      },
      {
        name: "Tomas",
        lastName: "Papu" 
      },
      {
        name: "Hernan",
        lastName: "Lord" 
      },
    ]
  
    /**componentDidUpdate */
    useEffect(() =>{
      console.log("DidUpdate Effect");
    });
  
      /**componentDidMount */
    useEffect(() =>{
      console.log("componentDidMount");
    },[]);
  
    useEffect(() =>{
      console.log("Name Cambio");
    },[name]);
  
  
    /**render jsonData */
    useEffect(() =>{
      setTimeout(() => {
        setIsLoading(false)
      }, 4000);
    },[])
    const renderJson = () =>{
      if(!isLoading){
        return jsonData?.map((value, index) =>(
          <div key={value.lastName}>
            <p>{value.name}</p>
          </div>
        ))
      }else{
        return <h2>Is Loading...</h2>
      }
    }
  
    return (
      <div>
        <input value={name} onChange={({target:{value}}) => setName(value)}/>
        <br/><br/>
        <input value={age} onChange={({target:{value}}) => setAge(value)}/>
        <div>
          {renderJson()}
        </div>
      </div>
    ) 
  }

class AppLifeCicle extends Component{
    constructor(props){
        super(props);
        console.log("Constructor")
        this.state = {
            name : ""
        }
    }

    componentDidMount(){
        console.log("Did Mount")
    }

    componentDidUpdate(){
        console.log("Did Update")
    }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
    }

    render() {
        return(
            <div>
                <input value={this.state.name} onChange={({target:{value}}) => this.setState({name: value})}/>
            </div>
        );
    }
}

export default AppLifeCicle;