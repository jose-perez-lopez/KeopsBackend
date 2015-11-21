var titleToFilename = 'parameter [--title "My title"] not found';
const titlePos = process.argv.indexOf('--title');
const validChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","_","-","0","1","2","3","4","5","6","7","8","9"];
var finalName = titleToFilename;
if(titlePos>0) {
    titleToFilename = process.argv[titlePos+1];
    console.log('ORIGIN: ', titleToFilename);
    titleToFilename = titleToFilename.split(' ');
    titleToFilename = titleToFilename.join('_');
    titleToFilename = titleToFilename.toLowerCase();
    finalName = '';
    for( var charPos in titleToFilename) {
        if ( validChars.find( (char) => titleToFilename.charAt(charPos) === char)) {
            finalName += titleToFilename.charAt(charPos);
        }
    }
}
console.log('OUTPUT: ',finalName);