Próximos passos
[x] Criar a camada do repository;
[x] criar os usecases de login
[x] criar camada de controller do user
[x] tem bug no update, está alterando outro usuário.
[x] revisar o middleware, ta fazendo consulta direto do schema
[x] colocar filtro like no usecase de find task by title
[x] implementar delete cascade (talvez colocar uma lógica que se o taskid nao for mandado, deleta todas as tasks daquele usuario)

Rotas para testar
[x] createtask
[x] updatetask um usuário conseguiu mudar a task de um outro usuário;
[x] removetask um usuário conseguiu remover a task de um outro usuário;
[x] findIDtask tem bug, não traz a task que eu coloco mas traz outra (sempre a mesma, mesmo que seja de outro usuário)
[x] findTitletask vem task de outros caras
[x] findUsertask
[] refreshtoken (criar rota e testar)

Debito tecnico (kkkk)
[] trocar o schema.remove por deletemany (só pq ta deprecated e talves pare de funcionar daqui a pouco)
[] separar as rotas de usuario e de task e de auth
