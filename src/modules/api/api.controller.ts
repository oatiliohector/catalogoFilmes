import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateMovieDto, UpdateMovieDto } from './dto/movie.dto';
import { Movie } from './dto/movie.dto';

@Controller('movies')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  findAll(): Movie[] {
    return this.apiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Movie {
    return this.apiService.findOne(id);
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto): Movie {
    return this.apiService.create(createMovieDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto): Movie {
    return this.apiService.update(id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.apiService.remove(id);
  }
}
