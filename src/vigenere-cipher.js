class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }

//большие буквы 65-90
    encrypt(message, key) {
        this.validate(message, key);
        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = '';
        for (let i = 0, j = 0; i < message.length; i++, j++) {
            if (message.charAt(i).match(/[A-Z]/)) { //только латинский алфавит
                if (j === key.length) {
                    j = 0;
                }
                let newCharCode = message.charCodeAt(i) + key.charCodeAt(j) - 65; // из маленькой сделать большу-65
                while (newCharCode > 90) {
                    newCharCode = newCharCode - 26;
                }
                result += String.fromCharCode(newCharCode);
            } else {
                result += message.charAt(i);
                j--;
            }

        }
        return !this.isDirect ? this.reverse(result) : result;
    }

    decrypt(message, key) {
        this.validate(message, key);
        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = '';
        for (let i = 0, j = 0; i < message.length; i++, j++) {
            if (message.charAt(i).match(/[A-Z]/)) { //зачем проверять? по коду все равно что-то найдется
                if (j === key.length) {
                    j = 0;
                }
                let newCharCode = message.charCodeAt(i) - key.charCodeAt(j) + 26 + 65; // из маленькой сделать большу +26+65
                while (newCharCode > 90) {
                    newCharCode = newCharCode - 26;
                }
                result += String.fromCharCode(newCharCode);
            } else {
                result += message.charAt(i);
                j--;
            }

        }
        return !this.isDirect ? this.reverse(result) : result;
    }


    reverse(result) {
        return result.split('').reverse().join('');
    }

    validate(message, key) {
        if (message === null || key === null || message === undefined || key === undefined) {
            throw new Error('Not valid arguments');
        }
    }
}

module.exports = VigenereCipheringMachine;
