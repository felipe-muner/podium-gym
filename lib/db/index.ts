import { drizzle } from 'drizzle-orm/neon-serverless'
import { neonConfig, Pool } from '@neondatabase/serverless'
import * as schema from './schema'

if (process.env.NODE_ENV === 'production') {
  neonConfig.webSocketConstructor = WebSocket
  neonConfig.poolQueryViaFetch = true
} else {
  neonConfig.wsProxy = (host) => `${host}:5433/v1`
  neonConfig.useSecureWebSocket = false
  neonConfig.pipelineTLS = false
  neonConfig.pipelineConnect = false
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL! })
export const db = drizzle(pool, { schema })