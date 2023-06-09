// import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth} from "../firebase-auth";

const useUserData = () => {
    const [authUser] = useAuthState(auth);
    // const [uid, setUid] = useState(null);
    let [user, setUser] = useState(null);

    useEffect(() => {
        // let unsubscribe;

        // if (user) {
        //     try {
        //         unsubscribe = onSnapshot(doc(db, "users", authUser?.uid), doc => {
        //             setUser(doc.data());
        //         })
        //     } catch (e) {
        //         console.log(e);
        //     }
        // }

        // return unsubscribe;
        if (authUser) setUser(authUser);
    }, [authUser]);

    return user;
}

export default useUserData;