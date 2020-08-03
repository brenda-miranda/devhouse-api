/**
 * métodos: index, show, update, store, destroy
 * 
 * index: listagem de sessões
 * store: criar uma sessão
 * show: quando queremos listar uma única sessão
 * update: quando queremos alterar alguma sessão
 * destroy: qnd queremos deletar uma sessão
 */


class SessionController{

   store(req, res) {
      return res.json({ message: 'Minha api!'});
   }

}

export default new SessionController();