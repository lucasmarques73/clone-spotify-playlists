import mapper from './userMapper'
import { data } from './userMapper.fixture'
describe('userMapper', () => {
  it('should return mapped user', () => {
    const userMapped = {
      id: 'zaaph0d',
      name: 'Lucas Marques',
      avatar: 'https://i.scdn.co/image/ab6775700000ee8526ffcea6b58e482f02aa5ffa'
    }

    expect(mapper(data)).toStrictEqual(userMapped)
  })
})
