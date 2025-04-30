export const ROUTES = {
  SIGN_IN: "/",
  HOME: "/home",
  CHAT_ROOM: "/home/chat/:roomId",
  chatRoomPath: (roomId: string) => `/chat/${roomId}`,
};
