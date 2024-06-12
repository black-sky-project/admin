import axios from "axios";
import {LoginDto} from "../dtos/authDtos.ts";

export const login = async (loginData: LoginDto) => {
	const response = await axios.post('/api/v1/auth/login', loginData);
	return response.data;
}

