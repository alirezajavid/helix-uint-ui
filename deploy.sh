cp -r dist/* deply
cd deply 
git add .
git commit -am "deploy" 
git pull
git push origin main
cd ../dist
tar czvf helix-ui.tar.gz  *
scp -P 49150 helix-ui.tar.gz  dpd@167.235.4.145:
ssh dpd@167.235.4.145 -p 49150 ./deploy
