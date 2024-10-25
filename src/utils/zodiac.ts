const zodiacSigns = [
    { name: "Capricorn", start: 1222 }, // December 22
    { name: "Aquarius", start: 120 },   // January 20
    { name: "Pisces", start: 219 },     // February 19
    { name: "Aries", start: 321 },      // March 21
    { name: "Taurus", start: 420 },     // April 20
    { name: "Gemini", start: 521 },     // May 21
    { name: "Cancer", start: 621 },     // June 21
    { name: "Leo", start: 723 },        // July 23
    { name: "Virgo", start: 823 },      // August 23
    { name: "Libra", start: 923 },      // September 23
    { name: "Scorpio", start: 1023 },   // October 23
    { name: "Sagittarius", start: 1122 } // November 22
  ];
  
  /**
   * Determines the zodiac sign based on the given birth date.
   * @param date - The date of birth as a string or Date object.
   * @returns Zodiac sign as a string.
   */
  export const getZodiacSign = (date: string | Date): string => {
    const birthDate = new Date(date);
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1; 
  
    const dateValue = month * 100 + day;
  
    for (let i = zodiacSigns.length - 1; i >= 0; i--) {
      if (dateValue >= zodiacSigns[i].start) {
        return zodiacSigns[i].name;
      }
    }
  
    return "Capricorn";
  };
  