start:
	pm2 start yarn --name hub-community-manager -- run start

refresh:
	git pull
	yarn
	pm2 restart hub-community-manager

update:
	git pull
	yarn
	yarn build --no-optimization
	pm2 restart hub-community-manager
