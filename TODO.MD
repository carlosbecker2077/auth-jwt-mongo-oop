[x] Criar a camada do repository;
[x] criar os usecases de login
[x] criar camada de controller do user
[] tem bug no update, parece que as vezes ele altera outro usuario
[x] deixar salvar com o mesmo email se for o mesmo id
[x] revisar o middleware, ta fazendo consulta direto do schema
[] colocar filtro like no usecase de title

rotas para testar
[x] createtask
[] updatetask um usuario conseguiu mudar a task de um outro usuario (mas atualizou de boa)
[] removetask um usuario conseguiu remover a task de um outro usuario (mas removeu de boa)
[] findIDtask tem bug, não tras a task que eu coloco mas tras outra (sempre a mesma, mesmo que seja de outro usuario)
[] findTitletask vem task de outros caras
[x] findUsertask

[] refreshtoken (criar rota e testar)

[] separar as rotas de usuario e de task e de auth
