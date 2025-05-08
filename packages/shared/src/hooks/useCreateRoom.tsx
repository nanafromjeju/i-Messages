import { useMutation, useQueryClient } from '@tanstack/react-query';
import { chatService } from '../api/services/chatService';
import { Room } from '../api/types';

export const useCreateRoom = () => {
  const queryClient = useQueryClient();

  return useMutation<Room, Error, string>({
    mutationFn: (name: string) => chatService.createRoom(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chat-rooms'] });
    },
  });
};
