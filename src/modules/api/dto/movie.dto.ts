export class CreateMovieDto {
    title: string;
    description: string;
    director: string;
    releaseDate: string;
}

export class UpdateMovieDto {
    title?: string;
    description?: string;
    director?: string;
    releaseDate?: string;
}


export class Movie {
    id: string;
    title: string;
    description: string;
    director: string;
    releaseDate: string;
}
