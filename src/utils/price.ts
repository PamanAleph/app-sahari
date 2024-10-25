// src/utils/formatNumber.ts

/**
 * Format angka ke dalam format Rupiah
 * @param {number} value - Angka yang akan diformat
 * @param {string} currency - Kode mata uang, default "IDR" untuk Rupiah
 * @param {string} locale - Locale yang digunakan, default "id-ID" untuk Indonesia
 * @returns {string} - Angka yang sudah diformat
 */
export function formatCurrency(value: number, currency: string = "IDR", locale: string = "id-ID"): string {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 0, // Tidak menampilkan desimal
      maximumFractionDigits: 0, // Tidak menampilkan desimal
    }).format(value);
  }
  
  /**
   * Format angka dengan koma sebagai pemisah ribuan
   * @param {number} value - Angka yang akan diformat
   * @returns {string} - Angka yang sudah diformat dengan pemisah ribuan
   */
  export function formatNumberWithComma(value: number): string {
    return new Intl.NumberFormat("en-US").format(value);
  }
  
  /**
   * Format angka dengan titik sebagai pemisah ribuan
   * @param {number} value - Angka yang akan diformat
   * @returns {string} - Angka yang sudah diformat dengan pemisah ribuan
   */
  export function formatNumberWithDot(value: number): string {
    return new Intl.NumberFormat("de-DE").format(value);
  }
  