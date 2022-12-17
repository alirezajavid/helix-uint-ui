cp -r dist/* deply
cd deply 
git add .
git commit -am "deploy" 
git push origin main
ssh dpd@167.235.4.145 -p 49150 ./deploy
