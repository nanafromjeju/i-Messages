import { Button } from "@/components/common/ui/button";
import Header from "@/components/layout/Header";
import { Room } from "../../../shared/src/api/types";
import { useChatRooms } from "../../../shared/src/hooks/useChatRooms";

const List = () => {
  const { data, isLoading, isError, error } = useChatRooms();
  console.log({ data });
  const rooms = data?.data;

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
      <Button>Button</Button>
    </div>
  );
};

export default List;
