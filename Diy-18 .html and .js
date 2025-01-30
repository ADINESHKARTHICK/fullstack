<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        //Arithmetic Operators
        var a=20;
        var b=10;
        var c=a+b;
        console.log(c);

        var c=a-b;
        console.log(c);

        var c=a*b;
        console.log(c);

        var c=a/b;
        console.log(c);

        var c=a%b;
        console.log(c);

        var d=10;
        var e=d++;
        console.log(e);

        var e=d--;
        console.log(e);

        //Assignment Operators

        var f=10;
        var g=f;
        console.log(g);

        g+=5;
        console.log(g); //g=g+5

        g-=6;
        console.log(g);

        g*=8;
        console.log(g);

        g/=20;
        console.log(g);

        g%=30;
        console.log(g);


    </script>
    <script>
        //comparison operators
        var a=10;
        var b='10';
        if(a==b){
            console.log('Both are equal'); //==>  only checkes the value not checking datatypes
        }
        else{
            console.log('Both are Not equal');
        }

        var c=10;
        var d='10';
        if(c===d){
            console.log('Both are equal'); //==> It checks both datatypes and values datatypes
        }
        else{
            console.log('Both are Not equal');
        }

        var e=10;
        var f='10';
        if(e!=f){
            console.log('Both are Not equal'); 
        }
        else{
            console.log('Both are equal');
        }
    </script>
    <script>
        //logical operators
        //And operator &&
        var a=10;
        var b=20;
        var c=15;
        var d=25;

        if((b>a)&&(c<d)){
            console.log('Everything is fine')
        }
        else{
            console.log('Something is wrong')
        }
        //OR operator ||
        var e=10;
        var f=20;
        var g=15;
        var h=25;

        if((f<e)||(g<h)){
            console.log('Everything is fine')
        }
        else{
            console.log('Something is wrong')
        }
        //not operator
        var i=false;
        if(!i){
            console.log('True'); //It gives the opposite of the value
        }
        else{
            console.log('False');
        }
    </script>
    <script>
        //ternary operator
        //(condition)? <if statement>: <else statement>;
        var a=false;
        a ? console.log('True') : console.log('False'); 
        //type()Operator
        var x=10;
        var y='Bablu';
        var z=false;
        console.log(typeof(x));
        console.log(typeof(y));
        console.log(typeof(z));
    </script>
</head>
<body>
    
</body>
</html>
