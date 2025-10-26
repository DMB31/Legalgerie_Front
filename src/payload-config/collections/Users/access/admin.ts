import type { Access } from 'payload'
import { checkRole } from './checkRole'

const admin: Access = ({ req: { user } }) => {
  if (user) {
    return checkRole(['admin'], user)
  }
  return false
}

export default admin
