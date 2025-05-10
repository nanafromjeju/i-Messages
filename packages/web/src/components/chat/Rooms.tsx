import { Room } from '../../../../shared/src/api/types';

interface RoomsProps {
  rooms: Room[] | undefined;
}

const Rooms = ({ rooms }: RoomsProps) => {
  return (
    <div>
      {rooms && rooms.length > 0 ? (
        <ul>
          {rooms.map(room => (
            <li key={room.id}>{room.name}</li>
          ))}
        </ul>
      ) : (
        <p>채팅방이 없습니다.</p>
      )}
    </div>
  );
};

export default Rooms;
