$(document).ready(function(){
    var tabla = document.getElementById("tabla_registros_bpm");
    var rowCount = $('#tabla_registros_bpm tr').length-1;
    var delayInMilliseconds_proceso_principal;
    var delayInMilliseconds_proceso_secundario; 
    var obj = $({});
    var array = [];
    var contador_de_elementos_array=-1;
    var numero_de_proceso;
    var fila;
    var numero_de_proceso_array=[];
    
    var pasos = 5000;
    
    var pasos_2 = 15000;
    
    
    
    var contador_de_interacciones = 1;
    var Documento;

    var ContadorPaginas=0;
    do {
        ContadorPaginas++; //Contador Para La Cantidad De Paginas
        
        rowCount = $('#tabla_registros_bpm tr').length-1;
    
        for (var i = 0; i < rowCount; i++) {	
        //Encontrar numero de proceso
        fila = tabla.getElementsByTagName('tr')[i+1];
        numero_de_proceso = fila.getAttribute("id_proceso");	
        numero_de_proceso_array.push(numero_de_proceso);
        }
        document.getElementById('tabla_registros_bpm_next').getElementsByTagName('a')[0].click();//Avanzar De Pagina

    } while (rowCount==100);
    console.log(numero_de_proceso_array);


    for (var j = 0; j < ContadorPaginas; j++) {
        
        rowCount = $('#tabla_registros_bpm tr').length-1;
        for (var i = 0; i < rowCount; i++) {
            
        
            
                        ejecutar(numero_de_proceso_array[i],i);
        
        
            
        console.log("terminada fila"+i);
        
        }
        delayInMilliseconds_proceso_secundario = delayInMilliseconds_proceso_secundario + pasos_2;
        
        document.getElementById('tabla_registros_bpm_next').getElementsByTagName('a')[0].click();
        console.log("terminada fase"+j);
        
        
        }



    
    
    
    
    
    

    
    
    function ejecutar(numero_de_proceso_x,numero_de_iteracion) {
    
    
    
    setTimeout(function() {
            
    
            var obj_parametros_ir = {
                    dcha:"/apps/TA2015_bpm/fichaProceso.cfm"
                    ,parametros_dcha:{ id_proceso: numero_de_proceso_x}
                    ,izda: "/apps/TA2015_bpm/fichaProceso_izda.cfm"
                    ,parametros_izda: {id_proceso: numero_de_proceso_x}
                };
                ir(obj_parametros_ir);		
    
            
    
    
                console.log("Abrir");
    }, delayInMilliseconds_proceso_secundario);
    
    contador_de_interacciones++;      
    delayInMilliseconds_proceso_secundario = pasos*contador_de_interacciones;
    
    setTimeout(function() {
                                var formato = "html";
                                var orientacion = "Vertical";
                                var tamanio_fuente = $("#tamanio_fuente_modal_imprimir_proceso").val();
    
    
                                $("#modal_imprimir_proceso").trigger("formato_seleccionado",{formato:"html",orientacion:"Vertical",tamanio_fuente:"undefined"});
    
    
    
            
    
        console.log("Imprimir");
    }, delayInMilliseconds_proceso_secundario);
    
    
    contador_de_interacciones++;
    delayInMilliseconds_proceso_secundario = pasos*contador_de_interacciones;
    
    setTimeout(function() {
    
        
        document.getElementById("btn_atras_ficha_"+numero_de_proceso_x).click();
            
    
        console.log("regresar")
    }, delayInMilliseconds_proceso_secundario);
    
    contador_de_interacciones++;
    delayInMilliseconds_proceso_secundario = pasos*contador_de_interacciones;
    
    
    //delayInMilliseconds_proceso_secundario = delayInMilliseconds_proceso_secundario + 9000;
    
    
    }
    
    
    
    
    
    });
    
    
    
    