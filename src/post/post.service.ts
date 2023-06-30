import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { InjectRepository} from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import {Repository} from 'typeorm'

@Injectable()
export class PostService {
    constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>){
    }

    async getAll(){
        return this.postRepository.find()
    }

    async create(dto: PostDto){
        const post =  this.postRepository.create(dto)
        return this.postRepository.save(post)

    }

    async getById(id: string){
        return this.postRepository.findOne({
            where: {
                id: Number(id)
            }
        })
    }

    async delete(id: string){
        return this.postRepository.delete({id: Number(id)})
    }

    async update(id: string, dto: PostDto){
        const post = await this.getById(id)
        post.content = dto.content
        return this.postRepository.save(post)

    }
}
