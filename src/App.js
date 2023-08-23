import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

/*
head
body
  sidebar
    menuItems
  mainContainer
    categoryList
    videoContainer
      videoCard

when clicked on videoCard watch page opens
  same head
  body
    watchContainer (buttons of like,dislike,subscribe etc.)
    suggestionContainer    

*/

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <MainContainer />,
            },
            {
                path: "watch",
                element: <WatchPage />,
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <>
                <Head />
                <RouterProvider router={appRouter} />
            </>
        </Provider>
    );
}

export default App;
