import { firestore } from 'firebase';

export interface Bet {
  sport: string,
  fk_house: string,
  team1: string,
  team2: string,
  type: string,
  eventDate: firestore.Timestamp,
  createDate: firestore.Timestamp,
  momio: number,
  amount: number,
  profit: number,
  status: number
}
