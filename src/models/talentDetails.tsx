import { UUID } from "crypto"; 

interface LocationProps {
  address: string | null;
  subdistrict: string;
  district: string;
  city: string;
  province: string;
  country: string;
}

interface RatingProps {
  average: number;
  punctuality: number | null;
  communication: number | null;
  service_quality: number | null;
}

interface TalentDetailsProps {
  talent_id: UUID; 
  user_id: UUID ;   
  talent_name: string;
  date_of_birth: Date;     
  gender: "Male" | "Female";
  photo_profile: string ;
  banner: string;
  description: string;
  location: LocationProps;
  open_location?: string | null; 
  rating: RatingProps;
  occupation: string | null;
  interested: string[];
  love_language: string[];
  createdAt: Date;          
}

export default TalentDetailsProps;
