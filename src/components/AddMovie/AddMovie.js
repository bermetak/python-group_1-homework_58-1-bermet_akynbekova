import React, { Component } from 'react';
import './AddMovie.css';


function AddMovie(props) {

    return (
        <div className={"addtaskform"}>
            <form className={'d-inline'}>
                <input
                    type="text"
                    value={props.movie.name}
                    onChange={props.onChangeInput}
                />
            </form>
            <div className={'d-inline'}>
                <button onClick={props.onAddMovie}>
                    Add
                </button>
            </div>
        </div>
    )
}


export default AddMovie