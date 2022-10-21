# Manuel de deploiement du service autocampus next

1. **Cloner** le dépot 🤑
```shell
git clone git@github.com:BillyRonico412/autocampus-next.git
```
2. **Creer** un fichier *.env.local* et ajouter les variables d'environnement suivantes. ✍️
```shell
NEXT_PUBLIC_URL_BACK = "https://autocampus-directus.ronico-billy.fr"
NEXT_PUBLIC_URL_FRONT = "http://localhost:8080"
```
3. **Build** l'image 💪
```shell
sudo docker image build -t autocampus-next . 
```
4. **Lancer** le container (Le projet ecoute sur le port 3030 du container) 🙃
```shell
sudo docker container run -d -p 8080:3030 autocampus-next 
```
5. Enjoy 😎

