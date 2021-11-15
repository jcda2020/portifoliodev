import React, {useState} from "react";
import IconButton from '../template/iconButton'



export default props => {


    const renderRows = () => {
    const list = props.list || []
        return list.map(todo => (        

            <tr key={todo.id}>
                  
                <td >{todo.id}</td>
                <td >{todo.item}</td>
                <td >{todo.QTD}</td>
                <td >{todo.ValorUnitario}</td>
                <td >{todo.Volumes}</td>
                <td >{todo.VLItem}</td>
                <td>
 
              <IconButton style='success' ></IconButton>
                   

                </td>

            </tr>
        ))
    }

    return (

 

        <table className='table'>
        <div className='table-wrapper'>
            <thead>


  
                <tr>
                    <th>ID</th>
                    <th>Item</th>
                    <th>QTD</th>
                    <th>Valor Unitário</th>
                    <th>Volumes</th>
                    <th>Valor Item</th>
                    <th className='tableActions'>Ações</th>

                </tr>


            </thead>

            <tbody>

                {renderRows()}
            </tbody>
</div>

        </table>

    )


}