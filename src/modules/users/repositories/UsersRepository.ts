import { getRepository, Like, Repository } from 'typeorm';
import IUsersDTO from '../dtos/IUsersDTO';
import { Users } from '../infra/typeorm/entities/Users.entities';
import IUsersRepository from './dtos/IUsersRepository';

export default class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<Users>

  constructor() {
    this.ormRepository = getRepository(Users);
  }

  async create({ name }: IUsersDTO): Promise<Users> {
    const createUser = this.ormRepository.create({
      name,
    });

    await this.ormRepository.save(createUser);

    return createUser;
  }

  async findAll(): Promise<Users[]> {
    const allUsers = await this.ormRepository.find();

    return allUsers;
  }

  async findById(id: string): Promise<Users | undefined> {
    const findUserById = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return findUserById;
  }

  async findByName(name: string): Promise<Users[] | undefined> {
    const findUserByName = await this.ormRepository.find({
      name: Like(`%${name}%`),
    });

    return findUserByName;
  }

  async save(users: Users): Promise<Users> {
    return this.ormRepository.save(users);
  }
}
