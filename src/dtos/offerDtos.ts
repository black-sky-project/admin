export interface offerDto {
	id: number;
	mentorId: number;
	courseId: number;
	title: string;
	description: string;
}

export interface postOfferDto {
	mentorId: number;
	courseId: number;
	title: string;
	description: string;
}