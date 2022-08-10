import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {

    return (
        <Router>
             <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route end path="/" element={<MainPage/>}/>
                            <Route end path="/comics" element={<ComicsPage/>}/>
                            <Route end path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}/>
                            <Route end path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;