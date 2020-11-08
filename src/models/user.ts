export interface IUser {
  date_joined: string;
  email: string;
  first_name: string;
  id: number;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_name: string;
  user_profile: {
    subscription: 0 | 1;
  };
  username: string;
}
