import { Room } from '../../../../shared/src/api/types';
import Avatar from '../common/ui/avatar';

interface RoomsProps {
  rooms: Room[] | undefined;
}

const Rooms = ({ rooms }: RoomsProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
      }}
    >
      {rooms && rooms.length > 0 ? (
        rooms.map(room => (
          <div
            key={room.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              padding: '20px',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            {room.avatar ? (
              <img
                alt={room.name}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <Avatar />
            )}

            <span
              style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#222222',
                textAlign: 'center',
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {room.name}
            </span>
          </div>
        ))
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <p style={{ color: '#808085' }}>채팅방이 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default Rooms;
