import db from 'debug'
import { appName } from 'config'

export const debug = db(appName)
export default debug
