import { User } from '@/users/entities/user.entity/user.entity';

describe('UserEntity', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
