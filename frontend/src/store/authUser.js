import { create } from 'zustand';
import axios from 'axios';
import toast from 'react-hot-toast';


export const useAuthUserStore = create((set) =>({
    user: null,
    isSigningUp: false,
    signup: async (credentials)=>{
        try{
            set({isSigningUp: true});
            console.log(credentials);
            const response = await axios.post("http://localhost:5000/api/v1/auth/signup", credentials);
            set({user: response.data.user, isSigningUp: false});
            toast.success("Signup successful!");
        }catch(err){
            toast.error(err.response.data.message);
            set({isSigningUp: false, user: null});
        }
    },
    login: async()=>{},
    logout: async()=>{},
    authCheck: async()=>{},
}));