// Node Modules ----------------------------------------------------------------
import { EntityRepository, Repository } from 'typeorm';

// My Modules ------------------------------------------------------------------
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
