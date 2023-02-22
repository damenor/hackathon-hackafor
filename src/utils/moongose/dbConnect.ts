/* This is a database connection function*/
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiHandler, ApiHandlerMethods } from '@damenor/tools-nextjs'

const connection = { isConnected: false }

export const dbConnect = async () => {
  if (connection.isConnected) return
  const dbUri = process.env.DATABASE_URL || ''
  mongoose.set('strictQuery', false)
  const db = await mongoose.connect(dbUri)
  connection.isConnected = !!db.connections[0].readyState
}

export const apiHandlerWithDB = (methods: ApiHandlerMethods) => async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()
  return apiHandler(methods)(req, res)
}
