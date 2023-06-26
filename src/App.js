import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";

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

function App() {
    return (
        <Provider store={store}>
            <>
                <Head />
                <Body />
            </>
        </Provider>
    );
}

export default App;
