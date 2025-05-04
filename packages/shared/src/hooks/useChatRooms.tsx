import { useQuery } from "@tanstack/react-query";
import { chatService } from "../api/services/chatService";
import { ListResponse, Room } from "../api/types";

export const useChatRooms = () => {
  return useQuery<ListResponse<Room[]>>({
    queryKey: ["chat-rooms"],
    queryFn: () => chatService.getRooms(),
    enabled: true,
  });
};
