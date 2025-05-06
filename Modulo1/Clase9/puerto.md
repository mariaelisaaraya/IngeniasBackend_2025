Para ver si hay un puerto ocupado:

netstat -ano | findstr "8080"

taskkill /PID 1234 /F