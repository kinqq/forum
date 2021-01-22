import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { BrowserRouter } from "react-router-dom";

function App() {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState(null);
    const adminList = [
        "iZ8twQlEqYfTII6mCbP2sqNmmRE3",
        "yRH74zbkCsYlfQjDzreVbHEa1EC2",
    ];

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            const priority = adminList.includes(user.uid) ? 1 : 0;
            // 1 = admin, 0 = not admin
            if (user) {
                setUserObj({
                    displayName: user.displayName,
                    uid: user.uid,
                    priority: priority,
                    updateProfile: (args) => user.updateProfile(args),
                });
            } else {
                setUserObj(null);
            }
            setInit(true);
        });
    }, []);
    const refreshUser = () => {
        const user = authService.currentUser;
        setUserObj({
            displayName: user.displayName,
            uid: user.uid,
            updateProfile: (args) => user.updateProfile(args),
        });
    };
    return (
        <>
            {init ? (
                <BrowserRouter>
                    <AppRouter
                        refreshUser={refreshUser}
                        isLoggedIn={Boolean(userObj)}
                        userObj={userObj}
                    />
                </BrowserRouter>
            ) : (
                "Initializing..."
            )}
        </>
    );
}

export default App;
