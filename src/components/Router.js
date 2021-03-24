import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Forum from "routes/Forum";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";
import Detail from "routes/Detail";
import Post from "./Post";
import Time from "./Time";
import Home from "./Home";

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
                                <Home />
                            </Route>
                            <Route exact path="/test">
                                <Forum
                                    userObj={userObj}
                                    category="수행평가 게시판"
                                />
                            </Route>
                            <Route exact path="/schedule">
                                <Forum
                                    userObj={userObj}
                                    category="학사일정 게시판"
                                />
                            </Route>
                            <Route exact path="/free">
                                <Forum
                                    userObj={userObj}
                                    category="자유 게시판"
                                />
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
                            <Route exact path="/time">
                                <Time />
                            </Route>
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
