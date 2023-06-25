import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema(
	{
		user: {
			type: String,
			ref: 'User',
			required: true
		},
		orderItems: [
			{
				name: {
					type: String,
					required: [ true, 'Product name is required' ]
				},
				price: {
					type: Number,
					required: [ true, 'Price is required' ]
				},
				amount:{
					type: Number,
					required: [ true, 'Amount is required' ]
				},
				quantity:{
					type: Number,
					required: [ true, 'Amount is required' ]
				},
				total:{
					type: Number,
					required: [ true, 'Total is required' ]
				},
                image: {
                    type: [String],
                    required:[true,'Image is required']
                },
				featured: {
					type: Boolean,
					default: false
				},
				discount: {
					type: Number,
					default: 0
				},
				category: {
					type: [ String ],
					required: [ true, 'Please select at least one category.' ],
					enum: {
						values: [
							'men',
							'women',
							'jacket',
							'jogger',
							'leggings',
							'shirt',
							'hoodie',
							't-shirt',
							'sleeveless',
							'pant',
							'shorts',
							'shoes',
							'coat',
							'sweater',
							'hat',
							'sweatshirt',
							'top',
							'bag'
						],
						message: '{VALUE} is not supported'
					}
				}
			}
		],
		shippingAddress: {
			fullName: { type: String, required: true },
			address: { type: String, required: true },
			city: { type: String, required: true },
			postalCode: { type: Number, required: true },
			country: { type: String, required: true }
		},
		paymentMethod: { type: String, required: true },
		shippingPrice: { type: Number, required: true },
		totalPrice: { type: Number, required: true }
	},
	{
		timestamps: true
	}
);

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
