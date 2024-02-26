export interface Player {
  id: number;
  name: string;
  password: string;
  wins: number;
}

export interface RoomUser {
  name: string;
  index: number;
}

export interface Winner {
  name: string;
  wins: number;
}

export interface Room {
  roomId: number;
  roomUsers: RoomUser[];
}

export interface Game {
  gameId: number;
  ships: Sheep[];
  indexPlayer: number;
}

export interface Sheep {
  position: {
    x: number;
    y: number;
  };
  direction: boolean;
  length: number;
  type: "small" | "medium" | "large" | "huge";
}

export const rooms: Room[] = [];
export const players: Player[] = [];
export const roomPlayers: RoomUser[] = [];
export const winners: Winner[] = [];
