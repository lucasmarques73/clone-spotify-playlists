export default function userMapper(user) {
  return {
    id: user.id,
    name: user.display_name,
    avatar: user.images[0].url
  }
}
