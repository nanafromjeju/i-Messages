export const ROUTES = {
  SIGN_IN: "/",
  LIST: "/list",
  CHAT: "/list/chat/:roomId",
  chatRoomPath: (roomId: string) => `/chat/${roomId}`,
};
