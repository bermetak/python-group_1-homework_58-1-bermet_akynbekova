import React, {Component} from 'react';
import './MovieList.css';


class MovieList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Post] ShouldUpdate');
        return nextProps.name !== this.props.name
    }

    render() {
        return (
            <div className={"task row mt-3 border border-primary rounded w-50 ml-auto mr-auto p-2"}>
                <div className={'col'}>
                    <input type="text" name="name" value={this.props.name} onChange={this.props.onChangeMovie}/>

                </div>
                <div className={'row col'}>

                    <div className={'col'}>
                        <button onClick={this.props.onDeleteMovie}>
                            <i className="far fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default MovieList