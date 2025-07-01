const {Entity, PrimaryGeneratedColumn, Column, OneToMany} = require('typeorm');
const Model =  require('./model.model');

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id;

    @Column({type: 'varchar', length: 255, unique: true, nullable: false})
    email;

    @Column({type: 'varchar', length: 255, nullable: false})
    password;

    @Column({type: 'varchar', length: 100, nullable: false})
    firstName;

    @Column({type: 'varchar', length: 100, nullable: false})
    lastName;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'}) createdAt;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    updatedAt;

    // defining one to Many relationship with the model
    @OneToMany(() => Model, model => model.user)
    models;
}

module.exports = User;