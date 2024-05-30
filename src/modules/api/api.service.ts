import { Injectable } from '@nestjs/common';
import { CreateMovieDto, UpdateMovieDto } from './dto/movie.dto';
import { Movie } from './dto/movie.dto';

@Injectable()
export class ApiService {
  private movies: Movie[] = [];

  findAll(): Movie[] {
    return this.movies;
  }

  findOne(id: string): Movie {
    return this.movies.find(movie => movie.id === id);
  }

  create(createMovieDto: CreateMovieDto): Movie {
    const newMovie: Movie = {
      id: (this.movies.length + 1).toString(),
      ...createMovieDto,
    };
    this.movies.push(newMovie);
    return newMovie;
  }

  update(id: string, updateMovieDto: UpdateMovieDto): Movie {
    const movieIndex = this.movies.findIndex(movie => movie.id === id);
    if (movieIndex === -1) {
      return null;
    }
    const updatedMovie = { ...this.movies[movieIndex], ...updateMovieDto };
    this.movies[movieIndex] = updatedMovie;
    return updatedMovie;
  }

  remove(id: string): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
}
