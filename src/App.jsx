import Header from "./components/Header/Header";
import CoreConcepts from "./components/Main/CoreConcepts";
import TabContent from "./components/Content/TabContent";

function App() {
    return (
        <>
            <Header/>
            <main>
                <CoreConcepts>Core concept</CoreConcepts>
                <TabContent>Example</TabContent>
            </main>
        </>
    );
}

export default App;
