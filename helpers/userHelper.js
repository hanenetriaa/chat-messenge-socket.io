// Tableau pour stocker les utilisateurs connectés
const users = [];

// Ajoute un utilisateur au chat
function newUser(id, username, room) {
  // Crée un objet utilisateur avec un identifiant unique, un nom d'utilisateur et un nom de salle
  const user = { id, username, room };

  // Ajoute l'utilisateur au tableau
  users.push(user);

  // Retourne l'utilisateur nouvellement créé
  return user;
}

// Obtient l'utilisateur actuel en utilisant son identifiant
function getActiveUser(id) {
  // Recherche l'utilisateur dans le tableau et le retourne s'il est trouvé
  return users.find((user) => user.id === id);
}

// Supprime l'utilisateur de la salle de discussion en utilisant son identifiant
function exitRoom(id) {
  // Trouve l'index de l'utilisateur dans le tableau
  const index = users.findIndex((user) => user.id === id);

  // Si l'utilisateur est trouvé dans le tableau, le supprime et le retourne
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Obtient tous les utilisateurs de la salle de discussion en utilisant le nom de la salle
function getIndividualRoomUsers(room) {
  // Filtre les utilisateurs dans le tableau en utilisant le nom de la salle et les retourne
  return users.filter((user) => user.room === room);
}

// Exporte les fonctions pour les rendre disponibles pour une utilisation externe
module.exports = {
  newUser,
  getActiveUser,
  exitRoom,
  getIndividualRoomUsers,
};
