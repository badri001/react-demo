import "./App.css";
import './appStyle.css'
import { Form } from "./components/Forms";
// import styles from './appStyle.module.css'
// import { Inline } from "./components/inline";
// import { NameList } from "./components/NameList";
// import { ParentComponent } from "./components/ParentComponet";
// import { UserGreeting } from "./components/UserGteetng";
// import { ClickHandler } from "./components/ClickHandler";
// import { Greet } from "./components/Greet";
// import { Message } from "./components/Message";
// import {StyleSheet} from "./components/Stylesheet";
function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman">
        <p>This is children props</p>
      </Greet>
      <Message/>
      <ClickHandler/> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting/> */}
      {/* <NameList /> */}
      {/* <StyleSheet/> */}
      {/* <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}> Success</h1> */}
      <Form/>
    </div>
  );
}

export default App;
