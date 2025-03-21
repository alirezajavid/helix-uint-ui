npm run build
#cp -r dist/* deply
#cd deply 
#git add .
#git commit -am "deploy" 
#git pull
#git push origin main
cd dist
tar czvf helix-ui.tar.gz  *
scp -P 2022 helix-ui.tar.gz pi@120.157.223.190:/tmp/
ssh pi@120.157.223.190 -p 2022 'cd /opt/helix/solarhelix-service/templates/ &&  sudo tar xzf /tmp/helix-ui.tar.gz '

# hel!xsec@123
