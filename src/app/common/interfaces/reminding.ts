import { RemindingStatus } from '../enums';

export interface Reminding {
  id: number,
  shortDescription: string;
  fullDescription: string;
  createDate: Date | null;
  endDate: Date | null;
  status: RemindingStatus;
}
