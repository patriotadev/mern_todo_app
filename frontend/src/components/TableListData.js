import React from 'react'
import {Link} from 'react-router-dom';

const TableListData = ({data, index, handleDelete, handleUpdate}) => {

    const statusDone = data.done === true ? 'text-decoration-line-through' : ''
    const textStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
        <>
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                    <td className={`${statusDone} fst-italic`}>
                        <Link to={`/${data._id}`} key={data._id} style={textStyle}>
                            <span>{data.msg}</span>
                        </Link>
                    </td>
                <td>
                    <span onClick={() => {handleUpdate(data)}} className='me-2 badge bg-primary'>Done</span>
                    <span onClick={() => {handleDelete(data._id)}} className='badge bg-danger'>Delete</span>
                </td>
            </tr>
        </>
    )
}

export default TableListData
