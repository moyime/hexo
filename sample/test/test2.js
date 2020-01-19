let regex = /a[1-3]{2,5}b/g;
regex.lastIndex; //0
regex.test("a12333b"); //true
regex.lastIndex; //7
regex.test("a12333b"); //false
regex.lastIndex; //0
regex.test("a12333b"); //true