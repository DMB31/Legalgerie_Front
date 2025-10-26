import { checkRole } from './checkRole'
import admin from './admin'
import type { User } from '@/payload-config/payload-types'

describe('checkRole', () => {
  const mockUser = (roles: string[]): User =>
    ({ id: '1', email: 'test@example.com', roles } as unknown as User)

  test('returns true when user admin and role editor', () => {
    const user = mockUser(['admin'])
    const result = checkRole(['admin', 'editor'], user)
    expect(result).toBe(true)
  })

  test('returns true when user editor and role editor', () => {
    const user = mockUser(['editor'])
    const result = checkRole(['admin', 'editor'], user)
    expect(result).toBe(true)
  })

  test('returns true when user admin and role admin', () => {
    const user = mockUser(['admin'])
    const result = checkRole(['admin'], user)
    expect(result).toBe(true)
  })

  test('returns false when user editor and role admin', () => {
    const user = mockUser(['editor'])
    const result = checkRole(['admin'], user)
    expect(result).toBe(false)
  })
})


describe('admin access rule', () => {
  const makeReq = (user?: Partial<User>) => ({ req: { user } } as any)

  test('returns true if user has admin role', () => {
    const result = admin(makeReq({ roles: ['admin'] }))
    expect(result).toBe(true)
  })

  test('returns false if user has no admin role', () => {
    const result = admin(makeReq({ roles: ['editor'] }))
    expect(result).toBe(false)
  })

  test('returns false if user is undefined', () => {
    const result = admin(makeReq(undefined))
    expect(result).toBe(false)
  })
})