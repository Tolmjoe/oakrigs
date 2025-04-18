

                    Create the Environment File


Create a new file for your environment variables and open the file in Vim:

sudo vim /etc/app.env
In Vim, add your variables in the format VARIABLE=value. For example:

DB_PASSWORD=your_secure_password
Note

to save and exit vim, press esc then :wq then enter

Restrict the file permissions for security.

sudo chmod 600 /etc/app.env
sudo chown ubuntu:ubuntu /etc/app.env







openssl

openssl req -x509 -newkey rsa:2048 -keyout private.key -out certificate.crt -days 365

winpty openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem






