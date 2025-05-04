declare module 'sockjs-client' {
  export default class SockJS {
    constructor(url: string, _reserved?, options?);
    close(code?: number, reason?: string): void;
    send(data: string): void;
    onopen: () => void;
    onclose: (event) => void;
    onmessage: (event: { data: string }) => void;
    onerror: (error) => void;
  }
}
