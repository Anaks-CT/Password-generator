
// basic password generator
export const generatePassword = ({
    length,
    lowercase,
    uppercase,
    numbers,
    symbols,
  }) => {
    // variable for storing the generated password
    let password = "";

    // variable to add all the characters according to the options
    let chars = "";

    // options
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  
    // adding all the options if selected by the user
    chars += lowercase ? lowercaseChars : "";
    chars += uppercase ? uppercaseChars : "";
    chars += numbers ? numbersChars : "";
    chars += symbols ? symbolsChars : "";
  
    // randomising the password according to the given length by the user
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * chars.length);
      password += chars.substring(random, random + 1);
    }
  
    return password;
  };
  

  // advanced password generator which gurentees all the options given by the user
  export const passwordGenerator = ({
    length,
    lowercase,
    uppercase,
    numbers,
    symbols,
  }) => {

    // variable for storing the generated password
    let password = "";

    // variable to add all the characters according to the options
    let chars = "";

    // options
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  
    // adding all the options if selected by the user
    chars += lowercase ? lowercaseChars : "";
    chars += uppercase ? uppercaseChars : "";
    chars += numbers ? numbersChars : "";
    chars += symbols ? symbolsChars : "";
    
    
    // guaranteeing atleast one of the letter from the given option is in the password
    if (lowercase) password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    if (uppercase) password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    if (numbers) password += numbersChars[Math.floor(Math.random() * numbersChars.length)];
    if (symbols) password += symbolsChars[Math.floor(Math.random() * symbolsChars.length)];
  
    const remainingLength = length - password.length;

    // adding the remaing password 
    for (let i = 0; i < remainingLength; i++) {
      let random = Math.floor(Math.random() * chars.length);
      password += chars.substring(random, random + 1);
    }
    console.log(password)
    return password;
  };