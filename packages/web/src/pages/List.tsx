import { Button } from '@/components/common/ui/button';
import Header from '@/components/layout/Header';
import { useState } from 'react';
import { Room } from '../../../shared/src/api/types';
import { useChatRooms } from '../../../shared/src/hooks/useChatRooms';
import { useCreateRoom } from '../../../shared/src/hooks/useCreateRoom';
import '../../../shared/styles/globals.css';

const List = () => {
  const { data } = useChatRooms();
  const [roomName] = useState('new');
  const createRoomMutation = useCreateRoom();

  const rooms = data?.data;

  const handleCreateRoom = () => {
    createRoomMutation.mutate(roomName);
  };

  return (
    <div>
      <Header />
      <div>
        {rooms && rooms.length > 0 ? (
          <ul>
            {rooms.map((room: Room) => (
              <li key={room.id}>{room.name}</li>
            ))}
          </ul>
        ) : (
          <p>채팅방이 없습니다.</p>
        )}
      </div>

      <Button onClick={handleCreateRoom} disabled={createRoomMutation.isPending}>
        {createRoomMutation.isPending ? '생성 중...' : '채팅방 생성'}
      </Button>
    </div>
  );
};

export default List;
