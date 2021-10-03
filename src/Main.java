//package src;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.sql.*;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import  BaseDatos.ConexionBD;
import netscape.javascript.JSObject;

import java.sql.Statement;
import java.util.Scanner;


import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;



public class Main {
    public static void main(String[] args) throws SQLException, JSONException, ParseException {



     agregarNota();
        /*ConexionBD conectar = new ConexionBD();
     Connection conectarDeveloper = conectar.conexionSQLDeveloper();
     
     //String consulta = "SELECT * FROM USAURIOS ";
     String consulta2 = "INSERT INTO Usuario (usuario_id, nombre_usuario, apellido_usuario, contrasena, correo) values (20, 'Diego','Mendoza','12345','dmendoza41@gmail.com') ";

     Statement statement = conectarDeveloper.prepareStatement(consulta2);
     //statement.executeUpdate(consulta2);
     ResultSet resultado;
     statement.executeQuery(consulta2);
     System.out.println(consulta2);
     //resultado.getString("correo_usuario");
     statement.close();
     conectarDeveloper.close(); */

    }

    public static void agregarNota() throws SQLException, JSONException, ParseException {

            String url = "http://127.0.0.7:5500/Pizarra/Pizarra_de_notas.html";
            JSONObject json = jsonGetRequest(url);
            Object obj = new JSONParser().parse(String.valueOf(json));
            JSONObject jo = (JSONObject) obj;
          
            // obtener info del JSON
            String titulo = (String) jo.get("titulo");
            String contenido = (String) jo.get("contenido");
            String categoria = (String) jo.get("categoria");
            int prioridad = (int) jo.get("prioridad");
            int idusuario = 0;


            String tituloSQL, contenidoSQL, categoriaSQL, prioridadSQL, idusuarioSQL;

            if(titulo != null){
                tituloSQL = titulo;
            }
            else{
                tituloSQL = "";
            }
            if(contenido != null){
                contenidoSQL = contenido;
            }
            else{
                contenidoSQL = "";
            }
            if(categoria != ""){
                categoriaSQL = categoria;
            }
            else{
                categoriaSQL = "";
            }
            if(prioridad != 0){
                prioridadSQL = "'" + prioridad + "'" ;
                
            }
            else{
                prioridadSQL = "0";
            }
            if(idusuario != 0){
                idusuarioSQL = "'" + idusuario + "'";
            }
            else{
                idusuarioSQL = "";
            }


            String consulta = "INSERT INTO NOTA (titulo, contenido, categoria, prioridad, idusuario) VALUES (" + tituloSQL 
            + "," + contenidoSQL + "," + categoriaSQL + "," +  prioridadSQL + "," + idusuarioSQL + ")";

            ConexionBD conectar = new ConexionBD();
            Connection conectarDeveloper = conectar.conexionSQLDeveloper();
            Statement statement = conectarDeveloper.prepareStatement(consulta);
            statement.executeUpdate(consulta);
            System.out.println(consulta);
            statement.close();
            conectarDeveloper.close();






    }



    /*public void agregarEvento(HttpURLConnection conexion) {
        if(conexion.getRequestMethod() == "POST"){
            

            String url = "files/ejemplo/archivo.html";
            JSONObject json = jsonGetRequest(url);
            Object obj = new JSONParser().parse(json);
            JSONObject jo = (JSONObject) obj;
          
            // obtener info del JSON
            String nombre = (String) jo.get("nombre_recordatorio");
            Timestamp horaIni = (Timestamp) jo.get("hora_inicio");
            Timestamp horaF = (Timestamp) jo.get("hora_fin");
            Date dia = (Date) jo.get("dia_semana");
            int repite = (int) jo.get("se_repite");
            Date intervalo = (Date) jo.get("intervalo");

            /*String nombre = conexion.POST['nombre_recordatorio'].toString();
            Timestamp horaIni = conexion.POST['hora_inicio'];
            Timestamp horaF = conexion.POST['hora_fin'];
            Date dia = conexion.POST['dia_semana'];
            int repite = conexion.POST['se_repite'];
            Date intervalo = conexion.POST['notif_tiempo'];
            
            String nombreSQL, horaIniSQL, horaFSQL, diaSQL, repiteSQL, intervaloSQL;
             
            if(nombre != null){
                nombreSQL = nombre;
            }
            else{
                nombreSQL = "";
            }

            if(horaIni != null){
                horaIniSQL = String(horaIni);
            }
            else{
                horaIniSQL = "";
            }
            if(horaF != null){
                horaFSQL = String(horaF);
            }
            else{
                horaFSQL = "";
            }
            if(dia != null){
                diaSQL = String(dia);
            }
            else{
                diaSQL = "";
            }
            if(repite == 1){
                repiteSQL = String(repite);
            }
            else{
                repiteSQL = "";
            }
            if(intervalo != null){
                intervaloSQL = String(intervalo);
            }
            else{
                intervaloSQL = "";
            }

            String consulta = "INSERT INTO RECORDATORIO (nombre_recordatorio, horaInicio, horaFin, dia_semana, se_repite, notif_tiempo) VALUES (" + nombreSQL 
            + "," + horaIniSQL + "," + horaFSQL + "," +  diaSQL + "," + repiteSQL + "," + intervaloSQL + ")";

            ConexionBD conectar = new ConexionBD();
            Connection conectarDeveloper = conectar.conexionSQLDeveloper();
            Statement statement = conectarDeveloper.prepareStatement(consulta);
            statement.executeUpdate(consulta);
            System.out.println(consulta);
            statement.close();
            conectarDeveloper.close();

        }

    }*/



    /*public static String peticionHttpGet(String urlParaVisitar) throws Exception {
		// Esto es lo que vamos a devolver
		StringBuilder resultado = new StringBuilder();
		// Crear un objeto de tipo URL
		URL url = new URL(urlParaVisitar);

		// Abrir la conexión e indicar que será de tipo GET
		HttpURLConnection conexion = (HttpURLConnection) url.openConnection();
		conexion.setRequestMethod("GET");
		// Búferes para leer
		BufferedReader rd = new BufferedReader(new InputStreamReader(conexion.getInputStream()));
		String linea;
		// Mientras el BufferedReader se pueda leer, agregar contenido a resultado
		while ((linea = rd.readLine()) != null) {
			resultado.append(linea);
		}
		// Cerrar el BufferedReader
		rd.close();
		// Regresar resultado, pero como cadena, no como StringBuilder
		return resultado.toString();
	}
*/

   /* public static String peticionHttpPost(String urlParaVisitar) throws Exception {
		// Esto es lo que vamos a devolver
		StringBuilder resultado = new StringBuilder();
		// Crear un objeto de tipo URL
		URL url = new URL(urlParaVisitar);

		// Abrir la conexión e indicar que será de tipo POST
		HttpURLConnection conexion = (HttpURLConnection) url.openConnection();
		conexion.setRequestMethod("POST");
		// Búferes para leer
		BufferedReader rd = new BufferedReader(new InputStreamReader(conexion.getInputStream()));
		String linea;
		// Mientras el BufferedReader se pueda leer, agregar contenido a resultado
		while ((linea = rd.readLine()) != null) {
			resultado.append(linea);
		}
		// Cerrar el BufferedReader
		rd.close();
		// Regresar resultado, pero como cadena, no como StringBuilder
		return resultado.toString();
	}*/

    /*private static String streamToString(InputStream inputStream) {
        String text = new Scanner(inputStream, "UTF-8").useDelimiter("\\Z").next();
        return text;
      }*/
    
      public static JSONObject jsonGetRequest(String urlQueryString) {
        JSONObject json = null;
        try {
          URL url = new URL(urlQueryString);
          HttpURLConnection connection = (HttpURLConnection) url.openConnection();
          connection.setDoOutput(true);
          connection.setInstanceFollowRedirects(false);
          connection.setRequestMethod("GET");
          connection.setRequestProperty("Content-Type", "application/json");
          connection.setRequestProperty("charset", "utf-8");
          connection.connect();
          //InputStream inStream = connection.getInputStream();
          json = (JSONObject) connection.getContent();
        } catch (IOException ex) {
          ex.printStackTrace();
        }
          return json;
      }

   




   }



        /*System.out.println(resultado.getString("usuario_id"));
     statement.close();
     conectarDeveloper.close();*/



