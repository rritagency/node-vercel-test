const { Pool } = require('pg')

const pool = new Pool({
  connectionString: "postgres://default:YJu1khP0KqmS@ep-old-dust-a4tavg32-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
})