import React from 'react'

const InputField = ({handleInput, handleSubmit, todos}) => {
    return (
        <>
            <div className='section mt-5'>
                <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input onChange={handleInput} value={todos} type="text" className="form-control" placeholder="Add Todo's ?"/>
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
                </div> 
                </form>
            </div>
        </>
    )
}

export default InputField