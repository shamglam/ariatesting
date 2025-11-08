import { AlertDialog } from "../ariaRoles/AlertDialog";
import { ContentInfo } from "../ariaRoles/ContentInfo";
import { DefinitionRole } from "../ariaRoles/DefinitionRole";
import { DialogRole } from "../ariaRoles/DialogRole";
import { Feed } from "../ariaRoles/Feed";
import { ListBox } from "../ariaRoles/Forms/ListBox";
import { Radio } from "../ariaRoles/Forms/Radio";
import { RadioGroup } from "../ariaRoles/Forms/RadioGroup";
import { Grid } from "../ariaRoles/Grid";
import { LogRole } from "../ariaRoles/LogRole";
import { Main } from "../ariaRoles/Main";
import { Marquee } from "../ariaRoles/Marquee";
import { Meter } from "../ariaRoles/Meter";
import { Navigation } from "../ariaRoles/Navigation";
import { Note } from "../ariaRoles/Note";
import { Presentation } from "../ariaRoles/Presentation";
import { ProgressBar } from "../ariaRoles/ProgressBar";
import { Region } from "../ariaRoles/Region";
import { Scrollbar } from "../ariaRoles/Scrollbar";
import { Separator } from "../ariaRoles/Separator";
import { Slider } from "../ariaRoles/Slider";
import { SpinButton } from "../ariaRoles/SpinButton";
import { Status } from "../ariaRoles/Status";
import { Suggestion } from "../ariaRoles/Suggestion";
import { SwitchRole } from "../ariaRoles/SwitchRole";
import { TabList } from "../ariaRoles/TabList";
import { Term } from "../ariaRoles/Term";
import { Alert } from "../ariaRoles/Tested/Alert";
import { ArticleRole } from "../ariaRoles/Tested/ArticleRole";
import { Complementary } from "../ariaRoles/Tested/Complementary";
import { LinkRole } from "../ariaRoles/Tested/LinkRole";
import { ListRole } from "../ariaRoles/Tested/ListRole";
import { Timer } from "../ariaRoles/Timer";
import { Toolbar } from "../ariaRoles/Toolbar";
import { Tooltip } from "../ariaRoles/Tooltip";
import { Tree } from "../ariaRoles/Tree";
import { TreeGrid } from "../ariaRoles/TreeGrid";
import { TreeItem } from "../ariaRoles/TreeItem";
import { Widget } from "../ariaRoles/Widget";


export default function TheRestPage () {
    return (

        <div>

      

        {/* Article Landmark */}
  <article id="article-section"
   aria-label="Artikkelseksjon"
    aria-labelledby="article-title" 
    aria-describedby="article-desc"
     aria-details="article-details">

          <h2 id="article-title" aria-level="2">Tilgjengelig liste og tabell</h2>
          <div id="article-desc" className="visually-hidden">
            Inneholder en WCAG/UAAG-kompatibel liste og tabell.
          </div>
            <div id="article-details" className="visually-hidden">
              Listen bruker korrekt semantikk og tabellen inkluderer overskrifter og scope.
            </div>

          {/* UAAG Compliant List */}
          {/* Simplified list: removed unsupported ARIA attributes for ul/li */}
          <ul aria-label="Fruktliste">
            <li id="fruit1" aria-label="Eple">Eple <span aria-hidden="true">Leses punkt Eple 1 av 3</span></li>
            <li id="fruit2" aria-label="Banan">Banan <span aria-hidden="true">Leses punkt Banan 2 av 3</span></li>
            <li id="fruit3" aria-label="Kirsebær">Kirsebær <span aria-hidden="true">Leses punkt Kirsebær 3 av 3</span></li>
          </ul>

        
       
        </article>

      {/* ARIA Role Stub Components */}
        <section aria-label="ARIA-rollekontroller">
          <h2>ARIA-rollekontroller</h2>
         
        </section>


        <h2 id="label_fruit">Listeboks med størrelse på sett og posisjon i sett</h2>
        <p aria-hidden="true">Leses: valgt cantalouper, markering eple av 16</p>
<ul role="listbox" aria-label="listeboks">
  <li role="option" aria-selected="false" aria-setsize="16" aria-posinset="5">epler <span aria-hidden="true">(Leses punkt Eple 5 av 16)</span></li>
  <li role="option" aria-selected="false" aria-setsize="16" aria-posinset="6">bananer <span aria-hidden="true">(Leses punkt Banan 6 av 16)</span></li>
  <li role="option" aria-selected="true" aria-setsize="16" aria-posinset="7">cantalouper <span aria-hidden="true">(Leses punkt Cantaloupe 7 av 16)</span></li>
  <li role="option" aria-selected="false" aria-setsize="16" aria-posinset="8">dadler <span aria-hidden="true">(Leses punkt Daddel 8 av 16)</span></li>
</ul>

       <div aria-autocomplete='both' tabIndex={0} aria-busy='true' aria-controls='' aria-expanded="true"
        aria-haspopup="true" aria-flowto='' >
            et eller annet
            <p aria-hidden="true">kontrollen har autocomplete, aria-busy, aria-expanded, aria-haspopup</p>
            <p aria-hidden="true">Leses: Gruppe, har hurtigmeny</p>
        </div>


          <div     role="alertdialog" aria-modal="true" tabIndex={0} 
         >

              et eller annet med flowto
            <p aria-hidden="true">kontrollen har modal, aria-busy, aria-expanded, aria-haspopup</p>
            

            <p aria-hidden="true">Leses: Varsel dialog</p>
        </div>
       

        <section aria-label="knappetester">
        <button aria-label="jeg vil trykke på ja-knappen">Ja</button>
        </section>
      

        {/* Article Landmark */}
  <article id="article-section"
   aria-label="Artikkelseksjon"
    aria-labelledby="article-title" 
    aria-describedby="article-desc"
     aria-details="article-details">

                 
        
        </article>

        {/* Form Landmark */}


        {/* ARIA Role Stub Components */}
        <section aria-label="ARIA-rollekontroller">
            <Alert />
        
            <AlertDialog />
            
            <ArticleRole />
            
            <Complementary />


            <ContentInfo />


            <DefinitionRole />
            
            <DialogRole /> 
            <Feed />        
            <Grid />
            <LinkRole />
            <ListBox />
            <ListRole />
            <LogRole />
            <Main />
            <Marquee />
            <ProgressBar />
            <Radio />
            <RadioGroup />
            <Region />
            <Scrollbar />
            <Separator />
            <Slider />
            <SpinButton />
            <Status />
            <Suggestion />
            <SwitchRole />
            <TabList />
            <Term />
            <Timer />
            <Toolbar />
            <Tooltip />
            <Tree />
            <TreeGrid />
            <TreeItem />
        
            <Widget />
          <Meter />
          <Navigation />
          <Note />
        
          <Presentation />
        </section>


       <div aria-autocomplete='both' tabIndex={0} aria-busy='true' aria-controls='' aria-expanded="false"
        aria-haspopup="true" aria-flowto='' ></div>


          <div aria-modal="true" tabIndex={0} role='modal' aria-expanded="false"
        aria-haspopup="true" aria-flowto='' ></div>
        </div>
    );
}