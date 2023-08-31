import SHIELD from "./SHIELD";

function SWORD(message, shift) {
    return SHIELD(message, 26 - shift);
  }

export default SWORD;
