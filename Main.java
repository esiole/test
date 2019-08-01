import gui.*;
import logger.Logs;

public class Main {
    public static void main(String[] args) {
        Logs.writeLog("start program", Level.INFO);
        MainWindow window = new MainWindow();
        window.setVisible(true);
    }
}
