import db from 'debug'
import { name } from '../package'

export const debug = db(name)
export default debug
