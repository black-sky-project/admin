import userClient from "../Api.ts";
import {postOfferDto} from "../dtos/offerDtos.ts";

export const getOffers = async() => {
	const response = await userClient.get('/api/v1/offers/get/list');
	return response.data;
}

export const postOffer = async(offerData: postOfferDto) => {
	const response = await userClient.post('/api/v1/offers/delete', offerData);
	return response.data;
}

export const deleteOffer = async(id: number) => {
	const response = await userClient.delete('/api/v1/offers/delete', {
		params: {
			id: id,
		}
	});
	return response.data;
}