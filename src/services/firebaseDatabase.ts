/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { User, UserResponse } from '../models/user';
import firebase from './firebase';

export class DataBaseProvider {
  usrListRef = firebase.database().ref('users-list');
  user!: User;

  async registrateUser(user: User) {
    this.registrate(user).then(ref => {
      console.log(ref.result?.uid + ' registrado');
      // associando dados com usuário do FB
      this.user = new User();
      this.user.uid = ref.result?.uid;
      this.user.nome = user.nome;
      this.user.email = user.email;
      this.user.senha = user.senha;

      this.saveUserData(this.user).then(userData => {
        console.log(userData.key + ' gravado');
        this.usrListRef.update(this.user);
      });
    });
  }

  // registrando usuário no FB
  private async registrate(user: User) {
    try {
      const { user: newUser } = await firebase.auth().createUserWithEmailAndPassword(
        user.email, user.senha);
      return <UserResponse><unknown>{
        result: newUser,
      };
    } catch (e) {
      console.log(e);
      return <UserResponse>{
        error: e
      };
    }
  }

  private saveUserData(user: User) {
    return this.usrListRef.push(user);
  }

  login(email: string, senha: string, callback?: (arg0: any) => void) {
    this.execLogin(email, senha).then(ref => {
      if (ref.error) {
        throw "Usuário inválido";
      } else {
        return this.usrListRef.on('value', lst => {
          const userList = lst.val();
          let user = {};
          Object.keys(userList).forEach(value => {
            if (userList[value].uid === ref.result?.uid) {
              console.log(userList[value]);
              user = userList[value];
              return;
            } 
          });

          console.log(user);
          console.log(JSON.stringify(user));
          this.user = <User><unknown>user;
          if (callback) {
            console.log('INVOCANDO CALLBACK');
            console.log(callback);
            callback(this.user);
            console.log('PASSOU');
          }
        });
      }
    });
  }

  private async execLogin(email: string, senha: string) {
    try {
      const { user } = await firebase.auth().signInWithEmailAndPassword(
        email,
        senha
      );
      return <UserResponse><unknown>{
        result: user,
      };
    } catch (e) {
      console.log(JSON.stringify(e));
      return <UserResponse>{
        error: e
      };
    }
  }
}
