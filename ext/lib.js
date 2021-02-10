module.exports = {
	isAdmin(userid) {
    if(['157324982622486528', '330287319749885954'].includes(userid.toString())){
      return true;
    }else{
      return false;
    }
	},
};
