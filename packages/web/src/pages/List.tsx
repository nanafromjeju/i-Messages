import CreateButton from '@/components/chat/CreateButton';
import Rooms from '@/components/chat/Rooms';
import Header from '@/components/layout/Header';
import { Room } from '../../../shared/src/api/types';
import { useChatRooms } from '../../../shared/src/hooks/useChatRooms';
import { useCreateRoom } from '../../../shared/src/hooks/useCreateRoom';
import '../../../shared/styles/globals.css';

const List = () => {
  const { data, isLoading, error } = useChatRooms();
  const createRoomMutation = useCreateRoom();

  const rooms: Room[] = data?.data || [];

  const handleCreateRoom = () => {
    createRoomMutation.mutate('');
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <div>
      <Header />
      <Rooms rooms={rooms} />

      <CreateButton onClick={() => {}} />

      {/* <CreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isLoading={createRoomMutation.isPending}
      /> */}
    </div>
  );
};

export default List;
