$(document).ready(function () {
    var tabla = document.getElementById("tabla_registros_bpm");
    var rowCount = $('#tabla_registros_bpm tr').length - 1;
    var delayInMilliseconds_proceso_principal;
    var delayInMilliseconds_proceso_secundario;
    var obj = $({});
    var array = [];
    var contador_de_elementos_array = -1;
    var numero_de_proceso;
    var fila;
    var numero_de_proceso_array = [];

    var pasos = 5000;

    var pasos_2 = 15000;



    var contador_de_interacciones = 1;
    var Documento;

    var ContadorPaginas = 0;
    do {
        ContadorPaginas++; //Contador Para La Cantidad De Paginas

        rowCount = $('#tabla_registros_bpm tr').length - 1;

        for (var i = 0; i < rowCount; i++) {
            //Encontrar numero de proceso
            fila = tabla.getElementsByTagName('tr')[i + 1];
            numero_de_proceso = fila.getAttribute("id_proceso");
            numero_de_proceso_array.push(numero_de_proceso);
        }
        document.getElementById('tabla_registros_bpm_next').getElementsByTagName('a')[0].click();//Avanzar De Pagina

    } while (rowCount == 100);
    console.log(numero_de_proceso_array);


    for (var j = 0; j < ContadorPaginas; j++) {

        rowCount = $('#tabla_registros_bpm tr').length - 1;
        for (var i = 0; i < rowCount; i++) {



            ejecutar(numero_de_proceso_array[i], i);



            console.log("terminada fila" + i);

        }
        delayInMilliseconds_proceso_secundario = delayInMilliseconds_proceso_secundario + pasos_2;

        document.getElementById('tabla_registros_bpm_next').getElementsByTagName('a')[0].click();
        console.log("terminada fase" + j);


    }












    function ejecutar(numero_de_proceso_x, numero_de_iteracion) {



        setTimeout(function () {


            var obj_parametros_ir = {
                dcha: "/apps/TA2015_bpm/fichaProceso.cfm"
                , parametros_dcha: { id_proceso: numero_de_proceso_x }
                , izda: "/apps/TA2015_bpm/fichaProceso_izda.cfm"
                , parametros_izda: { id_proceso: numero_de_proceso_x }
            };

            ir(obj_parametros_ir);




            console.log("Abrir");
        }, delayInMilliseconds_proceso_secundario);

        contador_de_interacciones++;
        delayInMilliseconds_proceso_secundario = pasos * contador_de_interacciones;

        setTimeout(function () {
            $("#modal_imprimir_proceso").trigger("formato_seleccionado", { formato: "html", orientacion: "Vertical", tamanio_fuente: "undefined" });

            console.log(document.getElementById('contenedor_ficha_proceso_'+numero_de_proceso_x).childNodes[37]);
            //var id = 3028949;
            //var row_array = document.getElementById("datatable_acciones_" + numero_de_proceso_x).getElementsByTagName('tr');
            //console.log(row_array);
            /*var id_fase, con_permisos, id_proceso, id_accion, exec_time;

            for (var i = 1; i < row_array.length; i++) {
                id_fase = row_array[i].getAttribute("id_fase");
                con_permisos = row_array[i].getAttribute("con_permisos");
                id_proceso = row_array[i].getAttribute("id_proceso");
                id_accion = row_array[i].getAttribute("id");
                id_accion = id_accion.split('_')[1];
                exec_time = (i - 1) * 6000;
                EjecutarInterna(id_accion, i);
            }
*/
            console.log("Imprimir");
        }, delayInMilliseconds_proceso_secundario);


        contador_de_interacciones++;
        delayInMilliseconds_proceso_secundario = pasos * contador_de_interacciones;

        setTimeout(function () {


            document.getElementById("btn_atras_ficha_" + numero_de_proceso_x).click();


            console.log("regresar")
        }, delayInMilliseconds_proceso_secundario);

        contador_de_interacciones++;
        delayInMilliseconds_proceso_secundario = pasos * contador_de_interacciones;


        //delayInMilliseconds_proceso_secundario = delayInMilliseconds_proceso_secundario + 9000;


    }


    function EjecutarInterna(numero_de_proceso_x, numero_de_iteracion) {
        setTimeout(function () {
            var obj_parametros_ir = {
                dcha: "/apps/TA2015_bpm/fichaAccion.cfm"
                , parametros_dcha: { id_accion: numero_de_proceso_x, con_permisos: con_permisos, id_proceso: id_proceso }
                , izda: "/apps/TA2015_bpm/fichaProceso_izda.cfm"
                , parametros_izda: { id_proceso: id_proceso, id_fase: id_fase }
            };
            ir(obj_parametros_ir);

            console.log("Abrir");
        }, delayInMilliseconds_proceso_secundario);

        contador_de_interacciones++;
        delayInMilliseconds_proceso_secundario = pasos * contador_de_interacciones;

        setTimeout(function () {

            $("#modal_imprimir_accion").trigger("formato_seleccionado", { formato: "pdf", orientacion: "Vertical", tamanio_fuente: "undefined" });
            console.log("Imprimir");
        }, delayInMilliseconds_proceso_secundario);

        contador_de_interacciones++;
        delayInMilliseconds_proceso_secundario = pasos * contador_de_interacciones;

        setTimeout(function () {
            document.getElementById("btn_atras_accion").click();
            console.log("regresar")
        }, delayInMilliseconds_proceso_secundario);

        contador_de_interacciones++;
        delayInMilliseconds_proceso_secundario = pasos * contador_de_interacciones;
    }
}
    
    
    );



