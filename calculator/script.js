const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');
const n0 = document.getElementById('n0');
const dec = document.getElementById('dec');
const bracO =document.getElementById('bracOpen');
const bracC =document.getElementById('bracClose');
const plus =document.getElementById('plus');
const equal = document.getElementById('equal');
var textBox = document.getElementById('textBox');
const minus =document.getElementById('minus');
const mult = document.getElementById('x');
const div = document.getElementById('div');
const pi =document.getElementById('pi')
const ac =document.getElementById('AC');
const bs =document.getElementById('backS');
const pow = document.getElementById('pow');
var newText="";

function appendText() {
    textBox.value += newText;
}
pow.addEventListener("click", function(){
    newText="^";
    appendText();
})
bs.addEventListener("click", function(){
    textBox.value=textBox.value.slice(0, -1);
})
ac.addEventListener("click", function(){
    textBox.value="";
})
pi.addEventListener("click", function(){
    newText="3.1415";
    appendText();
})
div.addEventListener("click", function(){
    newText="/";
    appendText();
})
mult.addEventListener("click", function(){
    newText="*";
    appendText();
})
minus.addEventListener("click", function(){
    newText="-";
    appendText();
})
equal.addEventListener("click", function(){
    try{
        let t=0;
        let s1="";
        let s2="";
        for(let i =0;i<textBox.value.length;i++)
        {
            if(textBox.value[i]!='^'&&t==0)
            {
                s1+=textBox.value[i];
            }
            else if(textBox.value[i]=='^')  t=1;
            else if(textBox.value[i]!='^'&&t==1)
            {
                s2+=textBox.value[i];
            }
        }
        if(t==1)
        {
            let a = eval(s1);
            let b = eval(s2);
            textBox.value = Math.pow(a,b);
        }
        else{
            textBox.value= eval(textBox.value);
        }
    }
    catch(err)
    {
        alert("SYNTAX ERROR");
        textBox.value="";
    }
})
plus.addEventListener("click", function(){
    newText="+";
    appendText();
})
bracC.addEventListener("click", function(){
    newText=")";
    appendText();
})
bracO.addEventListener("click", function(){
    newText="(";
    appendText();
})
dec.addEventListener("click", function(){
    newText=".";
    appendText();
})
n1.addEventListener("click", function(){
    newText="1";
    appendText();
})
n2.addEventListener("click", function(){
    newText="2";
    appendText();
})
n3.addEventListener("click", function(){
    newText="3";
    appendText();
})
n4.addEventListener("click", function(){
    newText="4";
    appendText();
})
n6.addEventListener("click", function(){
    newText="6";
    appendText();
})
n5.addEventListener("click", function(){
    newText="5";
    appendText();
})
n7.addEventListener("click", function(){
    newText="7";
    appendText();
})
n8.addEventListener("click", function(){
    newText="8";
    appendText();
})
n9.addEventListener("click", function(){
    newText="9";
    appendText();
})
n0.addEventListener("click", function(){
    newText="0";
    appendText();
})

