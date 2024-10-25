/**
 * Formats a date string or Date object to "MM/DD/YYYY".
 * @param date - The date to format.
 * @returns Formatted date string in "MM/DD/YYYY" format.
 */
export const formatDateMMDDYYYY = (date: string | Date): string => {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0'); // getMonth is zero-based
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
  
    return `${month}/${day}/${year}`;
  };

  