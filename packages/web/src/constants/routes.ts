export const ROUTES = {
  SIGN_IN: "/",
  LIST: "/list",
  CHAT: "/list/chat",
  chatRoomPath: (roomId: string) => `/chat/${roomId}`,
};
