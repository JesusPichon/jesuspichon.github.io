//import { createContext, useState } from "react"
import HomePage from "./pages/HomePage"

//type Lang = 'en' | 'es';
/*
interface LangContextType {
  lang: Lang;
  t: (key: string) => string;
  setLang: (Lang: Lang) => void;
}

/*const LangContext = createContext<LangContextType>({
  lang: 'es',
  t: (key: string) => key,
  setLang: () => {}
});

function LangProvider({children}: {children: ReactNode }){
  const [lang, setLang] = useState()
}*/

function App() {

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
