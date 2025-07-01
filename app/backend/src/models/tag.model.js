const {Entity, PrimaryGeneratedColumn, Column, ManyToMany} = require('typeorm');
const Model = require('./model.model');

@Entity('tags')
class Tag{
    @PrimaryGeneratedColumn('uuid')
    id;

    @Column({type: 'varchar', length: 50, unique: true, nullable: false})
    name;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    updatedAt;

    // defining many to many relationship with the model
    // 'tags' is the property in the model that refers back to tag
    @ManyToMany(() => Model,  model => model.tags)
    models;
}

module.exports = Tag;