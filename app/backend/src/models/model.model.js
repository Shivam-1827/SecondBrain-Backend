const {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable} = require('typeorm');
const User = require('./user.model');
const Tag = require('./tag.model')

@Entity('models')
class Model{
    @PrimaryGeneratedColumn('uuid')
    id;

    @Column({type: 'varchar', length: 256})
    filename;

    @Column({type: 'varchar', length: '500'})
    cloudinaryUrl;

    @Column({type: 'text', nullable: true})
    description;

    @Column({type: 'jsonb', nullable: true})
    metadata;     // for storing metadata from cloudinary or extracted

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'}) 
    uploadedAt;

    @ManyToOne(() => User, user => user.model)
    @JoinColumn({name: 'userId'})
    user;

    @Column({type: 'uuid'})
    userId;

    // for vector search : using pgvector extension 

    @Column({type: 'vector', dimensions: 1536, nullable: true})
    embedding;

    @ManyToMany(() => Tag, tag => tag.model, {cascade: true})
    @JoinTable({
        name: 'model_tags',
        joinColumn: {name: 'assetId', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'tagId', referencedColumnName: 'id'},
    })
    tags;
}

module.exports = Model;
