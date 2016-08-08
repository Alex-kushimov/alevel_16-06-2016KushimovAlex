// В прототипном стиле определить два класса: User, Permissions. Класс User имеет следующие входящие параметры:

// new User ({
//     name: 'John Doe',
//     role: 'admin'
// });

// Ни один из параметров не доступен для прямого изменения.
// Публичный метод getName() возвращает имя пользователя (John Doe).
// Публичный метод getRole() возвращает роль пользователя (admin).
// Публичные методы getPermissions() и setPermissions() работают с классом Permissions.
// Метод setPermissions() просит подтверждения действию: “Вы действительно хотите изменить роль пользователя?”. При утвердительном ответе роль и, соответственно, права пользователя меняются. Метод getRole() должен возвращать актуальное значение.
// Класс Permissions назначает права в зависимости от роли:
// admin: view = true, edit = true, delete = true
// manager: view = true, edit = true, delete = false
// visitor: view = true, edit = false, delete = false

// var user = new User({
//     name: 'John Doe',
//     role: 'admin'
// });

// console.log('name', user.getName());
// user.setPermissions('manager');
// console.log('can delete', user.getPermissions('delete'));
// console.log('role', user.getRole());


var User = function (obj) {
 var name = obj.name || '';
 var role = obj.role || 'user';

 var permissions = new Permissions(role);

 this.getName = function() {
  return name;
 }

 this.getRole = function() {
  return role;
 }

 this.setPermissions = function(newRole) {
  var agree = confirm('Вы хотите изменить роль пользователя?')
  if (agree){
   role = newRole;
   permissions.setPermissions(role);
  }
 };

 this.getPermissions = function(value) {
  console.log(permissions.getPermissions());
  return permissions.getPermissions()[value];
 }
}

var Permissions = function (role) {

 this.getPermissions = function() {
  var obj = {
   view: this.view,
   edit: this.edit,
   delete: this.delete
  }
  return obj;

 }

 this.setPermissions = function(newRole) {
  role = newRole;
  if (role === "admin") {
   this.view  = true;
   this.edit = true;
   this.delete = true;
  } else if (role === "manager") {
   this.view  = true;
   this.edit = true;
   this.delete = false;
  } else {
   this.view  = true;
   this.edit = false;
   this.delete = false;
  }
 };

 this.setPermissions(role);
}


var user = new User({
    name: 'John Doe',
    role: 'admin'
});

console.log(user.getName());
console.log(user.setPermissions('manager'))
console.log('can delete', user.getPermissions('delete'));
console.log('role', user.getRole());