import apiClient from '../client';
import { ListResponse, Room } from '../types';

export const chatService = {
  // 채팅방 불러오기
  getRooms: async (): Promise<ListResponse<Room[]>> => {
    console.log('getRooms 함수 호출');

    const data = await apiClient.get<ListResponse<Room[]>>('/chat/rooms');
    console.log('방 불러오기 응답:', data);
    return data;
  },

  // 채팅방 생성
  createRoom: async (name: string): Promise<Room> => {
    console.log('createRoom 함수 호출');
    const data = await apiClient.post<Room>('/chat/rooms', { name });
    console.log('방 생성 응답', data);
    return data;
  },
};
