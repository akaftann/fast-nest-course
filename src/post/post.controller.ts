import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { PostService } from './post.service';


@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService){}

    @Get()
    async getAll(){
        return this.postService.getAll()
    }

    @Post()
    async create(@Body() dto: PostDto){
        return this.postService.create(dto)
    }

    @Get(':id')
    async getById(@Param('id') id: string){
        return this.postService.getById(id)
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.postService.delete(id)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: PostDto){
        return this.postService.update(id, dto)

    }
}
