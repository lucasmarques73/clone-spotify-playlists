import mapper from './userMapper'
describe('userMapper', () => {
  it('should return mapped user', () => {
    const user = { id: 1, display_name: 'name', images: [{ url: 'avatar' }] }
    const userMapped = { id: 1, name: 'name', avatar: 'avatar' }

    expect(mapper(user)).toStrictEqual(userMapped)
  })
})
