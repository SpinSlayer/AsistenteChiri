import java.sql.*;

import  BaseDatos.ConexionBD;
import java.sql.Statement;

public class Main {
    public static void main(String[] args) throws SQLException {
     ConexionBD conectar = new ConexionBD();
     Connection conectarDeveloper = conectar.conexionSQLDeveloper();
     String consulta = "SELECT * FROM USAURIOS ";
     //String consulta2 = "INSERT INTO Usaurios (usuario_id, nombre_usuario, apellido_usuario, password_usuario, correo_usuario) values (13, 'Diego','Mendoza','12345','dmendoza41@gmail.com') ";

     Statement statement = conectarDeveloper.prepareStatement(consulta);
     //statement.executeUpdate(consulta2);
     ResultSet resultado;
     resultado = statement.executeQuery(consulta);
     System.out.println(consulta);
     resultado.getString("correo_usuario");
     statement.close();
     conectarDeveloper.close();
    }
}
        /*System.out.println(resultado.getString("usuario_id"));
     statement.close();
     conectarDeveloper.close();*/



