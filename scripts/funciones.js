

let nombre;
let edad;

let run = () => {   
    
    edad=0;
    nombre=$('#nombre');
    reseteandoCheckboxs();
    ingresar();
    
    $('#formulario').show();
    
    $('#principal').hide();
    $('#resultado').hide();    
    $('#error').hide();
    $('#adivinar').hide();
    $('#volver').hide();
    $('#raiz').hide();

    $('#ingresar').click(verificar);
    $('#adivinar').click(adivinando);
    $('#volver').click(atras); 
    $('#raiz').click(comienzo); 

    

}

let comienzo = () => {

    
    $('#nombre').val('');
    edad=0;

    $('#volver').hide();
    $('#error').hide();
    $('#resultado').hide();
    $('#raiz').hide();

    $('#titulo').show();
    $('#formulario').show();
    $('#ingresar').show();
    $('#nombre').show();
    reseteandoCheckboxs();

}



let reseteandoCheckboxs = () => {

    $(':checkbox').prop('checked',false);
}

let atras = () => {

    //$('.valores').attr('checked',false);
    edad=0;
    reseteandoCheckboxs();

    
    $('#formulario').show();
    $('#titulo').show();
    $('#principal').show();
    $('#adivinar').show();
    $('#resultado').hide();
    $('#error').hide();
    $('#volver').hide();
    $('#ingresar').hide();
    
}

let adivinando = () => {            

        if($(':checked').length==0){
        
            alert('No has seleccionado ninguna edad, '+$(nombre).val()+'.');

        }else{
            $(':checked').each((i,o)=>{

                edad+=parseInt($(o).val());
            }); 

            if(confirm($(nombre).val()+', ud. tiene '+edad+' años?')){

                $('#container').hide();
                $('#principal').hide();
                $('#titulo').hide();
                $('#formulario').hide();
                $('#adivinar').hide();
                $('#ingresar').hide();
                $('#resultado').show();
                $('#fraseresultado').css({'margin':'.5% auto','padding':'2%','font-size':'1.5rem','background':'black','color':'white'});
                $('#fraseresultado').html('<strong class=\'h5 text-white\'>Fué un placer, poder adivinar la edad suya <em>'+$(nombre).val()+'</em> y recuerde siempre, que tiene '+edad+' años.</strong>');
                $('#raiz').show();
                edad=0;
                $('#nombre').val('');
            }else{               
                
                $('#formulario').hide();
                $('#principal').hide();
                $('#resultado').hide();
                $('#adivinar').hide();
                $('#error').show();
                $('#inicio').hide();
                $('#titulo').hide();
                $('#volver').show();
                //$(nombre).css('text-transform','capitalize');
                $('#frase').html('<strong class=\'h5 text-white\'><i class=\' h3 text-white my-3 d-block\'>OSCAR DICE:</i><em>'+$(nombre).val()+'</em>, quisas no has seleccionado las columnas correctas, intentanlo denuevo.</strong>')
                
                edad=0;

                reseteandoCheckboxs();
            }
        }    
}

let verificar = () => {

    let continuar = false;

    if($(nombre).val().length<2)
    {
        alert('El nombre ingresado, debe contener mínimo dos caracteres.');    
    }   
    else{

        continuar=true;
        $('#principal').show();
        $('#adivinar').show();
        $('#lblNombre').hide();
        $('#nombre').hide();
        $('#ingresar').hide();
    }

    return continuar; 
} 

let ingresar = () => {

    let multiplos = [1,2,4,8,16,32,64];
   
    $('#c1').html('<strong class=\'d-block text-secondary mt-3\'>A</strong><br/>'+edades(multiplos[0])+'<input type=\'checkbox\' value=\'1\' class=\'valores mx-2 my-4\'>');
    $('#c2').html('<strong class=\'d-block text-secondary mt-3\'>B</strong><br/>'+edades(multiplos[1])+'<input type=\'checkbox\' value=\'2\' class=\'valores mx-2 my-4\'>');
    $('#c3').html('<strong class=\'d-block text-secondary mt-3\'>C</strong><br/>'+edades(multiplos[2])+'<input type=\'checkbox\' value=\'4\' class=\'valores mx-2 my-4\'>');
    $('#c4').html('<strong class=\'d-block text-secondary mt-3\'>D</strong><br/>'+edades(multiplos[3])+'<input type=\'checkbox\' value=\'8\' class=\'valores mx-2 my-4\'>');
    $('#c5').html('<strong class=\'d-block text-secondary mt-3\'>E</strong><br/>'+edades(multiplos[4])+'<input type=\'checkbox\' value=\'16\' class=\'valores mx-2 my-4\'>');
    $('#c6').html('<strong class=\'d-block text-secondary mt-3\'>F</strong><br/>'+edades(multiplos[5])+'<input type=\'checkbox\' value=\'32\' class=\'valores mx-2 my-4\'>');
    $('#c7').html('<strong class=\'d-block text-secondary mt-3\'>G</strong><br/>'+edades(multiplos[6])+'<input type=\'checkbox\' value=\'64\' class=\'valores mx-2 my-4\'>');
    
}

let edades = (factor) => {
	

    let valores="";
    let contador=0;
    let c=1;


    for(let i=c;i<128;i++){

        c=factor;

        switch(factor){

            case 1:
                
            if(i%2!=0)
            valores+=i+'<br/>';

                break;
            case 2:               

            	
            	
                if(i%2==0)
                contador++;

                if(contador%2!=0)
                valores+=i+'<br/>';
                
            	

                break;
            case 4:

            	
            	
                if(i%factor==0)
                contador++;

                if(contador%2!=0)
                valores+=i+'<br/>';
                
            	
            	
                break;
            case 8:

            	
            	
                if(i%factor==0)
                contador++;

                if(contador%2!=0)
                valores+=i+'<br/>';

            	
            	
                break;
            case 16:

            	
            	
                if(i%factor==0)
                contador++;

                if(contador%2!=0)
                valores+=i+'<br/>';

            	
            	
                break;
            case 32:

            	
            	
                if(i%factor==0)
                contador++;

                if(contador%2!=0)
                valores+=i+'<br/>';

            	
            	
                break;
            case 64:

            	
            	
                if(i%factor==0)
                contador++;

                if(contador%2!=0)
                valores+=i+'<br/>';
                
            	
            	
                break;
        }
    }
    
    return valores;
}

$(document).ready(run);