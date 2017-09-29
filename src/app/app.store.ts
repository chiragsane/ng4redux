import { Campaign } from './models/campaign';
import { User } from './models/user';

export interface AppStore {
    campaigns: Campaign[];
    user: User;
}
