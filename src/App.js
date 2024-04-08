import "./App.css";
import Accordian from "./components/accordian";
import ModelTest from "./components/custom-model-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutocomplete from "./components/search-autocomplete-api";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* Accordion*/}
      <Accordian />

      {/* Random color component */}
      <RandomColor />

      <StarRating noOfStarts={10} />
      {/*image slider component*/}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"4"}
      />

      <LoadMoreData />

      {/* Tree view component/ menu UI component / recursive navigation menu*/}
      <TreeView menus={menus} />

      {/*qr code generator*/}
      <QrCodeGenerator />

      {/*ligh dark mode*/}
      <LightDarkMode />
      {/* Scroll indicator component*/}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>

      {/* Custom tabs component*/}
      <TabTest />

      {/*custom model component*/}
      <ModelTest />

      {/* Github profile finder */}
      <GithubProfileFinder />
      {/*search auto complete*/}

      <SearchAutocomplete />

    </div>
  );
}

export default App;
