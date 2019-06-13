let hacker1="Dan";
console.log("The driver's name is ", hacker1)
let hacker2="Luiz";
console.log(`The navigator's name is ${hacker2}`)


if(hacker1.length>hacker2.length){
    console.log(`The Driver has sthe longest name, it has ${hacker1.length} characters`)
} else if(hacker1.length<hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
}

let name =[];

for(i=0; i<hacker1.length; i++){
    let letra=hacker1[i].toUpperCase()
    name.push(letra)
}
console.log(name.join(' '))

let name2=[];
for(i=0; i<hacker2.length; i++){
    let letra=hacker2[i];
    name2.unshift(letra)
}
console.log(name2.join(''))
if (hacker1.localeCompare(hacker2) === -1){
    console.log(`The driver's name goes first`)
} else if(hacker1.localeCompare(hacker2)===1){
    console.log(`Yo, the navigator goes first definitely`)
} else {
    console.log(`What?! You both got the same name?`)
}

let frase1=`race car`
let frase2=[]

frase1=frase1.replace(/[\W]/g, '').toLowerCase();

for(i=0; i<frase1.length; i++){
    let letra=frase1[i];
    frase2.unshift(letra)
}

let verdadeiro=true;
for(i=0;i<frase1.length;i++){
    if(frase1[i]!==frase2[i]){
        verdadeiro=false;
        break;
    }
}

if(verdadeiro==true){
    console.log(`This s a Palindrome`)
} else{
    console.log(`This is not a Palindrome`)
}

let paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec nibh neque. Nam dictum lacus vulputate diam venenatis, vitae bibendum elit malesuada. Suspendisse faucibus, eros ac commodo malesuada, turpis metus tincidunt massa, sit amet aliquam velit mi ullamcorper felis. Nullam a feugiat ligula. Curabitur non velit felis. In quis sem rhoncus tortor aliquet scelerisque quis sit amet odio. Nullam eget dignissim eros. In dignissim, diam a pulvinar sodales, turpis ante vulputate nisl, sit amet ultrices neque felis sit amet elit. Aliquam tincidunt tristique pulvinar. Morbi commodo neque sit amet lorem consequat, vitae hendrerit nibh congue. Maecenas a imperdiet arcu, a placerat turpis. Nam eget interdum nisl, ac imperdiet tortor. Aenean lacinia, nulla sed fringilla bibendum, felis justo viverra ante, ac suscipit sem mauris et sapien. Pellentesque dictum, ligula eu consequat sodales, erat ipsum auctor augue, quis iaculis purus lorem eget lectus. Suspendisse non ligula id ante hendrerit luctus ut tincidunt lectus. Nam ultricies viverra neque, ac condimentum diam vehicula non. Donec sed arcu feugiat, sodales massa non, vulputate urna. Integer imperdiet malesuada enim, vitae vehicula felis pretium sit amet. Curabitur ac nibh a nulla semper commodo non in quam. Mauris sed urna eu urna elementum imperdiet in in nunc. Praesent ultrices augue ac felis commodo ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue, enim a dapibus dapibus, eros eros hendrerit tortor, at varius elit mauris sit amet sem. Fusce fringilla eleifend dolor, a lobortis nibh vehicula convallis. Donec rhoncus gravida pulvinar. Sed elementum sagittis orci, et pretium lectus rutrum nec. Integer tincidunt scelerisque venenatis. Proin viverra eget nisi ut sollicitudin. Vestibulum eu nibh nisi. Nullam massa dui, gravida non laoreet sed, finibus a velit. Vestibulum rutrum efficitur purus vel lacinia.'

let words=paragraph.split(" ");
console.log(words.length)

let count=0;
for(i=0; i<words.length; i++){
    if(words[i]===`et`){
        count=count+1;
    }
}

console.log(count)