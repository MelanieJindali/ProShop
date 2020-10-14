import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			// Taking care of Mongoose warnings in console
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		})

		console.log(`MongoDB Connected: ${conn.connection.host}`)
	} catch (error) {
		console.log(`Error: ${error.message}`)
		process.exit(1)
	}
}

export default connectDB
