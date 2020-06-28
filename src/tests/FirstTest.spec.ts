import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()
  user.name = "Teste"

  expect(user.name).toEqual('Teste')
})