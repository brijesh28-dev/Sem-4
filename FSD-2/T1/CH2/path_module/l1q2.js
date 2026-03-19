// Most IMP quation 
// !!!!!!!!!!!!!!!!! Notice:- change the path with your pc related !!!!!!!!!!!!!!!!!!!!!!
// 1.from the given exis file path extract the dir name using path module
// 2. create a extra dir in a exgisting folder using fs module
//3.extrat the file name from the given path using path module
//4. create that file inisde the  new creadted dir and write some data in it
//5.copy the contant of this  file  in a new file 
//6. delete the orignal file after

fs = require('fs');
os = require('path');

path ='C:\Users\kachh\OneDrive\Desktop\Sem-4\FSD-2\T1\CH2\path_module\l1q2.js';

p = os.dirname(path);
console.log(p);
fs.mkdir(p + '/newdir', function(err) {
    if (err) throw err;
    console.log('Directory created successfully');
    filename = os.basename(path);
    console.log(filename);


    fs.writeFile(filename, 'Hello content!', function(err) {
        if (err) throw err;
        console.log('File created successfully');

        fs.copyFile(p + '/newdir/' + "sample.txt", p + '/newdir/' + "sample1.txt", (err) => {
            
        });


                fs.unlink(p + '/newdir/' + "sample.txt", function(err) {
                    if (err) throw err;
                    console.log('File deleted successfully');
                });
                
    })
});
