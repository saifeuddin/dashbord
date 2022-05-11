//  ------------------------
        const modal = document.getElementById('modal_1')
        modal.style.display = 'none'
        
        function modalFunction() {
            modal.style.display = 'block'
        }

        // CLose
        const button = document.getElementById('closebtn')
        button.onclick = ()=> {
            modal.style.display = 'none'
        }



//  ------------------------------
        const modal2 = document.getElementById('modal_2')
        modal2.style.display = 'none'

        function modalFunction2() {
            modal2.style.display = 'block'
        }


        // CLose
        const button2 = document.getElementById('closebtn2')
        button2.onclick = ()=> {
            modal2.style.display = 'none'
        }




// ----------------------
        const div = document.getElementById('myFunction2')
        const modal3 = document.getElementById('modal_3')
        modal3.style.display = 'none'

        div.onclick = ()=> {
            modal3.style.display = 'block'
        }


        // CLose
        const button3 = document.getElementById('closebtn3')
        button3.onclick = ()=> {
            modal3.style.display = 'none'
        }



// ----------------------
        const div2 = document.getElementById('myFunction3')
        const modal4 = document.getElementById('modal_4')
        modal4.style.display = 'none'
        
        div2.onclick = function modalFunction4(e) {
            e.preventDefault()
            modal4.style.display = 'block'
        }


        // CLose
        const button4 = document.getElementById('closebtn4')
        button4.onclick = ()=> {
            modal4.style.display = 'none'
        }





// ----------------------
        const modal5 = document.getElementById('modal_5')
        modal5.style.display = 'none'
        
        function modalFunction5(e) {
            modal5.style.display = 'block'
        }


        // CLose
        const button5 = document.getElementById('closebtn5')
        button5.onclick = ()=> {
            modal5.style.display = 'none'
        }