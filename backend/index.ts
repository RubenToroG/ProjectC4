import conectarDB from "./db/db";
import UserModel from "./models/user";

const main = async () => {
  await conectarDB();

  // await UserModel.create({
  //   email: "user@example.com",
  //   identification: "12345678",
  //   nombre: "NombrePrueba",
  //   apellidos: "apellidosPrueba",
  // })
  //   .then((u) => {
  //     console.log("user created", u);
  //   })
  //   .catch((err) => {
  //     console.error("error creating user", err);
  //   });

  await UserModel.find()
    .then((u) => {
      console.log("user found", u);
    })
    .catch((err) => {
      console.error("error finding user", err);
    });
};

main();
