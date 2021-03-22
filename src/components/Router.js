import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";
import Detail from "routes/Detail";
import Post from "./Post";
// import Time from "./Time";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                <>
                    {isLoggedIn ? (
                        <div
                            style={{
                                maxWidth: 890,
                                width: "100%",
                                margin: "0 auto",
                                marginTop: 50,
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}
                        >
                            <Route exact path="/">
                                <Home userObj={userObj} />
                            </Route>
                            <Route exact path="/profile">
                                <Profile
                                    userObj={userObj}
                                    refreshUser={refreshUser}
                                />
                            </Route>
                            <Route exact path="/detail/:postId">
                                <Detail userObj={userObj} />
                            </Route>
                            <Route exact path="/new">
                                <Post userObj={userObj} />
                            </Route>
                            {/* <Route exact path="/time">
                                <Time />
                            </Route> */}
                        </div>
                    ) : (
                        <>
                            <Route exact path="/">
                                <Auth />
                            </Route>
                        </>
                    )}
                </>
            </Switch>
        </Router>
    );
};
export default AppRouter;
