import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

const Order = mongoose.model('Order', orderSchema)

export default Order
