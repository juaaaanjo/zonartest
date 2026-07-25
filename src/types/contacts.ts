export interface RamdomUserApi {
  login?: { uuid?: string };
  name?: { first?: string; last?: string };
  email?: string;
  picture?: { thumbnail?: string };
}

export interface RamdomUserApiResponse {
  results?: RamdomUserApi[];
}

export interface contact {
  id?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  thumbnail?: string;
}
