export * from './dbConnect'

export const defaultExcludeDb = { __v: 0, createdAt: 0, updatedAt: 0 }
export const defaultSchemaOptions = {
  timestamps: true,
  toJSON: { virtuals: false },
  toObject: { virtuals: false },
  versionKey: false,
}
