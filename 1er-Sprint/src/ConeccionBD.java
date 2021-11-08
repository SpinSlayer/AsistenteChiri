import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;


public class ConeccionBD {
    public static void main(String[] args) throws SQLException {

        String url = "jdbc:oracle:thin:@localhost:1521:XE";
        String username = "system";
        String password = "mendoza";
        try{
        Connection connection = DriverManager.getConnection(url, username, password);
        System.out.println("Nos conectamos");


        }
        catch(SQLException e){
            System.out.println("No nos conectamos");
            e.printStackTrace();
        }
    }
}