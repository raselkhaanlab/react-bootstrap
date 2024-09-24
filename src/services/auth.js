import axios from "axios";
import { handleHttpError, protectedClient, publicClient } from "../lib/http";
import { getRefreshToken, getUser, setAccesToken, setRefreshToken, setUser } from "../utils/auth";

// function generateToken() {
//   const arr = new Uint8Array(12);
//   window.crypto.getRandomValues(arr);
//   return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
// }

// const user = {
//   id: 'USR-000',
//   avatar: '/assets/avatar.png',
//   firstName: 'Sofia',
//   lastName: 'Rivers',
//   email: 'sofia@devias.io',
// };

class AuthClient {
  async signUp(data) {
    // Make API request
    try {
      const response = await publicClient.post("/auth/register", data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const {user, tokens:{accessToken, refreshToken}={}} = response.data;
      setAccesToken(accessToken);
      setRefreshToken(refreshToken);
      setUser(user);
      return {data: {user, accessToken, refreshToken}, error: null};
    } catch(e) {
       return handleHttpError(e);
    }
  }

  async signInWithOAuth(_) {
    return { error: 'Social authentication not implemented' };
  }

  async signInWithPassword(data) {
    try {
      // Make API request
      const response = await publicClient.post("/auth/login", data, {
        headers: {
          "Content-Type": 'application/json'
        }
      });
      const {user, tokens:{accessToken, refreshToken}={}} = response.data;
      setAccesToken(accessToken);
      setRefreshToken(refreshToken);
      setUser(user);
      return {data: {user, accessToken, refreshToken}, error: null};
    } catch(e) {
      return handleHttpError(e);
    }
  }

  async resetPassword(_) {
    return { error: 'Password reset not implemented' };
  }

  async updatePassword(_) {
    return { error: 'Update reset not implemented' };
  }

  async getUser() {
    return {data:getUser(), error: null};
  }

  async me() {
       // Make API request
       const response = await protectedClient.get("/auth/me");
       return response.data;
  }

  async signOut() {
    try {
      const refreshToken =  getRefreshToken();
      if(refreshToken) {
        await publicClient.post("/auth/logout", { refreshToken }, {
          headers: {
            "Content-Type": "application/json"
          }
        }); 
      }
      return {data:null, error:null};
    } catch(e) {
      return handleHttpError(e);
    } finally {
      setUser(null);
      setAccesToken(null);
      setRefreshToken(null);
    }
}
}

export const getAuthClient =()=> new AuthClient();
