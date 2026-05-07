// app/models/userModel.js
let users = [];
const User = {
  findAll: () => users,
  create: (name, email, linkImg, numero, prezzo) => {
    const newUser = { id: Date.now(), name, email, linkImg, numero, prezzo };
    users.push(newUser);
    return newUser;
  },
  findById: (id) => users.find(u => u.id === parseInt(id)),
  delete: (id) => {
    users = users.filter(u => u.id !== parseInt(id));
  },
  incrementa: (id) => {
    users = users.filter(u => u.id !== parseInt(id));
    if (user){
      user.numero=(parseInt(user.numero)||0) +1
    }
    return user
  },
  decrementa: (id) => {
    users = users.filter(u => u.id !== parseInt(id));
    if (user){
      user.numero=(parseInt(user.numero)||0) -1;
      if (user.numero<0){
        user.numero=0;
      }
    }
    return user
  }
};
module.exports = User;