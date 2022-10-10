import React, { Fragment } from "react";

// Components
import {Header,Main,Section,Footer} from "./components/Structure";
import {H1,P,Table} from "./components/Typography";
import {Input,Button} from "./components/Forms";

// Context
import { AppContext } from "./controllers/Context";

// Fetch
import { FetchData } from "./controllers/FetchData";

// text
import config from "./storage/text.json";

// App
const App = () => {

  const [data, setData] = React.useState(null);
  const [search,setSearch] = React.useState('ñ');

  async function getSymbbols() {
    if(search.length === 1 && isNaN(search)){
      const response = await FetchData("./symbols.json");
      response.map((item,index) => {
        if(search === item.Symbol) {
          setData(item);
          return false;
        }
      })
    }else{
      setData({
        "Symbol": "👉",
        "Entity Name": "❌"
      })
    }
  }
  return (
    <AppContext.Provider value={data}>
      <Fragment>
        <Header>
          <H1>&lt;{config.title}&gt;</H1>
          <P>{config.description}</P>
        </Header>
        <Main>
            <Section>
              <Input onChange={evt => setSearch(evt.target.value)} value={search}/>
              <Button text="Buscar" onClick={getSymbbols}/>
              {data ? (<Table headers={[config.symbol,config.result]} values={[data['Symbol'],data['Entity Name']]}/>) : ''}
            </Section>
        </Main>
        <Footer>
          <P>{config.created} &hearts; <a href={config.author.url}>{config.author.name}</a></P>
        </Footer>
      </Fragment>
    </AppContext.Provider>
  );
};

export default App;
