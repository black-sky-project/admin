enum degree { Bachelor, Master }

export interface UserDto {
	id: number;
	login: string;
	name: string;
}

export interface StudentDto {
	id: number;
	login: string;
	name: string;
	acquiringDegree: degree;
	departmentId: number;
}

export interface MentorDto {
	id: number;
	login: string;
	name: string;
	bio: string;
	departmentId: number;
}

export interface AdminDto {
	id: number;
	login: string;
	name: string;
}

export interface postStudentDto {
	login: string;
	password: string;
	name: string;
	acquiringDegree: degree;
	departmentId: number;
}

export interface postMentorDto {
	login: string;
	password: string;
	name: string;
	bio: string;
	departmentId: number;
}

export interface postAdminDto {
	login: string;
	password: string;
	name: string;
}