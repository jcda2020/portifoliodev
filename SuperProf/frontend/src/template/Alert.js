import React from 'react'
import { Button } from 'react-bootstrap'
import Dialog from 'react-bootstrap-dialog'
import DialogAction from 'react-bootstrap-dialog/dist/DialogAction'


export default class SampleCode extends React.Component {
    constructor() {
        super()
        this.onClick = this.onClick.bind(this)
        let isToggleOn
        this.state = {
            isToggleOn: true,
        }

        Dialog.setOptions({

            defaultOkLabel: ' Sim',
            defaultCancelLabel: 'Não',
            primaryClassName: 'btn-success',
            defaultButtonClassName: 'btn-danger',

        })




    }


    changeButton() {

        this.setState({ isToggleOn: !this.state.isToggleOn })
    }


    mensage() {
        if (this.state.isToggleOn) {
            return 'Desbloqueio'

        } else {

            return this.state.isToggleOn ? 'Bloqueada' : 'Desbloqueada'
        }
    }

    //{this.isToggleOn ? 'Bloqueada' : 'Desbloqueada'}
    onClick() {
        this.dialog.show({
            title: 'Escolha uma opção',
            body: 'Deseja desbloquear?',
            actions: [
                Dialog.CancelAction(),
                Dialog.OKAction(() => this.onClick ? this.changeButton() : alert('not'))

            ],
            bsSize: 'small',
            onHide: (dialog) => {
                dialog.hide()
                console.log('closed by clicking background.')
            },

        })

    }

    render() {
        return (
            <div>
                <Button onClick={this.onClick}> {this.mensage()} </Button>
                <Dialog ref={(component) => { this.dialog = component }} />

            </div>
        )
    }
}
