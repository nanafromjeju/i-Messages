export const ROUTES = {
  HOME: "/",
  CHAT_ROOM: "/chat/:roomId",
  chatRoomPath: (roomId: string) => `/chat/${roomId}`,
};
