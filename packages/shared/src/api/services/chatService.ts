import apiClient from "../client";
import { ListResponse, Room } from "../types";

export const chatService = {
  getRooms: async (): Promise<ListResponse<Room[]>> => {
    console.log("getRooms 함수 호출");

    const data = await apiClient.get<ListResponse<Room[]>>("/chat/rooms");
    console.log("API 응답:", data);
    return data;
  },
};
