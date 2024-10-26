import { UUID } from "crypto";

interface LocationProps {
    address: string | null;
    subdistrict: string;
    district: string;
    city: string;
    province: string;
    country: string;
  }
  
  interface TalentProps {
    photo_profile: string | null;
    talent_id: UUID;
    talent_name: string;
    user_id: UUID;
    location: LocationProps[]; // Change to an array of LocationProps
    date_of_birth: Date;
    occupation: string | null;
    createdAt: Date;
    gender: string;
  }
  
  export default TalentProps;
  