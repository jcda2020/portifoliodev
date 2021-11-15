import React, {Component} from 'react'
//import Todos from '../clientes/todos'

 export default class Mensagem extends Component { 

constructor(props) {
        super(props)
        this.state = {
            
            stageNew: false
        }
   this.alternaBloqueio = this.alternaBloqueio.bind(this)

}


showSuccess = () => {
     
 return
alert('Sucesso')

    
}

alternaBloqueio =  () => {
if (this.setState({stageNew: !this.state.stageNew})){
this.showSuccess()
}
}



render(){


return (

<button className={'btn btn-primary'}
   onClick={() => this.alternaBloqueio()  }
> <i className={'fa fa-'}>{this.state.stageNew? 'Bloqueado': 'Desbloqueado'}</i> </button>
)
 

 }

 }