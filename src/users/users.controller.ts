// Node Modules ----------------------------------------------------------------
import { Controller, Get, Param, Post, UsePipes } from '@nestjs/common';

// My Modules ------------------------------------------------------------------
import { UsersService } from './users.service';
import { User } from './user.entity';
import { StateValidationPipe } from 'src/pipes/state-validation.pipe';
import { ExperienceValidationPipe } from 'src/pipes/experience-validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  //The route that fetches the User by Id
  @Get('id/:id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }

  //The route that fetches Users by State
  @Get('state/:state')
  //The pipe below checks if the state is valid.
  //If the state  is not valid, return an error
  @UsePipes(StateValidationPipe)
  getUsersByState(@Param('state') state: string): Promise<User[]> {
    return this.usersService.getUsersByState(state);
  }

  //The route that fetches Users by Pet Experience
  @Get('experience/:experience')
  //The pipe below checks if the pet experience is Y or N.
  //If not, return an error
  @UsePipes(ExperienceValidationPipe)
  getUsersByExperience(
    @Param('experience') experience: string,
  ): Promise<User[]> {
    return this.usersService.getUsersByExperience(experience); //
  }

  //The route that fetches Users by First Name
  @Get('firstname/:firstname')
  getUsersByFirstName(@Param('firstname') firstname: string): Promise<User[]> {
    return this.usersService.getUsersByFirstName(firstname);
  }

  //The route that fetches Users by Last Name
  @Get('lastname/:lastname')
  getUsersByLastName(@Param('lastname') lastname: string): Promise<User[]> {
    return this.usersService.getUsersByLastName(lastname);
  }

  //The route that fetches Users by Email
  @Get('email/:email')
  getUsersByEmail(@Param('email') email: string): Promise<User[]> {
    return this.usersService.getUsersByEmail(email);
  }

  //////////////////////////////////////////////////////////////////////////
  //The route that creates dummy data.                               ///////
  // This can be called multiple times because Id is a primary column. ////
  /////////////////////////////////////////////////////////////////////////
  @Post('createdummydata')
  createdummydata() {
    this.usersService.createDummyData();
  }
}
