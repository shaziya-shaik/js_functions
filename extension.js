
//program  to get file extension

function extnExtractor(a){

    
    if (a.indexOf(".") !== -1) {
        var exfilename=a.split('.').pop();
        return exfilename
    }
        return false
    
}

console.log(extnExtractor('resume.doc'));

console.log(extnExtractor('bangalor.txt'));

console.log(extnExtractor('notpad'));