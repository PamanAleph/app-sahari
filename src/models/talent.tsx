import { UUID } from "crypto";

interface LocationProps{
    id: UUID;
    name: string | null;
    address: string | null;
}

interface RatingProps{
    average: number;
    punctuality:number;
    communication: number
    service_quality:number;
}

interface TalentProps{
    talent_id: UUID;
    talent_name: string;
    description: string;
    location: LocationProps;
    rating: RatingProps;
    occupation: string | null; 
    interested:string | null;
    love_language: string[]
    createdAt: Date;
}

export default TalentProps