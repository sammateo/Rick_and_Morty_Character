const button = document.querySelector('.next');
        const prevButton = document.querySelector('.previous');
        const nameChar = document.querySelector('.name');
        const genChar = document.querySelector('.gender');
        const imgChar = document.querySelector('.img');
        const specChar = document.querySelector('.species');
        const statChar = document.querySelector('.status');
        let i = -1;
        let y = 1;
        let found = 0;

        button.addEventListener('click', getChar);
        async function getChar (){
                if(i <= 19){
                    const charData = await fetch ('https://rickandmortyapi.com/api/character/?page='+ y);
               
            if(i==19)
            {
            	i=18;
            }
            const charObj = await charData.json();
             i++;
            console.log(charObj);
            let name = charObj.results[i].name;
            nameChar.innerHTML = "Name: " + name;
            let gender = charObj.results[i].gender;

            genChar.innerHTML = "Gender: " + gender;
            let image = charObj.results[i].image;
            imgChar.innerHTML = "<img src="+image+">";

            let species = charObj.results[i].species;
            specChar.innerHTML = "Species: " + species;

            let status = charObj.results[i].status;
            statChar.innerHTML = "Status: " + status;
            
            if(i==19)
            {
                y++;
                i=-1;
            }    
            }
            console.log(i);
        }


         // previous
        prevButton.addEventListener('click', reAassign);
        function reAassign(){
            if(i==-1)
            {
                i=0;
            }
            prevChar();
        }
        async function prevChar (){
            
            
               if(i>=-1)
                {

                    
                    const charData = await fetch ('https://rickandmortyapi.com/api/character/?page='+ y);
               
            if(i==0)
            {
            	i=19;
            }
            const charObj = await charData.json();
             
            console.log(charObj);
            let name = charObj.results[i-1].name;
            nameChar.innerHTML = "Name: " + name;
            let gender = charObj.results[i-1].gender;

            genChar.innerHTML = "Gender: " + gender;
            let image = charObj.results[i-1].image;
            imgChar.innerHTML = "<img src="+image+">";

            let species = charObj.results[i-1].species;
            specChar.innerHTML = "Species: " + species;

            let status = charObj.results[i].status;
            statChar.innerHTML = "Status: " + status;
            console.log(y);
            i--;
            if(i==0)
            {
                y--;
                i=19;
            }

            if(y<1)
            {
                y=1;
            }   
        }
    }