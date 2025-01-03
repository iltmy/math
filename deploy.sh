@echo off
setlocal

:: Server credentials
set SERVER_IP=47.115.207.172
set PASSWORD=QTSMdggeep12
set TARGET_DIR=/var/www/frosti

:: Install Nginx
plink -batch -pw %PASSWORD% root@%SERVER_IP% ^
"apt update && ^
apt install -y nginx && ^
mkdir -p %TARGET_DIR% && ^
chown -R www-data:www-data %TARGET_DIR%"

:: Upload files
pscp -batch -pw %PASSWORD% -r dist/* root@%SERVER_IP%:%TARGET_DIR%

:: Configure Nginx
plink -batch -pw %PASSWORD% root@%SERVER_IP% ^
"echo ^
'server {^
    listen 80;^
    server_name %SERVER_IP%;^
    root %TARGET_DIR%;^
    index index.html;^
    location / {^
        try_files \$uri \$uri/ =404;^
    }^
}' > /etc/nginx/sites-available/frosti && ^
ln -sf /etc/nginx/sites-available/frosti /etc/nginx/sites-enabled/ && ^
rm -f /etc/nginx/sites-enabled/default && ^
systemctl restart nginx"

echo Deployment complete! Visit http://%SERVER_IP%
