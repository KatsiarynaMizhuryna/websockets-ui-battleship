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

export interface Room {
  roomId: number;
  roomPlayers: RoomUser[];
}

export const rooms: Room[] = [];
export const players: Player[] = [];
export const roomPlayers: RoomUser[] = [];
