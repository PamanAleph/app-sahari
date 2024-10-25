import { UUID } from "crypto";

interface LocationProps{
    address: string;
    subdistrict: string;
    district: string;
    city: string;
    province: string;
    country: string;
}

interface TalentProps{
    photo_profile: string ;
    talent_id: UUID;
    talent_name: string;
    user_id: UUID;
    location: LocationProps[];
    date_of_birth: Date;
    occupation: string | null; 
    createdAt: Date;
    gender: string
}

export default TalentProps