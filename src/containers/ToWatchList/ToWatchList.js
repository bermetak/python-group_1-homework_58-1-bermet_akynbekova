import React, {Component, Fragment} from 'react';
import './ToWatchList.css';
import AddMovie from '../../components/AddMovie/AddMovie';
import MovieList from '../../components/MovieList/MovieList';


class ToWatchList extends Component {
    state = {
        movies: [
            {id: 1, name: 'Kiss kiss bang bang'},
            {id: 2, name: 'Gräns'},

        ],
        currentMovie: {name: ''}
    };



    deleteMovie = (id, event) => {
        event.preventDefault()
        let movieId = this.state.movies.findIndex(movie => {
            return movie.id === id;
        });

        const movies = [...this.state.movies];
        movies.splice(movieId, 1);

        this.setState({
            ...this.state,
            movies,
            currentMovie: {name: ''}
        });
    };


    addMovieForm = (event) => {
        event.preventDefault();
        let movie = event.target.value;
        let currentMovie = {
            ...this.state.currentMovie,
            name: movie
        };
        this.setState({
            ...this.state,
            currentMovie
        });
    };

    addMovie = (event) => {
        event.preventDefault();
        let movie = {...this.state.currentMovie};
        const now = new Date();
        movie.id = now.getTime();
        let movies = [...this.state.movies, movie];
        this.setState({
            ...this.state,
            movies,
            currentMovie: {name: ''}
        });
    };



    changeMovie = (id, event) => {
        // const name = event.target.name;
        let value = event.target.value;
        let movieId = this.state.movies.findIndex(movie => {
            return movie.id === id;
        });
        let newMovie = {
            id: id,
            name: value
        };
        let movies = [...this.state.movies];
        movies.splice(movieId, 1, newMovie);

        this.setState({
            ...this.state,
            movies,
            currentMovie: {name: ''}
        });
    };

    render() {
        return (
            <Fragment>


                <AddMovie
                    movie={this.state.currentMovie}
                    onChangeInput={(event) => this.addMovieForm(event)}
                    onAddMovie={(event) => this.addMovie(event)}
                />
                <br/>
                <h4>To watch list:</h4>
                {this.state.movies.map((movie) => {
                    return <div key={movie.id}>
                        <MovieList
                            name={movie.name}

                            onChangeMovie={(event) => this.changeMovie(movie.id, event)}
                            onDeleteMovie={(event) => this.deleteMovie(movie.id, event)}>

                        </MovieList>
                    </div>
                })}

            </Fragment>
        )
    }
}

export default ToWatchList;
