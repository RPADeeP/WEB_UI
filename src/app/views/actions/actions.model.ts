import { Steps } from '../bpm/bpm.model';
export class Actions {
    name:string;
    description: string;
    steps: Steps[];
    status: string;
    companyToken: string;
    id: string;
}