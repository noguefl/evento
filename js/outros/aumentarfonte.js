/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function fonte(e)
{
    var elemento = document.getElementById("conteudo");
    
    var atual = elemento.style.fontSize;
    
    if(e == 'a')
    {
        atual = parseInt(atual) + 1 + 'px';
    }else if(e == 'd'){
        atual = parseInt(atual) - 1 + 'px';
    }else if(e == 'n'){
        atual = 10+'px';
    }
    
    elemento.style.fontSize = atual;
    
    
    
}
