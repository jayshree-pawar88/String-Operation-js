// Count word 
        
            function Countword () {
                x = document.getElementById("user-input").value;
                console.log(x.length);
                arr1 = x.split(' ');
                console.log(arr1);
                document.getElementById("result").innerHTML = arr1.length;   
            }
  

// Count letter 

            function CountLetter(){
                x = document.getElementById("user-input").value;
                t = x.replaceAll(/\s/g,"");

                p = t.length;
                console.log(p);
                document.getElementById("result").innerHTML = p;
            }
        

// Count Space    
        
            function SpaceCount(){
                x = document.getElementById("user-input").value;
                 
                spacecount = x.match(/\s/g);
               
                MySpaceCount = spacecount ? spacecount.length : 0;
                document.getElementById("result").innerHTML = MySpaceCount;
            }
        

// Count Newline 
        
            function Newline(){
                x = document.getElementById("user-input").value;
                 y  = x.split("\n");
                 p = y.length;
                console.log(p);
                document.getElementById("result").innerHTML = p;
            }
        

//  String Titlecase 
    
            function TitleCase(){   
         let t = document.getElementById("user-input").value;
        let strconvert = t.split(" ");
        console.log(strconvert);
       
        for(let i=0; i < strconvert.length; i++){
            strconvert[i] = strconvert[i][0].toUpperCase() + strconvert[i].substr(1);
        
        }
        store = strconvert.join(" ");
        document.getElementById("result").innerHTML = store;
    }
        

// Count Vowel 

        function CountVowel(){
          var x = document.getElementById("user-input").value;
          const reg = /[aeiou]/gi;
          var chars = x.match(reg);

          document.getElementById("result").innerHTML = chars.length;
          
        }
      

// Count Count Consonent 
      
        function CountConsonent(){
             var x = document.getElementById("user-input").value;
             const reg1 = /[^aeiou\s]/gi;
             var chars1 = x.match(reg1);

          document.getElementById("result").innerHTML = chars1.length;
         }
        
    
// Sort word 

        function SortWord(){
    
            var x = document.getElementById("user-input").value;
            const y = x.split(" ");
        
            var one = 0;
            var two = 0; 
            var three = 0;
            var four = 0;
            var five = 0;
            var six = 0;
            var seven = 0;
            var eight = 0;
            var nine = 0;
            var ten = 0;
            var eleven = 0;
            var twelve = 0;
        
            for(var i=0; i<y.length; i++){

                 z = y[i].length;
                
                 if(z == 1){
                    one++;
                 }else if(z == 2){
                    two++;
                 }else if(z == 3){
                    three++;
                 }else if(z == 4){
                    four++;
                 }else if(z == 5){
                    five++;
                 }else if(z == 6){
                    six++;
                 }else if(z == 7){
                    seven++;
                 }else if(z == 8){
                    eight++;
                 }else if(z == 9){
                    nine++;
                 }else if(z == 10){
                    ten++;
                 }else if(z == 11){
                    eleven++;
                 }else if(z == 12){
                    twelve++;
                 }
            }

            var resultStr = `one: ${one}, two: ${two}, three: ${three}, four: ${four}, five: ${five}, six: ${six}, seven: ${seven}, eigth: ${eight}, nine: ${nine}, ten: ${ten}, eleven: ${eleven}, twelve: ${twelve}  `;
        }

 // String capitalize 
    
            function capitalize(){
                x = document.getElementById("user-input").value;
                y = x.toUpperCase();
                z = document.getElementById("result");
                z.value  = y
            }
        
        //  String lowercase 
    
            function lowercase(){
                x = document.getElementById("user-input").value;
                y = x.toLowerCase();
                z = document.getElementById("result");
                z.value  = y
            }
    
