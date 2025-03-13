const { caesarCipher, symbolCipher, reverseCipher } = require('./encryptors.js')

const encodeMessage = (str) => {
    // Use the encryptor functions here.
    const amount = 5;

    // Apply the encryption functions in sequence
    let encodedMessage = caesarCipher(str, amount);
    encodedMessage = symbolCipher(encodedMessage);
    encodedMessage = reverseCipher(encodedMessage);

    return encodedMessage;
};


const decodeMessage = (str) => {
    // Use the encryptor functions here.

}

// User input / output.

const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
        output = encodeMessage(str);
    }
    if (process.argv[2] === 'decode') {
        output = decodeMessage(str);
    }

    process.stdout.write(output + '\n');
    process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);