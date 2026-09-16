export type User = {
  id: number;
  started_at: Date;
  daily_pouches: number;
  price_per_can: number;
  pouches_per_can: number;
  user_id: string;
};

export type NewUser = {
  started_at: Date;
  daily_pouches: number;
  price_per_can: number;
  pouches_per_can: number;
  user_id: string;
};
