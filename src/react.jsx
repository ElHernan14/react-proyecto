/*Componente Div padre */
<div id="root"></div>

/** componentes funcionales y No funcionales^*/
class Welcome extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name : 'Juan',
            lastname : 'Pepe'
        };
    }

    /**Metodo propio */
    getFullName(){
        const {name,lastname} = this.state;
        const owner = "Hernán Constante";
        return name +' '+ lastname +' soy '+ owner;
    }

    handleClick(){
        this.setState(prevState => ({
            isToogleOn : !prevState.isToogleOn
        }));
    }

    render(){
        return(
            <div>
                <div>
                    Hola {this.getFullName()}
                </div>
                <button onClick={this.handleClick}>
                    {this.state.isToogleOn ? "ON": "OFF"}
                </button>
            </div>
        )
    }
}

function HelloProps(props){
    return <h1>Hello, {props.name}</h1>
}
function Hello({name, lastname}){
    return <h1>Hello, {name}{lastname}</h1>
}

function App(){
    const props = {
        name: "Charles",
        lastname: "Xavier"
    }
    return(
        <div>
            <Hello name="Sara" lastname="Cahill"/>
            <HelloProps {...props}/>
            <Welcome/>
        </div>
    )
}
 /**renderizado de componentes en Div padre */
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

/**useState */
import {useState} from 'react';

function MyComponent(){
    const [name, setName] = React.useState("Juan");
    const [lastname, setLastName] = React.useState("Jose");

    const getFullName = () =>{
        const {name,lastname} = this.state;
        const owner = "Hernán Constante";
        return name +' '+ lastname +' soy '+ owner;
    } 

    return(
        <div>{'Hola'+getFullName()}</div>
    );
}

const [name, setName] = useState("Juan Ortiz");
setName("OtroNombre")
