npm run build
#cp -r dist/* deply
#cd deply 
#git add .
#git commit -am "deploy" 
#git pull
#git push origin main
cd dist
tar czvf helix-ui.tar.gz  *
scp -P 2022 helix-ui.tar.gz pi@75.solar.helixsec.live:/tmp/
ssh pi@75.solar.helixsec.live -p 2022 'cd /opt/helix/solarhelix-service/templates/ && rm * -rf && tar xzf /tmp/helix-ui.tar.gz '

