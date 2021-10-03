package BaseDatos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class ConexionBD {
    public Connection conexionSQLDeveloper() throws SQLException{
        String url = "jdbc:oracle:thin:@localhost:1521:XE";
        String username = "system";
        String password = "mendoza";
        Connection connection = null;
        try{
            connection = DriverManager.getConnection(url, username, password);
            System.out.println("Nos conectamos UwU");
        }
        catch(SQLException e){
            System.out.println("lol xd");
            e.printStackTrace();
        }

        return connection;
    }

}
