npm run build
cp -r dist/* deply
cd deply 
git add .
git commit -am "deploy" 
git pull
git push origin main
cd ../dist
tar czvf helix-ui.tar.gz  *
scp -P 2022 helix-ui.tar.gz pi@104.solar.helixsec.live: 
ssh pi@104.solar.helixsec.live -p 2022 'cd /opt/helix/solarhelix-service/templates/ && rm * -rf && tar xzvf ~/helix-ui.tar.gz '
