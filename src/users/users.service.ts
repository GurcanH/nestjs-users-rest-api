// Node Modules ----------------------------------------------------------------
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// My Modules ------------------------------------------------------------------
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { States } from '../enums/state.enum';
import { Experiences } from '../enums/experience.enum';
import dummyData from '../dummy-data';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  // Method for creating a new user.
  async createUser(
    Id: string,
    FirstName: string,
    LastName: string,
    Email: string,
    State: States,
    PetExperience: Experiences,
  ): Promise<User> {
    const user = new User();
    user.Id = Id;
    user.FirstName = FirstName;
    user.LastName = LastName;
    user.Email = Email;
    user.State = State;
    user.PetExperience = PetExperience;

    await user.save();
    return user;
  }

  // Method for creating a dummy data.
  createDummyData(): void {
    dummyData.forEach((item) => {
      this.createUser(
        item.Id,
        item.FirstName,
        item.LastName,
        item.Email,
        item.State,
        item.Experience,
      );
    });
  }

  // Method for fetch the user by id.
  async getUserById(id: string): Promise<User> {
    const found = await this.userRepository.findOne(id);
    if (!found) {
      //if no user found, return an error
      throw new NotFoundException(`User with Id ${id} not found`);
    }
    return found;
  }

  // Method for fetch users by state.
  async getUsersByState(state: string): Promise<User[]> {
    return await this.userRepository.find({ where: { State: state } });
  }

  // Method for fetch users by pet experience.
  async getUsersByExperience(experience: string): Promise<User[]> {
    return await this.userRepository.find({
      where: { PetExperience: experience },
    });
  }

  // Method for fetch users by first name.
  async getUsersByFirstName(firstname: string): Promise<User[]> {
    return await this.userRepository.find({
      where: { FirstName: firstname },
    });
  }

  // Method for fetch users by last name.
  async getUsersByLastName(lastname: string): Promise<User[]> {
    return await this.userRepository.find({
      where: { LastName: lastname },
    });
  }

  // Method for fetch users by email.
  async getUsersByEmail(email: string): Promise<User[]> {
    return await this.userRepository.find({
      where: { Email: email },
    });
  }
}
