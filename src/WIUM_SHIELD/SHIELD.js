function SHIELD(message, shift) {
    return message
      .split('')
      .map(char => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const isUpperCase = char === char.toUpperCase();
          const shiftAmount = isUpperCase ? 65 : 97;
          return String.fromCharCode(((code - shiftAmount + shift) % 26) + shiftAmount);
        }
        return char;
      })
      .join('');
  }

export default SHIELD;


// Fungsi untuk mendekripsi pesan yang dienkripsi menggunakan Caesar Cipher
// function caesarDecrypt(encryptedMessage, shift) {
//   return caesarEncrypt(encryptedMessage, 26 - shift); // Decryption is shifting in reverse
// }