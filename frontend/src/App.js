import NavigationBar from "./components/NavigationBar";

import UploadBox from "./components/UploadBox";

function App() {
  const linkStyling = {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '5rem'
  }

  return (
    <div>
      <NavigationBar />
      <UploadBox />
      <p style={linkStyling}>
        <a href="https://covid19.ontariohealth.ca/">get digital proof of vaccination</a>
      </p>
    </div>
  );
}

export default App;
