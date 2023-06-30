import {Column, PrimaryGeneratedColumn, Entity } from 'typeorm'

@Entity({name: 'Post'})
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    content: string

    @Column()
    userName: string

}