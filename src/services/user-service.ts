import apiClient from './api-client';

export interface User {
  id: number;
  name: string;
}

class UserService {
	getAllUsers() {
		    const controller = new AbortController();
		    const request = apiClient.get<User[]>("/users", {
		    	signal: controller.signal,
		    });
		    return { request, cancel: () => controller.abort()}
	}

	deleteUser(userId) {
		return apiClient.delete("/users/" + userId)
	}
}


export default new UserService();