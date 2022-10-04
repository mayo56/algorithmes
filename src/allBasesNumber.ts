/**
 * Fonction qui convertie un nombre binaire en nombre décimal
 * @param input {string} est la chaine de caractère contenant le nombre en binaire
 * @return  {string} le nombre converti en décimal
 */
export function binaryToDecimal(input: string): string {
    if (!(/^[0-1]{1,8}$/g).test(input)) throw new Error(input + " is not a binary number.");
    let binary = [...input].reverse();
    let theNumber = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
            theNumber += (2 ** i);
        };
    };
    return theNumber.toString();
};

/**
 * Fonction qui convertie un nombre décimal en nombre binaire
 * @param input {string} est la chaine de caractère contenant le nombre décimal
 * @return {string} le nombre converti en binaire
 */
export function decimalToBinary(input: string): string {
    if (isNaN(Number(input))) throw new Error(input + " is not a decimal number.");
    let e = 0;
    let NumberInput = Number(input);
    while (NumberInput > (2 ** e)) {
        e += 1;
    };
    let theBinaryNumber = "";
    for (let i = e; i > -1; i--) {
        if (NumberInput >= 2 ** i) {
            theBinaryNumber += "1";
            NumberInput -= 2 ** i;
        } else {
            theBinaryNumber += '0';
        };
    };
    return Number(theBinaryNumber).toString();
};

/**
 * Fonction qui convertie un nombre hexadécimal en nombre décimal
 * @param input {string} est la chaine de caractère contenant le nombre hexadécimal
 * @return {string} le nombre converti en décimal
 */
export function hexToDecimal(input: string): string | void {
    if (!(/^[0-9A-Fa-f]+$/g).test(input)) throw new Error(input + " is not an hex number.");
    let hex = [...input].reverse();
    let theNumber = 0;
    const hexdecimalLetter = ["a", "b", "c", "d", "e", "f"];
    for (let i = 0; i < hex.length; i++) {
        if (hexdecimalLetter.includes(hex[i].toLocaleLowerCase())) {
            theNumber += (10+ hexdecimalLetter.findIndex(e => e === hex[i].toLocaleLowerCase())) * (16**i);
        }else {
            console.log(hex[i], "not a letter");
            theNumber += Number(hex[i]) * (16**i);
        };
    };
    return theNumber.toString();
};